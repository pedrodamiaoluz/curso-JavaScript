function verifica(){
   var data = new Date()
   var ano = data.getFullYear()
   var fano = document.getElementById('texano')
   var res = document.querySelector('div#res')
   var formu = Number(fano.value)
   if(formu == 0 || formu > ano){
     window.alert(`[ERRO] Verifique os dados e tente novamente`)
   }else{
     var fsex = document.getElementsByClassName('radsex')
     var idade = ano - Number(fano.value)
     var genero = ''
     if(fsex[0].checked) {
        genero = 'Homem'
     }
     else if(fsex[1].checked) {
        genero = 'Mulher'
     }
     res.innerHTML = `Detectando ${genero} com ${idade}`
   }
   
}