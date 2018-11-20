// const - constant 
// let - variable 
// var - old variable

const a = parseFloat(prompt('Please, define the coefficient "a"'));
if (a==0) {
    alert('a≠0, try again')a;
}
const b = parseFloat(prompt('Please, define the coefficient "b"'));
const c = parseFloat(prompt('Please, define the coefficient "c"'));

alert(a);
alert(b);
alert(c);
const d = calcDiscr(a, b, c);
function calcDiscr(a, b, c) {
    d = (b*b) - 4ac;
    return d;
}
function solvingQuadEq (a, b, c) {
    if (d > 0) {
        x1 = (-b + Math.sqrt(d))/2a;
        x2 = (-b - Math.sqrt(d))/2a;
        alert('x1 = ' + x1 + ', x2 = ' + x2);
    } else if (d == 0) {
        x1 = -(b/2a);
        x = x1;
        alert('x =' + x1);
    } else if (d < 0) {
        x1 = (-b + Math.sqrt(-(b*b) + 4ac))/2a;
        x2 = (-b - Math.sqrt(-(b*b) + 4ac))/2a;
        alert('x1 = ' + x1 + ', x2 = ' + x2);
    }
    
}








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





