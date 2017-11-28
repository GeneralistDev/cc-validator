'use strict';

const validator = require('./validator');

describe('#Credit Card Validator', () => {
    it('should return false if the length is not 16 but the number is valid', () => {
        // This number will be valid if the 16 character check is not there
        const cc = '1446'; 
        
        const isValid = validator.validate(cc);

        expect(isValid).toBe(false);
    });

    it('should return true when the card is valid', () => {
        const cc = '4012888888881881';

        const isValid = validator.validate(cc);

        expect(isValid).toBe(true);
    });

    it('should return false when the card is invalid', () => {
        const cc = '4012888888881882';

        const isValid = validator.validate(cc);

        expect(isValid).toBe(false);
    });
});