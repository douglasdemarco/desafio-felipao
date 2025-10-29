// variaveis do heroi
let nomeHeroi = "Pinguim"
let xpHeroi = 11000 //altera o valor para testar os niveis
let nivel

// estrutura de decisão
if (xpHeroi < 1000){
   nivel = "Ferro";
}
else if (xpHeroi <= 2000){
   nivel = "Bronze";
}
else if (xpHeroi <= 5000){
   nivel = "Prata";
}
else if (xpHeroi <= 7000){
   nivel = "Ouro";
}
else if (xpHeroi <= 8000){
   nivel = "Platina";
}
else if (xpHeroi <= 9000){
   nivel = "Ascedente";
}
else if (xpHeroi <= 10000){
   nivel = "Imortal";
}
else {
    nivel = "Radiante"
}

//saída
console.log ("O herói de nome " + nomeHeroi + " esta no nivel " + nivel)