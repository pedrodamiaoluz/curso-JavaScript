function verifica(){
   var data = new Date()
   var ano = data.getFullYear()
   var fano = document.querySelector('input#txtano')
   var res = document.querySelector('div#res')
   var formul = Number(fano.value)
   if(formul == 0 || Number(formul.value) > ano){
     window.alert(`[ERRO] Verifique os dados e tente novamente`)
   } 
   else {
     var fsex = document.getElementsByName('radsex')
     var idade = ano - Number(fano.value)
     var genero = ''
     var img = document.querySelector('img#foto')
     //var img = document.createElement('img')
     //img.setAttribute('id', 'foto')
     if (fsex[0].checked) {
        genero = 'Homem'
        if(idade >= 0 && idade <= 10){
         // criança masculina
           img.setAttribute('src', './imagem/fotobebemas.png')
        }else if(idade <= 21){
         // jovem masculino
           img.setAttribute('src', './imagem/fotojovmasc.png')
        } else if(idade <= 50){
         // Adulto masculino
           img.setAttribute('src', './imagem/fotoadultohom.png')
        }else{
         // idoso masculino
           img.setAttribute('src', './imagem/fotovelhohom.png')
        }
     }
     else if(fsex[1].checked) {
        genero = 'Mulher'
        if(idade >= 0 && idade <= 10){
         // criança feminina
          img.setAttribute('src', './imagem/fotobebefem.png')
        }else if(idade <= 21){
         // jovem feminina
          img.setAttribute('src', './imagem/fotojovfem.png')
        }else if(idade <= 50){
         // Adulto feminina
          img.setAttribute('src', './imagem/fotoadultomulh.png')
        }else{
         // idoso feminina
          img.setAttribute('src', './imagem/fotovelhamul.png')
        }
     }
      // res.style.textAlign = 'center'
      res.innerHTML = `Detectando ${genero} com ${idade} anos`
      res.appendChild(img)
   }
   
}