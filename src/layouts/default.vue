<script setup lang="ts">
import Menu from "../components/menu.vue"
</script>

<template>
  <main class="main">
    <Menu />
    <section class="w-full mx-auto max-w-[500px]">
      <h1 class="text-4xl mb-10 mt-5">Layout 1</h1>
      <router-view />
    </section>
  </main>
</template>