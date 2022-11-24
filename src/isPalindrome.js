// la funcion isPalindrome recibe un numero entero (x)
// y debe retornar true si el numero es palindromo, de lo contrario debe retornar false

const isPalindrome = (number) => {
    const numero = String(number)
    const numeroReverse = numero.split("").reverse().join("")
    if(numeroReverse === numero){
        return true
    }

    return false
}

export default isPalindrome
