const { IsNumber } = require("./IsNumber");

class IsInt extends IsNumber {

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
