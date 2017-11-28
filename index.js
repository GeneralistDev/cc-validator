'use strict';

const program = require('commander');

const validator = require('./validator');

const run = () => {
    program
        .version('1.0.0')
        .option('-c, --creditcard <number>', 'The credit card number to check')
        .parse(process.argv);

    const cc = program.creditcard;

    const isValid = validator.validate(cc);

    console.log(isValid ? `Credit card ${cc} is valid` : `Credit card ${cc} is not valid`);
};

run();