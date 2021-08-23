console.log ('POR FAVOR RESPONDA COM SIM OU NAO:');
let soma = 0;

let pergunta1 = prompt('telefonou pra para a vitima?');


let pergunta2 = prompt('esteve no local do crime?');

let pergunta3 = prompt('mora perto da vitima?');

let pergunta4 = prompt('devia para a vitima?');

let pergunta5 = prompt('ja trabalhou com a vitima?');

if (pergunta1 == 'sim') {
  soma = soma + 1;
}
if (pergunta2 == 'sim') {
  soma = soma + 1;
}
if (pergunta3 == 'sim') {
  soma = soma + 1;
}
if (pergunta4 == 'sim') {
  soma = soma + 1; 
} 
if (pergunta5 == 'sim') {
 soma = soma + 1; 
}
if(soma == 1){
  console.log('você é inocente');
}
if (soma == 2){
  console.log('você é suspeito');
}
if (soma == 3){
  console.log('você é cúmplice');
}
if (soma == 4){
  console.log('você é cúmplice ');
}
if (soma == 5){
  console.log('você é o assassino');
}
if (soma == 0){
  console.log('você é inocente');
}