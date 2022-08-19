const app = Vue.createApp({
  data() {
    return {
      tasks: [],
      
    };
  },
  methods: {
    addNewTask(newTask) {
      this.tasks.push(newTask);

    }
  },
});


app.component("todoinput", {
  emits: ["addtasks"],
  props: {
    tasks: {
      type: Array,
      required: true,
    },

  },
  data() {
    return {
      task: null,
      counter: 0,
      helptext: "To add a new task, write something and press enter!",
    }
  },
  methods: {
    onSubmit() {
      if (this.task) {
        const newtask = this.task;
        this.counter = this.counter + 1;
        this.helptext = null;
        this.task = null;
        this.$emit("addtasks", newtask);
      }
    },
    minusCounter() {
      this.counter = this.counter - 1;
      if (this.counter === 0){
        this.helptext = "To add a new task, write something and press enter!";
      }
    }


  },
  template: `
  Counter:{{ counter }}
  <form @submit.prevent="onSubmit">
  <input type="text" placeholder="What do you need to do?" v-model="task">
</form>
<displaytodo v-for="task in tasks" :key="task" :task="task" @minuscounter="minusCounter()"></displaytodo>
<p> {{ helptext }} </p>`
});


app.component("displaytodo", {
  emits: ["minuscounter"],
  props: {
    task: {
      type: String,
      required: true,
    },
  },
  methods: {
    onClick() {
      this.$emit("minuscounter");
    }

  },
  template: `
  {{ counter }}
  <div class="alert alert-success alert-dismissible fade show" role="alert">
  <strong>{{ task }}</strong>
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close" @click="onClick"></button>
</div>`
});

const mountedApp = app.mount("#app");
