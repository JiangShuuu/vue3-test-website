<script setup lang="ts">
import { useRoute } from 'vue-router';

const route = useRoute()
</script>

<template>
  <p>items/{{route.params.id}}/itemnews</p>
</template>