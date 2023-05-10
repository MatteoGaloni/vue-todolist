const { createApp } = Vue;

createApp({
  data() {
    return {
      tasks: [
        {
          text: "Fare la lavatrice",
          done: true,
        },
        {
          text: "Stendere il bucato",
          done: true,
        },
        {
          text: "Piegare il bucato",
          done: true,
        },
      ],
    };
  },
  methods: {
    prova() {
      console.log("la prova funziona");
    },
  },
}).mount("#app");
