// Escribir una función que reciba dos números y retorne la suma de ambos
// En los test puedes encontrar que uno de los valores no es un número, debes intentar convertirlo a número
// En caso de que no sea un número, la función debe retornar un mensaje de error: "Error debes pasar dos numeros"

const suma = (a, b) => {  
    let num1 = Number(a);
    let num2 = Number(b);
    let sum = num1 + num2;

    if(isNaN(sum)){
        return "Error debes pasar dos numeros"
    }

    return sum;    
}

export default suma
