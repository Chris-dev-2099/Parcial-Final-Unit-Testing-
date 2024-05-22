// 3. Realizar una función para capitalizar cadenas de texto ( ejemplo "hola mundo" debería ser "Hola Mundo" )
// - Realizar función para capitalizar cadena de texto ( usando el lenguaje JavaScript ) 
// - Realizar los test unitarios asociados a la función que calcula el factorial 

function capitalizeText(text) {
    const textSeparate = text.split(" ");
    for (var i = 0; i < textSeparate.length; i++) {
        textSeparate[i] = textSeparate[i].charAt(0).toUpperCase() + textSeparate[i].slice(1);
    }
    const textCapitalize = textSeparate.join(" ");
    
    return textCapitalize;
}

module.exports = capitalizeText;


