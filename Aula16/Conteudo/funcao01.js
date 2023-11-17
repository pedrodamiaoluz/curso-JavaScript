function parimp(n){
    if(n % 2 == 0){
        return `${n} é Par`
    }else{
        return `${n} é Impar`
    }
}

console.log(`O valor ${parimp(2)}`)
//let res = parimp(50)
//console.log(`O valor ${res}`)