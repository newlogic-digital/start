<script setup lang="ts">
  import type { RouteLocationRaw, RouterLinkProps } from 'vue-router'
  import { showRipple } from 'winduum/src/utilities/ripple/index.js'

  type variants = 'square' | 'circle' | 'bordered' | 'muted' | 'ghosted'
  type sizes = 'sm' | 'lg'

  interface Props extends Omit<RouterLinkProps, 'to'> {
    to?: RouteLocationRaw
    as?: string
    size?: sizes | `${sizes} ${string}`
    variant?: variants | `${variants} ${string}`
    loading?: boolean
  }

  withDefaults(defineProps<Props>(), {
    as: 'button',
    viewTransition: true,
  })
</script>

<template>
  <component
    :is="as"
    v-if="!to"
    class="x-button"
    :class="[variant, size]"
    :data-loading="loading"
    @click="showRipple"
  >
    <slot></slot>
    <span
      v-if="loading"
      class="spinner spinner-absolute"
    ></span>
  </component>
  <RouterLink
    v-else
    class="x-button"
    :to="to"
    :class="[variant, size]"
    active-class=""
    exact-active-class=""
    :view-transition="true"
    @click="showRipple"
  >
    <slot></slot>
    <span
      v-if="loading"
      class="spinner spinner-absolute"
    ></span>
  </RouterLink>
</template>
