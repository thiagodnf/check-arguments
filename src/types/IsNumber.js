const { Is } = require("./Is");

class IsNumber extends Is {

    constructor(thing) {
        super(thing);

        if (typeof thing !== "number") {
            throw new TypeError(`${thing} is not a number`);
        }

        if (isNaN(thing)) {
            throw new TypeError(`${thing} is not a number`);
        }

        if (thing <= Number.NEGATIVE_INFINITY) {
            throw new TypeError(`${thing} is not a number`);
        }

        if (thing >= Number.POSITIVE_INFINITY) {
            throw new TypeError(`${thing} is not a number`);
        }
    }

    isLessThan(max) {

        this.ensure(this.thing < max, `is not less than ${max}`);

        return this;
    }

    isLessThanOrEqualsTo(max) {

        this.ensure(this.thing <= max, `is not less than or equals to ${max}`);

        return this;
    }

    isGreaterThan(min) {

        this.ensure(this.thing > min, `is not greater than ${min}`);

        return this;
    }

    isGreaterThanOrEqualsTo(min) {

        this.ensure(this.thing >= min, `is not greater than or equals to ${min}`);

        return this;
    }

    isBetween(min, max) {

        this.ensure(this.thing > min && this.thing < max, `is not between ${min} and ${max}`);

        return this;
    }

    inRange(min, max) {

        this.ensure(this.thing >= min && this.thing <= max, `is not in range ${min} and ${max}`);

        return this;
    }

    isPositive() {

        this.ensure(this.thing > 0, "is not positive");

        return this;
    }

    isNegative() {

        this.ensure(this.thing < 0, "is not negative");

        return this;
    }
}

module.exports.IsNumber = IsNumber;
