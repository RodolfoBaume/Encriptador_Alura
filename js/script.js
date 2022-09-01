const introText = document.querySelector(".intro_text");
const message = document.querySelector(".message");
const respuesta = document.querySelector(".respuesta")
const rectangle = document.querySelector(".rectangle")
const btnCopy = document.querySelector(".copiar");
//btnCopy.style.display = "none"


function btnEncriptar(){

    const textoEncriptado = encriptar(introText.value);
        rectangle.style.display="none";
        respuesta.style.display="block"

        message.value = textoEncriptado;
        introText.value = "";
}

function encriptar (cadenaEncriptada){
    let matrizCodigo = [["e","enter"], ["i","imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]
    cadenaEncriptada = cadenaEncriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++) {
        if(cadenaEncriptada.includes(matrizCodigo[i][0])){
            cadenaEncriptada = cadenaEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }
    return cadenaEncriptada;
}

//Desencriptar mensaje

function btnDesencriptar() {
    const textoEncriptado = desencriptar(introText.value)
    message.value = textoEncriptado
    introText.value = ""  
}

function desencriptar(cadenaDesencriptada) {
    let matrizCodigo = [ ["e", "enter"], ["i", "imes"], ["a", "ai"], ["o","ober"], ["u","ufat"]];
    cadenaDesencriptada = cadenaDesencriptada.toLowerCase();

    for(let i=0; i < matrizCodigo.length; i++) {
        if(cadenaDesencriptada.includes(matrizCodigo[i][1])) {
            cadenaDesencriptada = cadenaDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        }
    }

    return cadenaDesencriptada;
}


//botón copiar
function copiar() {
    message.select();
    navigator.clipboard.writeText(message.value)
    message.value = "";
    alert("Texto Copiado")
}