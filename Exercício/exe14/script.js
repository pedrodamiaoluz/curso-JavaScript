
function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`
    
    if(hora >= 0 && hora < 12){
        //Bom Dia!!
        img.setAttribute(`src`, `./imagem/fotomanha.png`)
        document.body.style.backgroundColor = '#e2cd9f'
    }else if(hora <= 18){
        // Boa Tarde!!
        img.setAttribute(`src`, `./imagem/fototarde.png`)
        document.body.style.background = '#b9846f'
    }else{
        //Boa Noite!!
        img.setAttribute(`src`, `./imagem/fotonoite.png`)
        document.body.style.background = '#515154'
    }
}