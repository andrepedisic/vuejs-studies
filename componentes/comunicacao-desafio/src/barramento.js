import Vue from "vue";
export default new Vue({
  methods: {
    userSelect(user) {
      this.$emit("select1", user);
    },
    userSelected(callback) {
      this.$on("select1", callback);
    }
  }
});
