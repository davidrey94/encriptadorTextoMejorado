
let textoIngresado = '';


function encriptarTexto(texto) {
    let textoEncriptado = texto
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');
    return textoEncriptado;
}


function desencriptarTexto(texto) {
    let textoDesencriptado = texto
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');
    return textoDesencriptado;
}


function copiarAlPortapapeles() {
    const textoParaCopiar = resultado.value;
    navigator.clipboard.writeText(textoParaCopiar)
        .then(() => {
            alert('Texto copiado al portapapeles');
        })
        .catch(err => {
            console.error('Error al copiar el texto: ', err);
        });
}


const texto = document.getElementById('texto');
const resultado = document.getElementById('resultado');
const botonEncriptado = document.getElementById('botonEncriptado');
const botonDesencriptado = document.getElementById('botonDesencriptado');
const copiar = document.getElementById('copiar');


if (botonEncriptado) {
    botonEncriptado.addEventListener('click', function() {
        textoIngresado = texto.value;
        const textoEncriptado = encriptarTexto(textoIngresado);
        resultado.value = textoEncriptado;
        
        
        resultado.style.backgroundImage = 'none';
    });
}


if (botonDesencriptado) {
    botonDesencriptado.addEventListener('click', function() {
        textoIngresado = texto.value;
        const textoDesencriptado = desencriptarTexto(textoIngresado);
        resultado.value = textoDesencriptado;
    });
}


if (copiar) {
    copiar.addEventListener('click', function() {
        copiarAlPortapapeles();
    });
}



