// Casos de uso a tener en cuenta
// - Test para comprobar si un número primo devuelve true
// - Test para verificar si un número no primo devuelve false
// - Test para asegurar que 1 no sea considerado primo

const numberPrime = require("./numberPrime");

describe("tests en la función para saber si un número es primo", () => {
    
    test("Test 97 es un numero primo? = true ", () => {
        const result = numberPrime(97);
        expect(result).toBe(true);
    })

    test("test 64 es un numero primo? = false ", () => {
        const result = numberPrime(64);
        expect(result).toBe(false);
    })

    test("test para asegurar que 1 no sea considerado primo = false ", () => {
        const result = numberPrime(1);
        expect(result).toBe(false);
    })

});