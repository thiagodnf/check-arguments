const { IsObject } = require("./IsObject");

/**
 * Class to validate all array values
 */
class IsArray extends IsObject {

    /**
     * Constructor
     *
     * @param {*} thing the variable under test
     */
    constructor(thing) {
        super(thing);

        if (!Array.isArray(this.thing)) {
            throw new TypeError(`${thing} is not a array`);
        }
    }

    isEmpty() {

        this.ensure(this.thing.length === 0, "is not empty");

        return this;
    }

    isNonEmpty() {

        this.ensure(this.thing.length !== 0, "is empty");

        return this;
    }

    hasLength(length) {

        this.ensure(this.thing.length === length, `is not equals to ${length}`);

        return this;
    }
}

module.exports.IsArray = IsArray;
