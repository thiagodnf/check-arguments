const { Is } = require("./Is");

class IsString extends Is {

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
