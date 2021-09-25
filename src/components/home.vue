<template>
  <div id="app">
    <v-header></v-header>
    <router-view></router-view>
    <v-footer></v-footer>

    <v-dialog></v-dialog>
  </div>
</template>

<script>
import header from "./header/header";
import footer from "./footer/footer";
import dialog from "./dailog/dialog";
export default {
  name: "home",
  components: {
    "v-header": header,
    "v-footer": footer,
    "v-dialog": dialog
  },
};
</script>

<style>
@import "./../assets/common";
</style>
