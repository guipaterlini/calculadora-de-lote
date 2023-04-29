// valor do m2
const valorM2: number = 1000;

// Calculo area em m2 = largura * profundidade
function calculoArea(l: number, p: number): number {
  return l * p;
}

// Calculo do preco = area * valor do m2
function calculoPrecoM2(area: number): number {
  return area * valorM2;
}

// Pegar dados do input e atualizar o valor

console.log(calculoPrecoM2(1));
