/*let dinheiro= 8500

if(dinheiro >= 10000) {
    alert("Partiu viajar")
} else {
    alert("Não vou viajar")
}
*/

/*
let nota1= prompt("Digite sua primeira nota:")
let nota2= prompt("Digite a segunda nota:")
let nota3= prompt("Digite a terceira nota:")

let media= (parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3)) /3

if(media >= 6){
    alert("Sua nota foi " +media+ " Você passou de ano")
}
else if(media >=4 && media <=5){
    alert("Sua nota foi " +media+ " Você está de recuperação.")

} else {
    alert("Sua nota foi " +media+ " Você foi reprovado")
}

    //alert("Sua média é " + Math.round (media))
*/



/*
let n1= prompt("Digite um numero:")
let n2= prompt("Digite outro numero:")

if( n1 >= n2){
    alert("O numero maior é:" +n1) 
} else{
    alert("O numero maior é:" +n2)
}
*/

/*
let a= prompt("Digite um valor:")
let b= prompt("Digite um valor:")
let c= prompt("Digite um valor:")
let d= prompt("Digite um valor:")

if(b>c && d>a && c+d > a+b && c>0 && d>0){
    alert("Valores Aceitos")
} else {
    alert("Valores não aceitos")
}
*/


/*
let ano= prompt("Digite o ano que nasceu:")
let idade= parseInt(2023) - parseInt(ano)


if(idade >= 18 && idade <= 65){
    alert("Você tem " +idade+ " anos e é obrigado a Votar")
} else {
    alert("Você tem" +idade+ " anos e seu voto é opcional")
}
*/



/*
let nivel= prompt("Qual o seu nivel:")

if(nivel == 1){
    let ht= prompt("Quantas horas trabalhadas:")
   alert("O professor recebe " +ht * parseFloat(12)) 
} 
else if(nivel ==2){
    let ht= prompt("Quantas horas trabalhadas:")
   alert("O professor recebe " +ht * parseFloat(17))
} 
else if(nivel ==3){
    let ht= prompt("Quantas horas trabalhadas:")
    alert("O professor recebe " +ht * parseFloat(25))
} else {
    alert("Escolha um nível existente")
}

*/

let peso=  prompt ("Digite seu peso:")
let altura= prompt ("Digite sua altura:")
let resultado= parseFloat(peso) / parseFloat(altura*altura)

if(resultado < 18.5){
    alert("Você está abaixo do peso")
}
else if(resultado >= 18.5 && resultado <=24.9){
    alert("Você está com o peso normal")
}
else if(resultado > 24.9 && resultado <=29.9) {
    alert("Você está acima do peso.")
}
else if(resultado > 29.9 && resultado <= 34.9){
    alert("Você está com obesidade grau 1")
}
else if(resultado > 34.9 && resultado <=39.9){
    alert("Você está com obesidade grau 2")
}
else if(resultado > 39){
    alert("Você está com obesidade grau 3")
} else {
    alert("Não foi possivél calcular.")
}





















