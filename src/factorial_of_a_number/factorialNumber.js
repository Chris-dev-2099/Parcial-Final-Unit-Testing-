// 1.Función para calcular el factorial de un número 
// - Realizar la función que calcule el factorial de un número ( usando el lenguaje JavaScript ) 
// - Realizar los test unitarios asociados a la función que calcula el factorial 


function factorial(number) {
    let factor = 1
    if (number < 0) {
        factor = NaN
        return factor
    } else {
        for (let index = 1; index <= number; index++) {
            factor *= index;
        }
        return factor
    }
}


module.exports = factorial;