// const - constant 
// let - variable 
// var - old variable

const a = parseFloat(prompt('Please, enter the coefficient "a"'));
if (a == 0) {
    alert('a≠0, try again');
}
const b = parseFloat(prompt('Please, enter the coefficient "b"'));
const c = parseFloat(prompt('Please, enter the coefficient "c"'));

const result = solvingQuadEq(a, b, c);

function solvingQuadEq(a, b, c) {
    const d = calcDiscr(a, b, c);
    let x1 = null;
    let x2 = null;
    if (d > 0) {
        x1 = (-b + Math.sqrt(d)) / (2 * a);
        x2 = (-b - Math.sqrt(d)) / (2 * a);
        return ('x1 = ' + x1 + ', x2 = ' + x2);
    } else if (d == 0) {
        x1 = -(b / (2 * a));
        return ('x =' + x1);
    } else if (d < 0) {
        return ('There are no real roots');
    } else {
        return 0;
    }
}
function calcDiscr(a, b, c) {
    return (b * b) - (4 * a * c);
}
alert(result);

/*
const greetings = 'Hello';
alert(greetings);

const userName = prompt('Enter your name');
const userGreet = 'Hello ' + userName;
alert(userGreet);

const userAge = parseInt(prompt('Enter your age'));
const newAge = addNums(userAge, 1);
alert('Next year you will be ' + newAge);

if (Number.isNaN(userAge)) {
    alert('Incorrect data');
} else if (userAge < 18) { // > <= >= !== === || &&
    alert('You are child');
} else if (userAge > 90) {
    alert('You are old');
} else {
    alert('You are adult');
}

function addNums(a, b) {
    return a + b;
}
*/
