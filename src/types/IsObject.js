function ensure(accept, errorMessage) {

    if (!accept) {
        throw new TypeError(errorMessage);
    }
}

class IsObject {

    constructor(thing) {

        if (typeof thing !== "object") {
            throw new TypeError(thing + " is not an object");
        }

        this.thing = thing;
    }

}

module.exports.IsObject = IsObject;
