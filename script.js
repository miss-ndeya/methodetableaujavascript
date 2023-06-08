// Créez un tableau de nombres et utilisez la méthode .map() pour doubler chaque nombre du tableau.

console.log('---méthode .map()---')
let tab1 = [3, 6, 9, 11];

let tab2 = tab1.map(el => el * 2);
console.log(tab2)

// Créez un tableau de chaînes et utilisez la méthode .filter() pour renvoyer un nouveau tableau avec uniquement les chaînes dont la longueur est supérieure à 3.

console.log('---méthode .filter()---')
const tableaux = ['Ansou', 'mot', 'un', 'made', 'col','present'];
const nouveauTableaux = tableaux.filter(tableaux => tableaux.length > 3);
console.log(nouveauTableaux);

let fruits = ['pomme', 'fraise', 'mor', 'banane'];
let fruitfilter = fruits.filter(fruit => (fruit != 'mor'));
console.log(fruitfilter);


// Utilisez la méthode .reduce() pour résumer tous les nombres dans un tableau de nombres. 

console.log('---méthode .reduce()---')
let total = tab1.reduce((nombre1, nombre2) => {
    return nombre1 + nombre2
}, 0);
console.log(total);

// Utilisez la méthode .sort() pour trier un tableau de chaînes par ordre alphabétique.

const months = ['pape', 'fall', 'joe', 'laye', 'Awa', 'baba'];
months.sort();
console.log(months);


// Utilisez la méthode .forEach() pour imprimer chaque élément d'un tableau.

console.log('---méthode .forEach()---')
var langage = ["PYTHON", "PHP", "JAVA", "JAVASCRIPT", "C++"];
langage.forEach(element => console.log(element));

