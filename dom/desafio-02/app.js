new Vue({
  el: "#desafio",
  data: {
    valor: ""
  },
  methods: {
    exibirAlerta() {
      alert("Voce clicou o botao.");
    },
    guardarValor() {
      this.valor = event.target.value;
      console.log(this.valor);
    }
  }
});
