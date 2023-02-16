export default function initFuncionamento() {
  const funcionamento = document.querySelector("[data-semana]");

  if (funcionamento) {
    const diasSemanas = funcionamento.dataset.semana.split(",").map(Number);

    const horarioSemana = funcionamento.dataset.horario.split(",").map(Number);

    const dataAgora = new Date();
    const diaAgora = dataAgora.getDay();
    const horarioAgora = dataAgora.getHours();
    let estaAberto =
      diaAgora in diasSemanas &&
      horarioAgora >= horarioSemana[0] &&
      horarioAgora < horarioSemana[1];

    if (estaAberto) {
      funcionamento.classList.add("aberto");
    }
  }
}
