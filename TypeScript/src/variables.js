/* Para declarar uma variável ainda usa-se let ou const seguido de :type */
// Variáveis primitivas: boolean, string, number
var name1 = "Guilherme";
var age = 18;
var height = 1.72;
var isEmpty = true;
// Variáveis especiais: null, undefined
var nulo = null;
var indefinido = undefined;
// Variáveis abrangentes: any, void
var anyType = 10;
var fnReturn;
// Tipo Object (Similar ao JSON normal do JS) Não possui uma "classe" pré definida - Não é previsível
var JSONProduct = {
    title: "Book",
    price: 25.50
};
// Para instanciar um type criado basta fazer 
var typeProduct = {
    title: "typeBook",
    price: 12.00
};
// Arrays tipados
var firstNames = ["Guilherme", "Luís", "José"];
var lastNames = ["Figueirêdo", "Figueirêdo", "Rodrigues"];
// Arrays que permitem diferentes tipos - A depender é cmelhor riar um Object Tipado
var personInfo = ["GUilherme", 18, 5000, null];
// Tuplas - Definem uma ordem de tipos no quais os dados inseridos devem respeitar
var baking = [1, "Água", 95];
// Datas
var today = new Date();
console.log(today.toString());
