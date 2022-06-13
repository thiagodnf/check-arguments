const { IsInt } = require("./types/IsInt");
const { IsNumber } = require("./types/IsNumber");
const { IsString } = require("./types/IsString");

function check(thing) {

    let checker = {

        thing,

        isNumber: function () {
            return new IsNumber(thing);
        },
        isInt: function () {
            return new IsInt(thing);
        },
        isString: function () {
            return new IsString(thing);
        }
    };

    return checker;
}

module.exports = check;
