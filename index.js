//Classificador de nível de Heroi XP
let nome_do_heroi = "Julia";
let xp_heroi = 5001;
let nivel = " ";

//if  else para os intervalos de valores

if (xp_heroi <1000) {
    nivel = "Ferro";
}else if (xp_heroi >= 1001 && xp_heroi <= 2000) {
    nivel = "Bronze";
}else if (xp_heroi >= 2001 && xp_heroi <= 5000) {
    nivel = "Prata";
}else if (xp_heroi >= 5001 && xp_heroi <= 6000) {
    nivel = "Ouro";
}else if (xp_heroi >= 6001 && xp_heroi <= 7000) {
    nivel = "Platina"
}else if (xp_heroi >= 7001 && xp_heroi <= 8000) {
    nivel = "Diamante"
}else if (xp_heroi >= 8001 && xp_heroi <= 9000) {
    nivel = "Ascendente"
}else if (xp_heroi >= 9001 && xp_heroi <= 10001) {
    nivel = "Imortal"
}else if (xp_heroi >= 10001) {
    nivel = "Radiante"
}//Saida
 console.log("O Heroi de nome " + nome_do_heroi + " está no nivel " + nivel)
