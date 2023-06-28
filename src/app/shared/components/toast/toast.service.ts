import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  toasts: any[] = [];

  show(text: string, type: 'success' | 'danger' | 'info',options: any = {}) {
		this.toasts.push({ text, ...{ classname: `bg-${type} text-light`, delay: 5000 } });
   }

	remove(toast: any) {
		this.toasts = this.toasts.filter((t) => t !== toast);
	}

	clear() {
		this.toasts.splice(0, this.toasts.length);
	}
}
