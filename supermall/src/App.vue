<template>
  <div id="app">
    <example-bar></example-bar>
    <router-view></router-view>
  </div>
</template>

<script>
import ExampleBar from "@/components/content/mainbar/ExampleBar";
export default {
  name: 'app',
  components: {
    ExampleBar
  }
}
</script>

<style>
@import "assets/css/base.css";
</style>
