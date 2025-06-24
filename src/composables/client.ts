import createClient from 'openapi-fetch'
import type { Middleware } from 'openapi-fetch'
import type { paths } from '@/types/schema.d.ts'
import { createSharedComposable } from '@vueuse/core'

export const useClient = createSharedComposable(() => {
    const headersMiddleware: Middleware = {
        async onRequest({ request }) {
            const headers = Object.entries({
                'account-token': '',
            })

            for (const [key, value] of headers) {
                request.headers.set(key, value)
            }

            return request
        },
    }

    const client = createClient<paths>({
        baseUrl: import.meta.env.VITE_API_URL,
    })

    client.use(headersMiddleware)

    return client
})
