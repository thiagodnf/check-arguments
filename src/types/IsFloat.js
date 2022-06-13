const { IsNumber } = require("./IsNumber");

class IsFloat extends IsNumber {

    constructor(thing) {
        super(thing);

        if (this.thing % 1 === 0) {
            throw new TypeError(thing + " is not a float");
        }
    }
}

module.exports.IsFloat = IsFloat;
