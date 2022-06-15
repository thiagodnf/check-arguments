const { IsObject } = require("../../src/types/IsObject");

test("should validate if thing is tring", async () => {

    await expect(() => new IsObject({})).not.toThrow(TypeError);
    await expect(() => new IsObject({foo: 1})).not.toThrow(TypeError);

    await expect(() => new IsObject(-1)).toThrow(TypeError);
    await expect(() => new IsObject(0)).toThrow(TypeError);
    await expect(() => new IsObject(1)).toThrow(TypeError);

    await expect(() => new IsObject(-1.000)).toThrow(TypeError);
    await expect(() => new IsObject(0.0)).toThrow(TypeError);
    await expect(() => new IsObject(0.0001)).toThrow(TypeError);
    await expect(() => new IsObject(1.000005)).toThrow(TypeError);

    await expect(() => new IsObject("")).toThrow(TypeError);
    await expect(() => new IsObject(undefined)).toThrow(TypeError);
    await expect(() => new IsObject(null)).toThrow(TypeError);
    await expect(() => new IsObject(true)).toThrow(TypeError);
    await expect(() => new IsObject(false)).toThrow(TypeError);
    await expect(() => new IsObject(NaN)).toThrow(TypeError);
    await expect(() => new IsObject(Number.POSITIVE_INFINITY)).toThrow(TypeError);
    await expect(() => new IsObject(Number.NEGATIVE_INFINITY)).toThrow(TypeError);
});


test("should validate if thing has key", async () => {

    await expect(() => new IsObject({}).hasKey("foo")).toThrow(TypeError);

    await expect(() => new IsObject({foo: 1}).hasKey("foo")).not.toThrow(TypeError);
});

test("should validate if thing is empty", async () => {

    await expect(() => new IsObject({}).isEmpty()).not.toThrow(TypeError);

    await expect(() => new IsObject({foo: 1}).isEmpty()).toThrow(TypeError);
});
