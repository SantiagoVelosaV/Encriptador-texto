document.getElementById("input-text").addEventListener("input", function() {
    const originalValue = this.value;
    const filteredValue = originalValue.replace(/[^a-z\s]/g, '');
    
    if (originalValue !== filteredValue) {
        alert("Sólo se permiten letras minúsculas.");
        this.value = filteredValue;
    }
});

document.getElementById("encrypt-btn").addEventListener("click", function() {
    const inputText = document.getElementById("input-text").value;
    const encryptedText = encryptText(inputText);
    document.getElementById("output-text").value = encryptedText;
});

document.getElementById("decrypt-btn").addEventListener("click", function() {
    const inputText = document.getElementById("input-text").value;
    const decryptedText = decryptText(inputText);
    document.getElementById("output-text").value = decryptedText;
});

document.getElementById("copy-btn").addEventListener("click", function() {
    const outputText = document.getElementById("output-text");
    outputText.select();
    document.execCommand("copy");

    // Borrar los textos de ambos cuadros
    document.getElementById("input-text").value = "";
    document.getElementById("output-text").value = "";

    alert("Texto copiado");
});

function encryptText(text) {
    return text
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
}

function decryptText(text) {
    return text
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
}


