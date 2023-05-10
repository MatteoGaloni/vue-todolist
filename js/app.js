const { createApp } = Vue;

createApp({
  data() {
    return {
      task: {
        text: "COSA DA FARE",
        done: false,
      },
    };
  },
  methods: {
    prova() {
      console.log("la prova funziona");
    },
  },
}).mount("#app");
