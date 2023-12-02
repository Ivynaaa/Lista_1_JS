/* Faça um programa que calcule a área de um quadrado.
Formula: área = Lado x Lado*/

const readline = require('prompt-sync')
const input = readline() 

const lado = input('Digite o valor do lado: ')

area = lado*lado

console.log('A área do quadrado é: ', area)
