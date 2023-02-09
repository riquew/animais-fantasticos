export default function initModal() {
  const modalOpen = document.querySelector("[data-modal='abrir']");
  const modalClose = document.querySelector("[data-modal='fechar']");
  const modalForm = document.querySelector(".modal-container");

  function modalOn(event) {
    event.preventDefault();
    modalForm.classList.add("ativo");
  }

  function modalOff(event) {
    event.preventDefault();
    modalForm.classList.remove("ativo");
  }

  modalOpen.addEventListener("click", modalOn);
  modalClose.addEventListener("click", modalOff);
}
