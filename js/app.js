const { createApp } = Vue;

createApp({
  data() {
    return {
      newTask: {
        text: "",
        done: false,
      },

      tasks: [
        {
          text: "Fare la lavatrice",
          done: true,
        },
        {
          text: "Stendere il bucato",
          done: false,
        },
        {
          text: "Gettare la spazzatura",
          done: true,
        },
      ],
    };
  },
  methods: {
    addTask() {
      this.tasks.push({
        ...this.newTask,
      });
      this.newTask.text = "";
    },
    addClass(index) {
      let addingClass = "";
      if (this.tasks[index].done == true) {
        addingClass = "striked";
        // this.btnStatus = "Da completare";
      }
      return addingClass;
    },
    deleteTask(index) {
      this.tasks.splice(index, 1);
    },
    changeValue(index) {
      this.tasks[index].done = !this.tasks[index].done;
      // this.btnStatus = "Da completare";
    },
    // changeBtnstatus(index) {
    //   this.btnStatus = this.tasks[index].done = !this.tasks[index].done;
    // },
  },
}).mount("#app");
