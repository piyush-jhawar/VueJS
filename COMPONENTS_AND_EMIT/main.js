const app = Vue.createApp({
  data() {
    return {
      comments: [
        {
          username: "alice",
          content: "First",
        },
        {
          username: "bob",
          content: "Hello World!",
        },
        {
          username: "ironman",
          content: "I am ironman.",
        },
        {
          username: "super",
          content: "I am superman.",
        },
      ],
    };
  },
  methods: {
    addNewComment(newComment) {
        this.comments.push(newComment);

    },
  },
});

//comment list component
app.component("comment-list", {
    emits: ["submit-comment"],
    props: {
        comments: {
            type: Array,
            required: true
        },

    },
    data() {
        return {
            commentAuthor: null,
            commentBody: null,
            error: null
        }

    },
    methods:{
        onSubmit() {
            if (this.commentAuthor && this.commentBody){
                const newComment = {
                    username: this.commentAuthor,
                    content: this.commentBody,
                }
                this.$emit("submit-comment", newComment);
                this.commentAuthor= null;
                this.commentBody=null;
                if (this.error) {
                    this.error = null;
                }
            } else {
                this.error = "Please fill out both fields."
            }
            

        }
    },
    template: `<div class="container mt-2">
    <single-comment v-for="comment in comments" :key="comment.username" :comment="comment"></single-comment>
    <hr>
    <h3>{{ error }}</h3>
    <form @submit.prevent="onSubmit">
      <div class="form-group">
        <label for="commentAuthor">Your Username</label>
        <input type="text" class="form-control" id="commentAuthor" v-model="commentAuthor">
      </div>
      <div class="form-group">
        <label for="commentBody">Add a Comment</label>
        <textarea cols="40" rows="3" id="commentBody" v-model="commentBody"></textarea>
      </div>
      <button class="btn btn-sm btn-primary" type="submit">Publish Comment</button>
    </form>
    </div>`,

});

//Single comment component
app.component("single-comment", {
  props: {
    comment: {
      type: Object,
      required: true,
    },
  },
  template: `<div class="mb-2">
    <div class="card">
      <div class="card-header">
        <p>Published by: {{ comment.username }}</p>
      </div>
      <div class="card-body">
        <p>{{ comment.content }}</p>   
       </div>
    </div>
</div>`,
});

const mountedApp = app.mount("#app");
