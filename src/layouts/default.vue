<script setup lang="ts">
import Menu from "../components/menu.vue"
</script>

<template>
  <main class="main">
    <Menu />
    <section class="contain">
      <h1>default layout</h1>
      <router-view />
    </section>
  </main>
</template>

<style scoped>
.main {
  display: flex;
  flex-direction: column;
  height: 100vh;
}
</style>