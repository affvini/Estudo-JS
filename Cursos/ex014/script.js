function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes()
    msg.innerHTML = `Agora são ${hora} horas e ${minutos} minutos`
    if (hora >=0 && hora <12){
        //Bom dia!
        img.src = "manha.png"
        document.body.style.background = '#a09c07';
    } else if (hora >= 12 && hora < 18){
        //Boa tarde!
        img.src = "tarde.png"
        document.body.style.background ='#edc4a2';
    } else {
        //Boa noite!
        img.src = "noite.png"
        document.body.style.background = '#335465';
    }
}
