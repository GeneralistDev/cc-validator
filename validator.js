'use strict';

const _ = require('lodash');

const selectAndDouble = (accum, val, index) => {
    // Is it an even index (0, 2, 4, ..., 14)?
    if ((index % 2) === 0) {
        const doubled = _.parseInt(val, 10) * 2;

        /* 
        We can do this because summing the digits would result in the same value for numbers under 20
            eg. A: 15 => 1 + 5 = 6 while 15 - 9 = 6 
            eg. B: 18 => 1 + 8 = 9 while 18 - 9 = 9

        Ref: https://en.wikipedia.org/wiki/Luhn_algorithm#Description
        */
        if (doubled > 9) {
            accum.push(doubled - 9);
        } else {
            accum.push(doubled);
        }
    } else {
        accum.push(_.parseInt(val, 10));
    }

    return accum;
}

const validate = (cc) => {
    // We only support 16 character credit cards
    if (cc.length !== 16) {
        return false;
    }

    const sum = _(cc)
        .chain()
        .reduceRight(selectAndDouble, [])
        .sum()
        .value();

    console.log(sum);

    const isValid = (sum % 10) === 0;

    return isValid;
};

module.exports = {
    validate,
};