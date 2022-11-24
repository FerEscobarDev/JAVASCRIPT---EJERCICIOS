// Completa la funcion que tome un numero (a) como argumento
// Separa a en sus digitos individuales y retornalos en un array
// Tip: quizas quieras cambiar el tipo de numero para separarlo

// Ejemplo: splitNumbers(123) => [1, 2, 3]

const splitNumbers = (number) => {
    let a = String(number).split('');
    let res = a.map( num => {
        return Number(num);
    });
    return res;
}

export default splitNumbers
