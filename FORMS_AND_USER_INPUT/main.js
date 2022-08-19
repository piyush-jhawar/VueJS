// const app = Vue.createApp({
//   data() {
//     return {
//       color: "green",
//     };
//   },
//   methods: {},
// });

// const mountedApp = app.mount("#app");

// const app = Vue.createApp({
//     data() {
//       return {
//         text: "",
//         checked: true,
//         city: "",
//       };
//     },
//     methods: {},
//   });

//   const mountedApp = app.mount("#app");

const app = Vue.createApp({
  data() {
    return {
      comment: null,
      comments: [],
      error: null,
    };
  },
  methods: {
    onSubmit() {
      if (this.comment) {
        let newComment = this.comment;
        this.comments.push(newComment);
        this.comment = null;
        if (this.error) {
          this.error = null;
        }
      } else {
        this.error = "The comment field cannot be blank.";
      }
    },
  },
});

const mountedApp = app.mount("#app");
