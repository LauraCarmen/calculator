const calc = require('./calculator');

let numbers = [24, 0, 12, 2, 112, 1, 48, 62, 4, 6];

for (  i = 0; i < numbers.length; i++ ) {
    for ( j = i + 1; j < numbers.length; j++ ) {
        console.log( " Suma dintre " + numbers[i] + " + " + numbers[j] + " este " + " = " + calc.suma( numbers[i], numbers[j] ) );
    }
};

 for (  i = 0; i < numbers.length; i++ ) {
    for ( j = i + 1; j < numbers.length; j++ ) {
        console.log( " Scaderea dintre " + numbers[i] + " - " + numbers[j] + " este " + " = " + calc.scadere( numbers[i], numbers[j] ) );
    }
};

 for (  i = 0; i < numbers.length; i++ ) {
    for (  j = i + 1 ; j < numbers.length; j++ ) {     
        console.log( " Impartirea dintre " + numbers[i] + " / " + numbers[j] + " este " + " = " + calc.impartire( numbers[i], numbers[j] ) );      
    }
};

for ( i = 0; i < numbers.length; i++ ) {
    for (  j = i + 1; j <numbers.length; j++ ) {
        console.log( " Inmultirea dintre " + numbers[i] + " * " + numbers[j] + " este " + " = " + calc.inmultire( numbers[i], numbers[j] ) );    
    }
};

console.log("am terminat");