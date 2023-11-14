function contar(){
    let inicio = document.getElementById('texinic')
    let fim = document.getElementById('texfim')
    let passo = document.getElementById('texpas')
    let res = document.getElementById('res')
    if(Number(inicio.value) == 0 || Number(fim.value) == 0 || Number(passo.value) == 0){
        alert('[Erro] Preencha todos os campos!!')
    }else{
        res.innerHTML = `Contando:`
        let ini = Number(inicio.value)
        let f = Number(fim.value)
        let pas = Number(passo.value)
        for(let c = ini; c <= f; c += pas){
            res.innerHTML += `${c} `
        }
    }
   
}