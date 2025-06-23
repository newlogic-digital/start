import { defineStore } from 'pinia'
import { getId } from '@newlogic-digital/utils-js'

interface Toast {
    id?: string
    class?: string
    title: string
    text: string
}

interface Toaster {
    items: Toast[]
}

export const useToasterStore = defineStore('toaster', {
    state: (): Toaster => {
        return {
            items: [],
        }
    },
    actions: {
        add(toast: Toast) {
            const id = getId()

            this.items.push({
                id,
                ...toast,
            })
        },
        remove(id: string) {
            this.items = this.items.filter(item => item.id !== id)
        },
    },
})
