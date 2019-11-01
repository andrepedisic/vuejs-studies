<template>
  <div class="contadores">
    <h1>contadores</h1>
    <app-contador v-for="c in 5" :key="c"></app-contador>
    <button>?</button>
  </div>
</template>

<script>
import contador from "./Contador.vue";
export default {
  components: { "app-contador": contador }
};
</script>

<style>
</style>