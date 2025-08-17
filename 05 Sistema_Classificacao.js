let nome = "Maria Eduarda";
let idade = 20;
let pontos = 49;

if (idade >= 18 && pontos >= 80){
    console.log(`${nome}, VOCÊ ESTÁ CLASSIFICADO PARA A FASE FINAL!`);

} else if (idade >=18 && pontos >= 50){
    console.log(`${nome}, VOCÊ ESTÁ NA LISTA DE ESPERA!`);

}else{
    console.log(`${nome}, VOCÊ ATENDE OS REQUISITOS. `);
}