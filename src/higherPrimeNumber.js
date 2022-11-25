// Completa la funcion
// Obten todos los numeros primos del numero que se pasa como argumento
// Retorna el numero par mas alto

const higherPrimeNumber = (number) => {
    let higherPrime = 0
    
    if(number <= 1){
      return 'No es un numero primo'
    }else if(number === 2){
        return 2
    }else if(number >=3 && number < 5){
        return 3
    }
  
    for(let num = 1; num <= number; num++){
        let prime = true
        for(let j = 2; j < num / 2; j++){
            if(num % j === 0){
                prime = false
            }
        }
        if(prime){
            if(num > higherPrime){
                higherPrime = num
            }
        }
    }
  
    return higherPrime
}

export default higherPrimeNumber
