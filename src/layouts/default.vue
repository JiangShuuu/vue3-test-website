<script setup lang="ts">
import Menu from "../components/menu.vue"
</script>

<template>
  <main class="main">
    <Menu />
    <section class="contain">
      <h1>Layout 1</h1>
      <router-view />
    </section>
  </main>
</template>