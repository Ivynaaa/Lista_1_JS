/*Faça um Programa que pergunte quanto você ganha por hora e o número de 
horas trabalhadas no mês. Calcule e mostre o total do seu salário no referido 
mês, sabendo-se que são descontados 15% para o Imposto de Renda, 10% 
para o INSS e 2% para o sindicato, faca um programa que informe:
. O salário bruto.
. Quantia paga ao INSS.
. Quantia para o sindicato.
. Quantia para o imposto de renda
. O salário líquido.
Dica: Porcentagem em javaScript
const desconto = salário * 0.15
onde 0.15 equivale a 15%
*/

const readline = require('prompt-sync')
const input = readline()

const valorHora = input('Valor ganho por hora: ')
const horasTrabalhadas = input('Horas trabalhadas no mês: ')

const salarioBruto = valorHora * horasTrabalhadas
const impostoRenda = salarioBruto * 0.15
const inss = salarioBruto * 0.10
const sindicato = salarioBruto * 0.02
const salarioLiquido = salarioBruto - impostoRenda - inss - sindicato

console.log('Salário bruto: ', salarioBruto)
console.log('Quantia paga ao INSS: ', inss)
console.log('Quantia paga ao sindicato: ', sindicato)
console.log('Quantia paga ao imposto de renda: ', impostoRenda)
console.log('Salário líquido: ', salarioLiquido)
