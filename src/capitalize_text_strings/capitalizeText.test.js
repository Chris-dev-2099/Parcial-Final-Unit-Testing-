// Casos de uso a tener en cuenta
// - Test para verificar la conversión de una cadena a título  ( ejemplo "hola mundo" debería ser "Hola Mundo" )
// - Test para comprobar que una cadena vacía devuelva una cadena vacía
// - Test para asegurar que una cadena ya en título no cambie ( ejemplo "Hola Mundo" deberia retornar "Hola Mundo")

const capitalizeText = require("./capitalizeText");

describe("tests en la función para capitalizar textos", () => {
    
    test("test para verificar la conversión de una cadena a título ", () => {
        const result = capitalizeText("hola chanchito feliz");
        expect(result).toBe("Hola Chanchito Feliz");
    })

    test("test para comprobar que una cadena vacía devuelva una cadena vacía", () => {
        const result = capitalizeText("");
        expect(result).toBe("");
    })

    test("test para asegurar que una cadena ya en capitalizada no cambie ", () => {
        const result = capitalizeText("Hello Beautiful World");
        expect(result).toBe("Hello Beautiful World");
    })

});