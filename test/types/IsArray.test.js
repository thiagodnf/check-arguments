const { IsArray } = require("../../src/types/IsArray");

test("should validate if thing is array", async () => {

    await expect(() => new IsArray([])).not.toThrow(TypeError);
    await expect(() => new IsArray([1])).not.toThrow(TypeError);
    await expect(() => new IsArray([{foo: 1}])).not.toThrow(TypeError);

    await expect(() => new IsArray(-1)).toThrow(TypeError);
    await expect(() => new IsArray(0)).toThrow(TypeError);
    await expect(() => new IsArray(1)).toThrow(TypeError);

    await expect(() => new IsArray(-1.000)).toThrow(TypeError);
    await expect(() => new IsArray(0.0)).toThrow(TypeError);
    await expect(() => new IsArray(0.0001)).toThrow(TypeError);
    await expect(() => new IsArray(1.000005)).toThrow(TypeError);

    await expect(() => new IsArray({})).toThrow(TypeError);

    await expect(() => new IsArray(true)).toThrow(TypeError);
    await expect(() => new IsArray(false)).toThrow(TypeError);
    await expect(() => new IsArray(null)).toThrow(TypeError);
    await expect(() => new IsArray(undefined)).toThrow(TypeError);
    await expect(() => new IsArray(NaN)).toThrow(TypeError);
    await expect(() => new IsArray(Number.POSITIVE_INFINITY)).toThrow(TypeError);
    await expect(() => new IsArray(Number.NEGATIVE_INFINITY)).toThrow(TypeError);

});

test("should validate if thing is empty array", async () => {

    await expect(() => new IsArray([]).isEmpty()).not.toThrow(TypeError);

    await expect(() => new IsArray([1]).isEmpty()).toThrow(TypeError);
});
