const { IsInt } = require("./types/IsInt");
const { IsNumber } = require("./types/IsNumber");
const { IsObject } = require("./types/IsObject");
const { IsString } = require("./types/IsString");

/**
 * Use this function as a starting point when you want
 * to evalute the arguments/parameters
 *
 * @param  {*} thing the variable under test
 *
 * @returns an object so you can call the predicates
 */
function check(thing) {

    return {

        isNumber: function () {
            return new IsNumber(thing);
        },
        isInt: function () {
            return new IsInt(thing);
        },
        isString: function () {
            return new IsString(thing);
        },
        isObject: function () {
            return new IsObject(thing);
        }
    };
}

module.exports = check;
