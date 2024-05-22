// 2.Función para verificar si un número es primo 
// - Realizar la función que verifique cuando un número es primo ( usando el lenguaje JavaScript ) 
// - Realizar los test unitarios asociados a la función que calcula el factorial 

function numberPrime(number) {
    count = 0
    for (let index = 1; index <= number; index++) {
        let division = number%index;
        if (division == 0) {
            count += 1
        }
    }
    if (count == 2) {
        return true
    }else{
        return false
    }
}

module.exports = numberPrime;