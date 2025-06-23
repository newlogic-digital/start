<script setup lang="ts">
  import { useRoute } from 'vue-router'
  import DefaultLayout from './layouts/default.vue'

  const route = useRoute()

  const layouts = {
    DefaultLayout,
  }

  type Layouts = keyof typeof layouts
</script>

<template>
  <Icons />
  <component :is="layouts[route.meta.layout as Layouts] || DefaultLayout">
    <RouterView />
  </component>
  <Toaster />
</template>

<style>
  @import "./app.css";
</style>
