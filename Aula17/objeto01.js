let amigo = {nome: 'Pedro',
 sexo: 'M', 
 peso: 85.4,
engorda(p){
    console.log('Engordou')
    this.peso += p
}}
amigo.engorda(2)
console.log(`${amigo.nome} pesa ${amigo.peso} Kg`)