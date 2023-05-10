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
          text: "Piegare il bucato",
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
      //   this.tasks.push(this.newTask);
      console.log(this.newTask.text);
      this.newTask.text = "";
    },
    addClass(index) {
      let addingClass = "ciao";
      if (this.tasks[index].done == true) {
        addingClass = "striked";
      }
      return addingClass;
    },
    deleteTask(index) {
      this.tasks.splice(index, 1);
    },
  },
}).mount("#app");
