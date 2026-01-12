import { Injectable } from '@angular/core';

export type ToastType = 'success' | 'info' | 'warning' | 'danger';

export interface ToastMessage {
    id: number;
    text: string;
    type: ToastType;
}

@Injectable({ providedIn: 'root' })
export class ToastService {
    toasts: ToastMessage[] = [];

    show(text: string, type: ToastType = 'info', delay = 3000) {
        const toast: ToastMessage = {
            id: Date.now(),
            text,
            type
        };

        this.toasts.push(toast);

        setTimeout(() => this.remove(toast.id), delay);
    }

    remove(id: number) {
        this.toasts = this.toasts.filter(t => t.id !== id);
    }
}
