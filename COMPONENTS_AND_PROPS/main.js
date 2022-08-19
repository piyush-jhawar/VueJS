const app = Vue.createApp({
  data() {
    return {
        comments: [
            {
                username: "alice",
                content: "First"
            },
            {
                username: "bob",
                content: "Hello World!"
            },
            {
                username: "ironman",
                content: "I am ironman."
            },
            {
                username: "super",
                content: "I am superman."
            }
        ]
    };
  },
  methods: {},
});


app.component("comment", {
    props: {
        comment: {
            type: Object,
            required: true,
        }
    },
    template: `<div>
    <div class="card-body">
     <p>{{ comment.username }}</p>
     <p>{{ comment.content }}</p>   
    </div>
    <hr>
</div>`
})

const mountedApp = app.mount("#app");
