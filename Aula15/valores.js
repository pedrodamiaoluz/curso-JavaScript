let valor = [4, 5, 6, 9, 1, 3]
valor.sort()
// for(let v = 0; v < valor.length;v++){
//     console.log(`A posição ${v} tem o valor ${valor[v]}`)
// }

for(let v in valor){ // para cada valor dentro da variavel.
    console.log(`A posição ${v} tem o valor ${valor[v]}`)
}

