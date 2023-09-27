/*
****EXERCICIO 1

let n1= prompt("Digite um número?")
let n2= prompt("Digite outro número?")


let resultado = parseInt(n1) + parseInt(n2)
alert(resultado)*/

/* 


*** EXERCICIO 2
let base= prompt("Digite a base:")
let altura= prompt("Digite a altura:")

let resultado= (parseInt(base) * parseInt(altura))/2

alert(resultado)


******EXERCICIO 3
let nota1= prompt("Digite sua primeira nota:")
let nota2= prompt("Digite a segunda nota:")
let nota3= prompt("Digite a terceira nota:")

let media= (parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3)) /3

alert("Sua média é " + Math.round (media))
*/

/* 
******EXERCICIO 4
let numFunc= prompt("Digite seu usúario:")
let ht= prompt("Digite as suas horas trabalhadas:")
let valorHora = prompt("Digite o valor que recebe por hora:")

let resultado=(ht) * (parseFloat(valorHora))

alert("Seu número de funcionário é: " +numFunc+ " Seu Salário é:  " +resultado)
*/

let distancia= prompt("Digite a distancia percorrida:")
let consumo= prompt("Digite o total de combústivel gasto:")

let resultado=(parseFloat(distancia) / parseFloat(consumo))

alert("Seu consumo médio é: " +resultado.toFixed(3)+ "KM/L")
