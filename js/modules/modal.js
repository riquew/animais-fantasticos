export default function initModal() {
  const modalOpen = document.querySelector("[data-modal='abrir']");
  const modalClose = document.querySelector("[data-modal='fechar']");
  const containerModal = document.querySelector(".modal-container");
  function toggleModal(event) {
    event.preventDefault();
    containerModal.classList.toggle("ativo");
  }

  function cliqueForaModal(event) {
    if (event.target === this) toggleModal(event);
  }

  if (modalOpen && modalClose && containerModal) {
    modalOpen.addEventListener("click", toggleModal);
    modalClose.addEventListener("click", toggleModal);
    containerModal.addEventListener("click", cliqueForaModal);
  }
}
