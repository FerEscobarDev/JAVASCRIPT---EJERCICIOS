/*
  Completa la funcion que tome dos strings (a y b) como argumentos
  Si a contiene b, adjunta b al principio de a
  Si no, adjuntalo al final
  Retorna la concatenacion
  EJEMPLO:
  concatenarStrings('cheese', 'cake')
  retornar => 'cheesecake'
*/

const concatenarStrings = (a, b) => {
    if(a.search(b) !== -1){
        return b + a
    }else {
        return a + b
    }
}

export default concatenarStrings
