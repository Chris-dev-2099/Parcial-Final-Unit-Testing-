// Casos de uso a tener en cuenta
// - Test para verificar el cálculo correcto del factorial de un número
// - Test para asegurar que el factorial de 0 sea 1
// - Test para comprobar el factorial de un número negativo (debería devolver NaN)

const factorial = require("./factorialNumber");

describe("tests en la función de factorizar un numero", () => {
    
    test("Factorial de 5 = 120", () => {
        const result = factorial(5);
        expect(result).toBe(120);
    })

    test("Factorial de 0 = 1", () => {
        const result = factorial(0);
        expect(result).toBe(1);
    })

    test("Factorial de -n = NaN", () => {
        const result = factorial(-34);
        expect(result).toBe(NaN);
    })

});