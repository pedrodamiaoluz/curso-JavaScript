let nome = document.querySelector('input#texn')
let lista = document.querySelector('select#texsel')
let res = document.querySelector('div#res')
let valores = []

function isNome(n){
    if(String(n) >= 1 && String(n) <= 50){
        return true
    }else{
        return false
    }
}

function inLista(n,l){
    if(l.indexOf(String(n)) != -1){
        return true
    }else{
        return false
    }
}

function analizar(){
    if(isNome(nome.value.length) && !inLista(nome.value, valores)){
        valores.push(String(nome.value))
        let item = document.createElement('option')
        item.innerHTML = `Nome ${nome.value} Adicionado`
        lista.appendChild(item)
    }else{
        alert('[ERRO] Nome invalido ou encontrado na lista')
    }
}