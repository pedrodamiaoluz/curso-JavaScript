
let num = document.querySelector('input#texn')
let lista = document.querySelector('select#texsel')
let res = document.querySelector('div#res')
let valores = []

function isNumero(n){
  if(Number(n) >= 1 && Number(n) <= 100){
    return true
  }else{
    return false
  }
}

function inLista(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }
 
}

function adicionar(){
    if(isNumero(num.value) && !inLista(num.value, valores)){
         alert('Tudo ok')
    }else{
        alert('Valor invalido ou ja encontrado na lista.')
    }
   
}