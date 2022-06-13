const { IsNumber } = require("./types/IsNumber");

function check(thing) {

    let checker = {

        thing,

        isNumber: function () {
            return new IsNumber(thing);
        }
    };

    return checker;
}

module.exports = check;
