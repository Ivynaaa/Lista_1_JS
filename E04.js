/*Faça um programa que peca a temperatura em graus Fahrenheit, transforme e 
mostre a temperatura em graus Celsius.
Formula: Fahrenheit = Celsius x 1,8 + 32.
*/

const readline =  require('prompt-sync')
const input = readline()

const fahrenheit = input('Digite a temperatura em Fahrenheit: ')

celsius = (fahrenheit - 32) / 1.8 // Formula de conversão de Fahrenheit para Celsius

console.log('Temperatura em Celsius: ', celsius)