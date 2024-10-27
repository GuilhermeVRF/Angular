/* Para declarar uma variável ainda usa-se let ou const seguido de :type */

// Variáveis primitivas: boolean, string, number
const name1 : string = "Guilherme"; 
let age : number = 18;
let height : number = 1.72;
let isEmpty :boolean = true;

// Variáveis especiais: null, undefined
var nulo : null = null;
let indefinido : undefined = undefined;

// Variáveis abrangentes: any, void
let anyType : any = 10;
let fnReturn : void

// Tipo Object (Similar ao JSON normal do JS) Não possui uma "classe" pré definida - Não é previsível
const JSONProduct : Object = {
    title: "Book",
    price: 25.50
}

// O type me premite criar um molde de objetos
type TypeProduct = {
    title : string,
    price: number
}

// Para instanciar um type criado basta fazer 
const typeProduct : TypeProduct = {
    title: "typeBook",
    price: 12.00
}

// Arrays tipados
const firstNames : string[] = ["Guilherme", "Luís", "José"]
const lastNames : Array<string> = ["Figueirêdo", "Figueirêdo", "Rodrigues"]

// Arrays que permitem diferentes tipos - A depender é cmelhor riar um Object Tipado
const personInfo : (string | number | null)[] = ["GUilherme", 18, 5000, null];

// Tuplas - Definem uma ordem de tipos no quais os dados inseridos devem respeitar
const baking: [number, string, number] = [1, "Água", 95]

// Datas
const today = new Date()
console.log(today.toString())

