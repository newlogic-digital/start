import { defineStore } from 'pinia'
import { useId } from 'vue'

interface Toast {
    id?: string
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
            const id = useId()

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
