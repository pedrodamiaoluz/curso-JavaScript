
function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`
    
    if(hora >= 0 && hora < 12){
        //Bom Dia!!
        img.src = `fotomanha.png`
    }else if(hora >= 12 && hora < 18){
        // Boa Tarde!!
        img.src = `fototarde.png`
    }else{
        //Boa Noite!!
        img.src = `fotonoite.png`
    }
}