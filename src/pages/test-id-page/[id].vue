<script setup lang="ts">
import { useRoute } from 'vue-router';

const route = useRoute()
</script>

<template>
  <p>test-id-page/{{ route.params.id }}</p>
</template>