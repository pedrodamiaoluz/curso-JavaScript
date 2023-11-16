let num = [5, 8, 3, 2, 6]

 //num.sort() // Para organizar um elemento
 //num.push(12) // Para adicionar um elemento

 num.push(1)
 //console.log(num)
 console.log(`O vetor tem ${num.length} posições`)
 console.log(`O primeiro valor do vetor é: ${num[0]}`)
 console.log(`Os números organizados ${num.sort()}`)

 let pos = num.indexOf(5) // Diz a posição do elemento

 if(pos == -1){
    console.log(`O valor não foi encontrado!`)
 }else{
    console.log(`O valor está na posição ${pos}`)
}


