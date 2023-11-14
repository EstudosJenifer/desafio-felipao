/**
 * Crie uma variável para armazenar o nome e a quantidade de Experiência (XP) de um herói, depois utiliza uma estrutura de decisão para apresentar alguma das mensagens abaixo?
Se XP for menor do que 1.000 = Ferro 
Se XP for entre 1.001 e 2.000 = Bronze
Se XP for entre 2.001 e 5.000 = Prata 
Se XP for entre 5.001 e 6.000 = Ouro
Se XP for entre 6.001 e 8.000 = Platina 
Se XP for entre 8.001 e 9.000 = Ascendente
Se XP for entre 9.001 e 10.000 = Imortal
Se XP for maior ou igual a 10.001 = Radiante

Objetivo Final deve exibir uma mensagem;:
" O herói de nome **(nome)*** está no nível de **(nivel)**
 */

let nome = "Mulher maravilha"
let XP = 500001


if ( XP <= 1000){
    console.log("Herói " + nome + " está no nível Ferro")
}

if ( XP >1000 && XP <=2000){
    console.log("Herói " + nome + " está no nível Bronze")
}

if ( XP >2000 && XP <=5000){
    console.log("Herói " + nome + " está no nível Prata")
}

if ( XP >5000 && XP <=6000){
    console.log("Herói " + nome + " está no nível Ouro")
}

if ( XP >6000 && XP <=8000){
    console.log("Herói " + nome + " está no nível Platina")
}

if ( XP >8000 && XP <=9000){
    console.log("Herói " + nome + " está no nível Ascendente")
}

if ( XP >9000 && XP <=10000){
    console.log("Herói " + nome + " está no nível Imortal")
}
if ( XP >10000){
    console.log("Herói " + nome + " está no nível Radiante")
}



