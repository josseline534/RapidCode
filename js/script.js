
let cadenaUrl =[
    "https://www.facebook.com/",
    "https://twitter.com/",
    "https://www.instagram.com/",
    "http"
]
recipientNameFacebook.addEventListener("focus", function(event) {
    event.target.classList.remove('error');
    errorURLFacebook.style.display="none"
}, true);
recipientNameTwitter.addEventListener("focus", function(event) {
    event.target.classList.remove('error');
    errorURLTwitter.style.display="none"
}, true);
recipientNameInstagram.addEventListener("focus", function(event) {
    event.target.classList.remove('error');
    errorURLInstagram.style.display="none"
}, true);
recipientNameWebSites.addEventListener("focus", function(event) {
    event.target.classList.remove('error');
    errorURLWebSites.style.display="none"
}, true);

function generar(url, codeQrImg, btnGenerar, btnDescargar, color) {
    //DFDCCC
    let codeQr = `http://api.qrserver.com/v1/create-qr-code/?data=${url.value}&size=250x250&color=${color}&bgcolor=FFFFFF&qzone=1`
    codeQrImg.src=codeQr
    codeQrImg.style.display="block"
    btnGenerar.style.display="none"
    btnDescargar.style.display="block"
    url.disabled=true
}
function validarUrl (cadena, elemento, smsError, codeQrImg, btnGenerar, btnDescargar, color){
    if(!elemento.value.startsWith(cadena)){
        error(elemento, smsError);
        return false;
    }else{
        generar(elemento,codeQrImg, btnGenerar, btnDescargar, color)
    }
}

function error(elemento,smsError){
    elemento.classList.add('error')
    smsError.style.display="block"
}

function limpiar(elemento, codeQrImg, smsError, btnGenerar, btnDescargar){
    elemento.value=""
    codeQrImg.src=""
    codeQrImg.style.display="none"
    btnGenerar.style.display="block"
    btnDescargar.style.display="none"
    elemento.classList.remove('error')
    smsError.style.display="none"
    elemento.disabled=false
}

function descargar(imagen, elemento) {
    elemento.href=`${imagen}.png`
}

function color (nomColor, numColor){
    colorQr.innerHTML=`${nomColor}`
    colorQr.style.color=numColor
}

function colorBtn() {
    let color = (colorQr.style.color).substring(4).replace(', ','-').replace(', ','-').split(')')
    return color
}
function abrir() {
    if(collapsePaletaColores.style.display=="block"){
        collapsePaletaColores.style.display="none"
        collapsePaletaColores.style.transition="500ms"
    }
    else{
        collapsePaletaColores.style.display="block"
        collapsePaletaColores.style.transition="500ms"
    }
}
//Facebook
closeFacebook.addEventListener("click", function (e){
    limpiar(recipientNameFacebook,codeFacebook, errorURLFacebook, btnGenerarFacebook, btnDescargarFacebook)
},false)
cerrarFacebook.addEventListener("click", function (e){
    limpiar(recipientNameFacebook, codeFacebook, errorURLFacebook, btnGenerarFacebook, btnDescargarFacebook)
},false)

btnGenerarFacebook.addEventListener("click", function(e){
    validarUrl(cadenaUrl[0],recipientNameFacebook,errorURLFacebook, codeFacebook, btnGenerarFacebook, btnDescargarFacebook, "3b5998")
},false)
btnDescargarFacebook.addEventListener("click",function(e){
    descargar(codeFacebook.src, btnDescargarFacebook)
})
//Twitter
closeTwitter.addEventListener("click", function (e){
    limpiar(recipientNameTwitter,codeTwitter, errorURLTwitter, btnGenerarTwitter, btnDescargarTwitter)
},false)
cerrarTwitter.addEventListener("click", function (e){
    limpiar(recipientNameTwitter, codeTwitter, errorURLTwitter, btnGenerarTwitter, btnDescargarTwitter)
},false)

btnGenerarTwitter.addEventListener("click", function(e){
    validarUrl(cadenaUrl[1],recipientNameTwitter,errorURLTwitter, codeTwitter, btnGenerarTwitter, btnDescargarTwitter, "00acee")
},false)

//Instagram
closeInstagram.addEventListener("click", function (e){
    limpiar(recipientNameInstagram,codeInstagram, errorURLInstagram, btnGenerarInstagram, btnDescargarInstagram)
},false)
cerrarInstagram.addEventListener("click", function (e){
    limpiar(recipientNameInstagram, codeInstagram, errorURLInstagram, btnGenerarInstagram, btnDescargarInstagram)
},false)

btnGenerarInstagram.addEventListener("click", function(e){
    validarUrl(cadenaUrl[2],recipientNameInstagram,errorURLInstagram, codeInstagram, btnGenerarInstagram, btnDescargarInstagram, "DD2A7B")
},false)

//WebSites
closeWebSites.addEventListener("click", function (e){
    limpiar(recipientNameWebSites,codeWebSites, errorURLWebSites, btnGenerarWebSites, btnDescargarWebSites)
    collapsePaletaColores.style.display="none"
},false)
cerrarWebSites.addEventListener("click", function (e){
    limpiar(recipientNameWebSites, codeWebSites, errorURLWebSites, btnGenerarWebSites, btnDescargarWebSites)
    collapsePaletaColores.style.display="none"
},false)

btnGenerarWebSites.addEventListener("click", function(e){
    let color=colorBtn()
    collapsePaletaColores.style.display="none";
    validarUrl(cadenaUrl[3],recipientNameWebSites,errorURLWebSites, codeWebSites, btnGenerarWebSites, btnDescargarWebSites, color[0])
},false)