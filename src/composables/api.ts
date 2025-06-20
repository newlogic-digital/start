import createClient from 'openapi-fetch'
import type { paths } from '@/types/schema.d.ts'
import { createSharedComposable } from '@vueuse/core'

export const useApi = createSharedComposable(() => {
    return createClient<paths>({
        baseUrl: import.meta.env.VITE_API_URL,
    })
})
