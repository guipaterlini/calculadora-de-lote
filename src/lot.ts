// valor do m2
const valorM2: number = 1000;

// Calculo area em m2 = largura * profundidade
let l: number;
let p: number;

const calculoArea = (l: number, p: number): number => l * p;

// Calculo do preco = area * valor do m2
const calculoPrecoM2 = (calculoArea: number): number =>
  calculoArea * valorM2;

// Pegar dados do input e atualizar o valor

console.log(calculoArea(1, 10));
