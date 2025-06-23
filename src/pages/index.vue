<script setup lang="ts">
  import { useI18n } from 'vue-i18n'
  import { useToasterStore } from '@/stores/toaster.ts'

  const { t } = useI18n()

  const toaster = useToasterStore()

  const showToast = () => {
    toaster.add({
      class: 'accent-error',
      title: 'Chyba',
      text: 'A sakra!',
    })
  }
</script>

<template>
  <Button @click="showToast">
    {{ t('hello') }}
  </Button>
</template>
