// valor do m2
const valorM2: number = 1000;

function formatarPreco(preco: number) {
  // Usar o tolocalestring com esses atributos para o valor resultante sair como R$ XX,XX)
  return preco.toLocaleString("pt-br", { style: "currency", currency: "BRL" });
}

// Calculo area em m2 = largura * profundidade
function calculoArea(largura: number, comprimento: number): number {
  return largura * comprimento;
}

// Calculo do preco = area * valor do m2
function calculoPrecoM2(area: number) {
  const preco: number = area * valorM2;

  return formatarPreco(preco);
}

// Pegar dados do input e atualizar o valor
const form = document.querySelector("#calculadora") as HTMLFormElement;

form.addEventListener("submit", (element) => {
  element.preventDefault();

  // pegar os valores dos inputs
  let largura: number = form.largura.value;
  let comprimento: number = form.comprimento.value;

  // calcular area
  let area = calculoArea(largura, comprimento);

  // calcular preco
  let preco = calculoPrecoM2(area);

  // atualizar paragrafo
  const valorElement = document.querySelector("#valor") as HTMLParagraphElement;
  valorElement.innerText = preco;
});
