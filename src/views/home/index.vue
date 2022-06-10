<script setup lang="ts">
import FirstSideNav from "./firstnav/FirstSideNav.vue";
import SecondSideNav from "./secondnav/SecondSideNav.vue";

</script>

<template>
  <div class="home-view">
    <FirstSideNav />
    <SecondSideNav />
  </div>
</template>

<style lang="scss">
.home-view {
  width: 1000px;
  height: 700px;
  margin: 100px auto;
}
</style>