const { IsNumber } = require("./IsNumber");

/**
 * Class to validate all integer values
 */
class IsInt extends IsNumber {

    /**
     * Constructor
     *
     * @param {*} thing the variable under test
     */
    constructor(thing) {
        super(thing);

        if (this.thing % 1 !== 0) {
            throw new TypeError(thing + " is not an integer");
        }
    }

    isEven() {

        this.ensure(this.thing % 2 === 0, "is not even");

        return this;
    }

    isOdd() {

        this.ensure(this.thing % 2 !== 0, "is not odd");

        return this;
    }
}

module.exports.IsInt = IsInt;
