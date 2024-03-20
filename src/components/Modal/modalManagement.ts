let instance: ModalManager | null = null;

class ModalManager {
  static getInstance() {
    if (!instance) {
      instance = new ModalManager();
    }
    return instance;
  }

  private showModal: ((show: boolean) => void) | null = null;

  setModalSetter(setter: (show: boolean) => void) {
    this.showModal = setter;
  }

  openModal() {
    this.showModal?.(true);
  }

  closeModal() {
    this.showModal?.(false);
  }
}

export const modalManager = ModalManager.getInstance();
