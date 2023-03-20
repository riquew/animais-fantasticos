export default async function fetchBitCoin(url, target) {
  try {
    const bitCoinJson = await (await fetch(url)).json();
    const bitCoinBRL = bitCoinJson.BRL.buy;
    const doacao = String((100 / bitCoinBRL).toFixed(6)).replace(".", ",");
    const bitCoinValor = document.querySelector(target);
    if (bitCoinValor) bitCoinValor.innerText = doacao;
  } catch (e) {
    console.log(e);
  }
}

// function fetchBitCoin(url) {
//   fetch(url).then((response) => {
//     response.json().then((bitcoin) => {
//       const bitCoinBRL = bitcoin.BRL.buy;
//       const bitCoinValor = document.querySelector(".btc-preco");
//       if (bitCoinValor)
//         bitCoinValor.innerText = String((100 / bitCoinBRL).toFixed(6)).replace(
//           ".",
//           ","
//         );
//     });
//   });
// }
