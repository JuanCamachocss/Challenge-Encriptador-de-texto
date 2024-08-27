  const textArea = document.querySelector(".entrada_usuario");
  const texto = document.querySelector(".resultado");
  let imagen = document.getElementById("muñeco");
  let primerParrafo = document.getElementById("parrafoUno");
  let segundoParrafo = document.getElementById("parrafoDos");

    /*La letra "e" es convertida para "enter"
    La letra "i" es convertida para "imes"
    La letra "a" es convertida para "ai"
    La letra "o" es convertida para "ober"
    La letra "u" es convertida para "ufat"*/

function botonEncriptar() {

    const contenido = textArea.value;
    
    if (!/^[a-z\s]+$/.test(contenido)) {
        alert("Por favor, ingrese solo letras en minúsculas y espacios.");
        return; 
    }

    imagen.style.display = "none";
    primerParrafo.style.display = "none";
    segundoParrafo.style.display = "none";

    const textoEncriptado = encriptacion(textArea.value);
    texto.value = textoEncriptado;
    textArea.value = "";
}
    
function encriptacion(textoStringEncriptado) {
    let llavesCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    textoStringEncriptado = textoStringEncriptado.toLowerCase();

    for (let i = 0; i < llavesCodigo.length; i++) {
        if (textoStringEncriptado.includes(llavesCodigo[i][0])) {
            textoStringEncriptado = textoStringEncriptado.replaceAll(llavesCodigo[i][0], llavesCodigo[i][1]);
        }
    }
    return textoStringEncriptado;
}

function botonDesencriptar() {
    const textoEncriptado = desencriptacion(textArea.value);
    texto.value = textoEncriptado;
    textArea.value = "";
}

function desencriptacion(textoStringDesencriptado) {
    let llavesCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    textoStringDesencriptado = textoStringDesencriptado.toLowerCase();

    for (let i = 0; i < llavesCodigo.length; i++) {
        if (textoStringDesencriptado.includes(llavesCodigo[i][1])) {
            textoStringDesencriptado = textoStringDesencriptado.replaceAll(llavesCodigo[i][1], llavesCodigo[i][0]);
        }
    }
    return textoStringDesencriptado;
}

function botonCopiar() {
    const textoCopiado = texto.value;
    texto.select();
    texto.setSelectionRange(0, 99999);
    try {
        document.execCommand('copy');
        alert("Texto copiado al portapapeles"); 
    } catch (err) {
        alert("No se pudo copiar el texto. Inténtalo nuevamente."); 
    }
    texto.value = "";

}