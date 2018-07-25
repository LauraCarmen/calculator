const calculator = {
    suma: (numberOne, numberTwo) => {
        return numberOne + numberTwo;
    },

    scadere: (numberOne, numberTwo) => {
        return numberOne - numberTwo;
    },

    inmultire: (numberOne, numberTwo) => {
        return numberOne * numberTwo;
    },

    impartire : (numberOne, numberTwo) => {
        if( numberTwo === 0 ) {
            return "Nu pot sa impart la zero";
        }
        return numberOne / numberTwo;
    }
}

module.exports = calculator;