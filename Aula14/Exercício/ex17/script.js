function tabuada(){
    let num = document.getElementById('textd')
    let tab = document.getElementById('seltab')
    
    if(num.value.length == 0){
      alert('[Erro!] Por facor insira o número.')
    }else{
      let n = Number(num.value)
      tab.innerHTML = ''
      for(let c = 1; c <= 10; c++){
        let v1 = document.createElement('option')
        v1.innerHTML =  `${n} x ${c} = ${n*c}`
        v1.value = `tab${c}`
        tab.appendChild(v1)
     }
    
   }    
}
         
    