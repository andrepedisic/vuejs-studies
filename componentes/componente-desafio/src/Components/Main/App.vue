<template>
  <v-app>
    <Menu></Menu>

    <Toolbar></Toolbar>

    <Content></Content>

    <Footer></Footer>
  </v-app>
</template>

<script>
import Footer from "../Template/Footer.vue";
import Content from "../Widget/Content.vue";
import Toolbar from "../Template/Toolbar.vue";
import Menu from "../Template/Menu.vue";

export default {
  components: {
    Footer,
    Content,
    Toolbar,
    Menu
  }
};
</script>
