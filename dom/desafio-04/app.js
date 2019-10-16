new Vue({
  el: "#desafio",
  data: {
    classeCSS: "destaque",
    classeC: true,
    tamanho: 1,
    classe3: "",
    classe4: ""
  },
  methods: {
    iniciarEfeito() {
      setInterval(() => {
        this.classeCSS = this.classeCSS == "destaque" ? "encolher" : "destaque";
      }, 1000);
    },

    iniciarProgresso() {
      var myVar = setInterval(() => {
        this.tamanho < 1000 ? this.tamanho++ : clearInterval(myVar);
      }, 1);
    },
    setPerigo() {
      if (event.target.value === "true") {
        this.classeC = true;
      } else if (event.target.value == "false") {
        this.classeC = false;
      }
    }
  }
});
