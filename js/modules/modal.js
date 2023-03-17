export default class Modal {
  constructor(botaoAbrir, botaoFechar, containerModal) {
    this.modalOpen = document.querySelector(botaoAbrir);
    this.modalClose = document.querySelector(botaoFechar);
    this.containerModal = document.querySelector(containerModal);
    this.eventToggleModal = this.eventToggleModal.bind(this);
    this.cliqueForaModal = this.cliqueForaModal.bind(this);
  }

  toggleModal() {
    this.containerModal.classList.toggle("ativo");
  }

  eventToggleModal(event) {
    event.preventDefault();
    this.toggleModal();
  }

  cliqueForaModal(event) {
    if (event.target === this.containerModal) this.toggleModal();
  }

  addModalEvents() {
    this.modalOpen.addEventListener("click", this.eventToggleModal);
    this.modalClose.addEventListener("click", this.eventToggleModal);
    this.containerModal.addEventListener("click", this.cliqueForaModal);
  }

  init() {
    if (this.modalOpen && this.modalClose && this.containerModal) {
      this.addModalEvents();
    }
    return this;
  }
}
