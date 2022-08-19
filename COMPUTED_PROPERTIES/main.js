const app = Vue.createApp({
  data() {
    return {
      first_name: "John",
      last_name: "Doe",
    };
  },
  computed: {
    getRandomComputed() {
      return Math.random();
    },
    fullName() {
      return `${this.first_name} ${this.last_name}`
    },
    reverseFullName() {
      let first_name = this.first_name.split("").reverse().join("");
      let last_name = this.last_name.split("").reverse().join("");
      return `${first_name} ${last_name}`
    }
  },
  methods: {
    getRandomNumber() {
      return Math.random();
    },
  },
});

const mountedApp = app.mount("#app");
