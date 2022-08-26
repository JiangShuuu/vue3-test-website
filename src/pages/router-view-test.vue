<template>
  <main class="space-y-2">
    <p>router-view-test</p>
    <div class="space-x-2">
      <router-link to="/router-view-test/page2" class="router">page2</router-link>
      <router-link to="/router-view-test/page3" class="router">page3</router-link>
    </div>
    <section class="border flex items-center justify-center flex-col">
      <p class="text-2xl">router-view area</p>
      <div class="my-4">
        <router-view></router-view>
      </div>
    </section>
  </main>
</template>