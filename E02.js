/*A partir de um número aleatório inteiro de 0 a 100, imprima o seu 
sucessor e antecessor.*/

let aleatorio = Math.random() * 100 

let numeroGerado = Math.floor(aleatorio) // Arredonda para o número inteiro inferior mais próximo

console.log('Antecessor: ', numeroGerado - 1)
console.log('Número gerado: ', numeroGerado)
console.log('Sucessor: ', numeroGerado + 1)