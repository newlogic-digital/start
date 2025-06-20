<script setup lang="ts">
  import { useRoute } from 'vue-router'
  import DefaultLayout from './layouts/default.vue'

  const route = useRoute()

  const layouts = {
    DefaultLayout,
  }
</script>

<template>
  <template>
    <Icons />
    <div class="x-app">
      <component :is="layouts[route.meta.layout as string] || DefaultLayout">
        <RouterView />
      </component>
    </div>
    <Toaster />
  </template>
</template>

<style>
  @import "./app.css";
</style>
