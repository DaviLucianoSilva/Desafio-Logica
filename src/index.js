const nome = "Dragonite";
let xp = 1000;
const resultado = "O herói de nome ";
const nivel = " está no nível ";

if (xp > 0 && xp < 1000) {
    console.log(resultado + nome + nivel + "Ferro");
}
else if (xp >= 1000 && xp < 2000) {
    console.log(resultado + nome + nivel + "Bronze");
}
else if (xp >= 2000 && xp < 5000) {
    console.log(resultado + nome + nivel + "Prata");
}
else if (xp >= 5000 && xp < 7000) {
    console.log(resultado + nome + nivel + "Ouro");
}
else if (xp >= 7000 && xp < 8000) {
    console.log(resultado + nome + nivel + "Platina");
}
else if (xp >= 8000 && xp < 9000) {
    console.log(resultado + nome + nivel + "Ascendente");
}
else if (xp >= 9000 && xp < 10000) {
    console.log(resultado + nome + nivel + "Imortal");
}
else {
    console.log(resultado + nome + nivel + "Radiante");
}