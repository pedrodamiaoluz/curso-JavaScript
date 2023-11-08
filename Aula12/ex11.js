//var idade = 12;
var idade = Number(prompt('Informe a sua idade?'))
console.log(`Você tem ${idade} anos`)
if(idade < 16){
    console.log('Não volta')
}else if(idade < 18 || idade > 65){
    console.log('Volto opcional')           
}else {
    console.log('Volto Obrigatório')
}
