/**
 * Abstract class where every type should extend
 */
class Is {

    /**
     * Constructor
     *
     * @param {*} thing the variable under test
     */
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
