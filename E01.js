/*A partir do valor em metros, imprima o valor correspondente em decímetros,
centímetros e milímetros.*/

const readline = require('prompt-sync')
const input = readline() 

const metros = input('Digite o valor em metros: ')

const decimetros = metros * 10
const centimetros = metros * 100
const milimetors = metros * 1000

console.log(metros ,'metros em decimetros: ', decimetros)
console.log(metros ,'metros em centimetros: ', centimetros)
console.log(metros ,'metros em milimetros: ', milimetors)

