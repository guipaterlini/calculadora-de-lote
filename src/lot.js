"use strict";
// valor do m2
var valorM2 = 1000;
// Calculo area em m2 = largura * profundidade
var l;
var p;
var calculoArea = function (l, p) { return l * p; };
// Calculo do preco = area * valor do m2
var calculoPrecoM2 = function (calculoArea, valorM2) {
    return calculoArea * valorM2;
};
// Pegar dados do input e atualizar o valor
console.log(calculoArea(1, 10));
