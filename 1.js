///1////
const ANIME_MAGAZ = "Dalida's Mangalib account"

let open = true;
let neprochitannoe = 5;
let millionDollars = null // :((((
let depression;
let lyubluy = `I love ${ANIME_MAGAZ}`
import {show} from './2.js';

function show2(product){
    console.log(`${product.name} cost: ${product.price}`);
}


function show3({name, price}) {
    console.log(`${name} cost: ${price}`);
}

///2////

let x = depression
console.log(x)//undefined

///3///

let mangas = {
    "bjAlex": 10,
    "10YOML": 7,
    "GoodOmens": 8.5,
}

let manhvas = [
    'KillingStalking',
    'LoveOrHate',
    'MDK',
]
let vplanah = [
    'naruto',
    'one piece'
]
mangas.label = 'favourite mangas'
mangas[avrating] = '7.5'
manhvas.push('Neolan Namja');
manhvas.pop('Neolan Namja');

let prochitano = manhvas.concat(vplanah)

let result = ('KillingStalking' in manhvas) ? true : false; //same as down

// if ('KillingStalking' in manhvas) {
//     let result = true;
// } else {
//     let result = false;
// }

console.log(1 == '1') //TRUE
console.log(2 === '2') //FALSE

//нулевое слияние 
let select = 42;
let bdbdbd = 'osu'
let finalSelect = select ?? bdbdbd;
console.log(finalSelect);

let product = {
    name : "bjAlex",
    price : 5800,
}

show(product.name, product.price)
show2(product)
show3(product)

console.log([...ANIME_MAGAZ]) //spread

function buy(card, price, ...pokupki) {
    console.log(`BUY ${pokupki} WITH ${card} FOR ${price}`);
}

pokupki = [
    'Naruto',
    'Etudy',
    'Nebozhiteli',
]

buy('kaspi', 'стотыщ мильен', ...pokupki)

for (let i = 0; i < manhvas.length; i++) {
    console.log(manhvas[i])
}






