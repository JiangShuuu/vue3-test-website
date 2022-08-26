<script setup lang="ts">
import { useRoute } from 'vue-router';

const route = useRoute()
const id = 111
</script>

<template>
  <main class="space-x-4 flex flex-col justify-center items-start">
    <h1>items</h1>
    <router-link class="router" :to="`/items/${id}`">to /items/:id</router-link>
    <router-link class="router" :to="`/items/${id}/itemnews`">to /items/:id/itemnews</router-link>
  </main>
</template>