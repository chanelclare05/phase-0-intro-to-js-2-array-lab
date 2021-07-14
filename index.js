// Write your solution here!
let cats = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendCat() {
    cats.push('Ralph');
}

function destructivelyPrependCat() {
    cats.unshift('Bob');
}

function destructivelyRemoveLastCat() {
    cats.pop();
}

function destructivelyRemoveFirstCat() {
    cats.shift();
}

function appendCat(){
    let members = [...cats, "Broom"];
    return members;
}

function prependCat(){
    let members = ['Arnold',...cats];
    return members;
}

function removeLastCat(){
    return cats.slice(0,2);
}


function removeFirstCat(){
    return cats.slice(1);
}
