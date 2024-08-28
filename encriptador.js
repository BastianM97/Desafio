

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
            textoEncriptado += c; 
        }
    }

    return textoEncriptado;
}

function desencriptarVocales(texto) {
        const claveVocalesInvertida = {
        'ai': 'a',
        'enter': 'e',
        'imes': 'i',
        'ober': 'o',
        'ufat': 'u',
        
    };

    let textoDesencriptado = texto;

        for (let clave in claveVocalesInvertida) {
        textoDesencriptado = textoDesencriptado.split(clave).join(claveVocalesInvertida[clave]);
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
    let resultado = document.getElementById("resultado");
    resultado.select();

    document.execCommand("copy");

   
});



});



