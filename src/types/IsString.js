const { Is } = require("./Is");

/**
 * Class to validate all string values
 */
class IsString extends Is {

    /**
     * Constructor
     *
     * @param {*} thing the variable under test
     */
    constructor(thing) {
        super(thing);

        if (typeof thing !== "string") {
            throw new TypeError(`${thing} is not a string`);
        }
    }

    isNotBlank() {

        this.ensure(this.thing && !/^\s*$/.test(this.thing), "is blank");

        return this;
    }
}

module.exports.IsString = IsString;
