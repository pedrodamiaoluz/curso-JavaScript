function tabuada(){
    let td = document.getElementById('textd')
    let res = document.getElementById('res')
    let valor = Number(td.value)
     
    for(let c = 0; c <= 10; c++){
      let t = valor * c
      res.innerHTML += `<br> ${valor} * ${c} = ${t} `
}   
  
}