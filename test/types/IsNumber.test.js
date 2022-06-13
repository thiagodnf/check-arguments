const { IsNumber } = require("../../src/types/IsNumber");

test("should validate if thing is a number", async () => {

    await expect(() => new IsNumber(-1)).not.toThrow(TypeError);
    await expect(() => new IsNumber(0)).not.toThrow(TypeError);
    await expect(() => new IsNumber(1)).not.toThrow(TypeError);

    await expect(() => new IsNumber(-1.000)).not.toThrow(TypeError);
    await expect(() => new IsNumber(0.0)).not.toThrow(TypeError);
    await expect(() => new IsNumber(0.0001)).not.toThrow(TypeError);
    await expect(() => new IsNumber(1.000005)).not.toThrow(TypeError);

    await expect(() => new IsNumber({})).toThrow(TypeError);
    await expect(() => new IsNumber("")).toThrow(TypeError);
    await expect(() => new IsNumber(true)).toThrow(TypeError);
    await expect(() => new IsNumber(false)).toThrow(TypeError);
    await expect(() => new IsNumber(null)).toThrow(TypeError);
    await expect(() => new IsNumber(undefined)).toThrow(TypeError);
    await expect(() => new IsNumber(NaN)).toThrow(TypeError);
    await expect(() => new IsNumber(Number.POSITIVE_INFINITY)).toThrow(TypeError);
    await expect(() => new IsNumber(Number.NEGATIVE_INFINITY)).toThrow(TypeError);
});

test("should validate positive numbers", async () => {

    await expect(() => new IsNumber(1).isPositive()).not.toThrow(TypeError);
    await expect(() => new IsNumber(1.1).isPositive()).not.toThrow(TypeError);
    await expect(() => new IsNumber(2).isPositive()).not.toThrow(TypeError);
    await expect(() => new IsNumber(2.1).isPositive()).not.toThrow(TypeError);

    await expect(() => new IsNumber(0).isPositive()).toThrow(TypeError);
    await expect(() => new IsNumber(-1).isPositive()).toThrow(TypeError);
    await expect(() => new IsNumber(-1.1).isPositive()).toThrow(TypeError);
    await expect(() => new IsNumber(-2).isPositive()).toThrow(TypeError);
    await expect(() => new IsNumber(-2.1).isPositive()).toThrow(TypeError);
});

test("should validate negative numbers", async () => {

    await expect(() => new IsNumber(-1).isNegative()).not.toThrow(TypeError);
    await expect(() => new IsNumber(-1.1).isNegative()).not.toThrow(TypeError);
    await expect(() => new IsNumber(-2).isNegative()).not.toThrow(TypeError);
    await expect(() => new IsNumber(-2.1).isNegative()).not.toThrow(TypeError);

    await expect(() => new IsNumber(0).isNegative()).toThrow(TypeError);
    await expect(() => new IsNumber(0.1).isNegative()).toThrow(TypeError);
    await expect(() => new IsNumber(1).isNegative()).toThrow(TypeError);
    await expect(() => new IsNumber(1.1).isNegative()).toThrow(TypeError);
    await expect(() => new IsNumber(2).isNegative()).toThrow(TypeError);
    await expect(() => new IsNumber(2.1).isNegative()).toThrow(TypeError);
});

test("should validate less than", async () => {

    await expect(() => new IsNumber(1).isLessThan(10)).not.toThrow(TypeError);
    await expect(() => new IsNumber(1.1).isLessThan(10)).not.toThrow(TypeError);
    await expect(() => new IsNumber(1).isLessThan(10.1)).not.toThrow(TypeError);

    await expect(() => new IsNumber(-1).isLessThan(10)).not.toThrow(TypeError);
    await expect(() => new IsNumber(-1.1).isLessThan(10)).not.toThrow(TypeError);
    await expect(() => new IsNumber(-1).isLessThan(10.1)).not.toThrow(TypeError);

    await expect(() => new IsNumber(11).isLessThan(10)).toThrow(TypeError);
    await expect(() => new IsNumber(11.1).isLessThan(10)).toThrow(TypeError);
    await expect(() => new IsNumber(11).isLessThan(10.1)).toThrow(TypeError);

    await expect(() => new IsNumber(10).isLessThan(10)).toThrow(TypeError);
    await expect(() => new IsNumber(10.1).isLessThan(10)).toThrow(TypeError);
});


test("should validate greater than", async () => {

    await expect(() => new IsNumber(11).isGreaterThan(10)).not.toThrow(TypeError);

    await expect(() => new IsNumber(10).isGreaterThan(10)).toThrow(TypeError);
    await expect(() => new IsNumber(9).isGreaterThan(10)).toThrow(TypeError);
});

