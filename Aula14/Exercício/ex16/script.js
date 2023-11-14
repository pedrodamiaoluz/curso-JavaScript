function contar(){
    let inicio = document.getElementById('texinic')
    let fim = document.getElementById('texfim')
    let passo = document.getElementById('texpas')
    let res = document.getElementById('res')
    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        res.innerHTML = `Impossível contar`
        alert('[Erro] Preencha todos os campos!!')
    }else{
        res.innerHTML = `Contando: <br>`
         let ini = Number(inicio.value)
         let f = Number(fim.value)
         let pas = Number(passo.value)
        if(pas <= 0){
            alert('Passo invalido! Considerando passo 1')
            pas = 1
        }
        if(ini < f){
            // Contagem crescente
            for(let c = ini; c <= f; c += pas){
                res.innerHTML += `${c} \u{1F449} `
            }
        }else{
            // Contagem decrescente
            for(let c = ini; c >= f; c -= pas){
                res.innerHTML += `${c} \u{1f449} `
            }
        }
         res.innerHTML += `\u{1F3C1} `
    }
   
}
                
            