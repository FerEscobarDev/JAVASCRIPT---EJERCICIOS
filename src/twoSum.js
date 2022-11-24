// La función twoSum recibe un arreglo de números enteros (nums) y un número entero (target),
// la función debe retornar, los índices, cuyos valores sumados satisfagan el valor de target.
// no debes de usar el mismo índice dos veces.

const twoSum = (nums, target) => {
  	let res = [];
    nums.forEach((num, index) => { 
        nums.forEach((num2, index2) => {
        	if(index !== index2) {
              	let sum = num + num2;
                if(sum === target) {
                  	res = [index2, index];
                }
            }
        });
    });
  	return res;
}

export default twoSum
