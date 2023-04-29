"use strict";
// valor do m2
var valorM2 = 1000;
// Calculo area em m2 = largura * profundidade
function calculoArea(l, p) {
    return l * p;
}
// Calculo do preco = area * valor do m2
function calculoPrecoM2(calculoArea) {
    return calculoArea * valorM2;
}
// Pegar dados do input e atualizar o valor
console.log(calculoPrecoM2(1));
