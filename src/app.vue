<script setup lang="ts">
  import { useRoute } from 'vue-router'
  import DefaultLayout from './layouts/default.vue'

  const route = useRoute()

  const layouts = {
    DefaultLayout,
  }
</script>

<template>
  <Icons />
  <component :is="layouts[route.meta.layout as string] || DefaultLayout">
    <RouterView />
  </component>
  <Toaster />
</template>

<style>
  @import "./app.css";
</style>
