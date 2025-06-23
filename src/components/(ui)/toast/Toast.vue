<script setup lang="ts">
  import { showToast, closeToast } from 'winduum/src/components/toast/index.js'
  import { onMounted, ref } from 'vue'
  import { useToasterStore } from '@/stores/toaster.ts'

  interface Props {
    id?: string
    title?: string
    text?: string
  }

  withDefaults(defineProps<Props>(), {})

  const root = ref()
  const toaster = useToasterStore()

  onMounted(() => {
    showToast(root.value)
  })
</script>

<template>
  <li
    :id="id"
    ref="root"
    class="x-toast"
    role="status"
    aria-live="assertive"
    aria-atomic="true"
  >
    <div class="x-toast-content">
      <div class="flex-col">
        <div class="x-title">
          {{ title }}
        </div>
        <div class="x-text">
          {{ text }}
        </div>
      </div>
      <Button
        size="sm"
        variant="muted circle"
        class="ml-auto"
        @click="async () => {
          await closeToast(root, { remove: false })
          id && toaster.remove(id)
        }"
      >
        <svg>
          <use href="#icon-x-mark" />
        </svg>
      </Button>
    </div>
  </li>
</template>
