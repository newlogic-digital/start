<script setup lang="ts">
  import { computed, onMounted, ref, watch } from 'vue'
  import { useToasterStore } from '@/stores/toaster.ts'

  const root = ref()
  const toaster = useToasterStore()
  const toasterItems = computed(() => toaster.items)

  const togglePopover = () => {
    if (toaster.items.length > 0) root.value.showPopover()
    else root.value.hidePopover()
  }

  onMounted(() => {
    togglePopover()
  })

  watch(toasterItems, () => {
    togglePopover()
  })
</script>

<template>
  <ol
    ref="root"
    class="x-toaster items-end"
    popover="manual"
  >
    <Toast
      v-for="item in toaster.items"
      :id="item.id"
      :key="item.id"
      :class="[item.class]"
      :title="item.title"
      :text="item.text"
    />
  </ol>
</template>
