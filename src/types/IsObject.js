const { Is } = require("./Is");

class IsObject extends Is {

    constructor(thing) {
        super(thing);

        if (thing === null || thing === undefined) {
            throw new TypeError(`${thing} is not an object`);
        }

        if (typeof thing !== "object") {
            throw new TypeError(`${thing} is not an object`);
        }
    }

    hasKey(key) {

        this.ensure(this.thing[key], `has not ${key} as key`);

        return this;
    }

    isEmpty() {

        this.ensure(Object.keys(this.thing).length === 0, "is not empty");

        return this;
    }
}

module.exports.IsObject = IsObject;
