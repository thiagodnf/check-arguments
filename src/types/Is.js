class Is {

    constructor(thing) {

        this.thing = thing;
    }

    ensure(accept, errorMessage) {

        if (!accept) {
            throw new TypeError(`${this.thing} ${errorMessage}`);
        }
    }
}

module.exports.Is = Is;
