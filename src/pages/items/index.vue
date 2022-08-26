<script setup lang="ts">
const id = 111
</script>

<template>
  <main class="space-y-4 flex flex-col items-start">
    <h1 class="text-2xl">items</h1>
    <router-link class="router" :to="`/items/${id}`">to /items/:id</router-link>
    <router-link class="router" :to="`/items/${id}/itemnews`">to /items/:id/itemnews</router-link>
  </main>
</template>