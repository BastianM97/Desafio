

function encriptarVocales(texto) {
    // Clave interna
    const claveVocales = {
        'a': 'ai',
        'e': 'enter',
        'i': 'imes',
        'o': 'ober',
        'u': 'ufat',
       
    };

    let textoEncriptado = '';

    for (let i = 0; i < texto.length; i++) {
        let c = texto[i];

    
        if (claveVocales[c]) {
            textoEncriptado += claveVocales[c];
        } else {
            textoEncriptado += c; // Si no es una vocal, se deja igual
        }
    }

    return textoEncriptado;
}

function desencriptarVocales(texto) {
    // Invertimos la clave para desencriptar
    const claveVocalesInvertida = {
        'ai': 'a',
        'enter': 'e',
        'imes': 'i',
        'ober': 'o',
        'ufat': 'u',
        
    };

    let textoDesencriptado = '';

    for (let i = 0; i < texto.length; i++) {
        let c = texto[i];

        // Si es una vocal, se sustituye según la clave invertida
        if (claveVocalesInvertida[c]) {
            textoDesencriptado += claveVocalesInvertida[c];
        } else {
            textoDesencriptado += c; 
            // Si no es una vocal, se deja igual
        }
    }

    return textoDesencriptado;
}

function encriptarTexto() {
    const texto = document.getElementById('texto').value;
    const resultado = encriptarVocales(texto);
    document.getElementById('resultado').innerText = resultado;
}

function desencriptarTexto() {
    const texto = document.getElementById('texto').value;
    const resultado = desencriptarVocales(texto);
    document.getElementById('resultado').innerText = resultado;
}




document.getElementById("copyButton").addEventListener("click", function() {
    // Selecciona el texto del cuadro
    let resultado = document.getElementById("resultado");
    resultado.select();
    resultado.setSelectionRange(0, 99999); // Para dispositivos móviles, idea del chat

    // Copia el texto al portapapeles
    document.execCommand("copy");

    // Opcional: Muestra una alerta o un mensaje
    alert("Texto copiado al portapapeles");
});



