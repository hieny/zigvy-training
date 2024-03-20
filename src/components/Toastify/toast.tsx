import Toastify from "./Toastify";

let instance: ToastManager | null = null;

class ToastManager {
  static getInstance() {
    if (!instance) {
      instance = new ToastManager();
    }
    return instance;
  }

  private setToast: ((toast: JSX.Element | null, show: boolean) => void) | null = null;

  setToastSetter(setter: (toast: JSX.Element | null, show: boolean) => void) {
    this.setToast = setter;
  }

  info(message: string) {
    this.showToast(message, "info");
  }

  success(message: string) {
    this.showToast(message, "success");
  }

  danger(message: string) {
    this.showToast(message, "danger");
  }

  showWarning(message: string) {
    this.showToast(message, "warning");
  }

  private showToast(message: string, type: string) {
    if (this.setToast) {
      this.setToast(<Toastify show={true} type={type} message={message} />, true);
      setTimeout(() => {
        this.hideToast();
      }, 3000);
    }
  }

  private hideToast() {
    if (this.setToast) {
      this.setToast(null, false);
    }
  }
}

export const toastManager = ToastManager.getInstance();
