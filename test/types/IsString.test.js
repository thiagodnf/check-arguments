const { IsString } = require("../../src/types/IsString");

test("should validate if thing is tring", async () => {

    await expect(() => new IsString("")).not.toThrow(TypeError);
    await expect(() => new IsString("a")).not.toThrow(TypeError);

    await expect(() => new IsString(-1)).toThrow(TypeError);
    await expect(() => new IsString(0)).toThrow(TypeError);
    await expect(() => new IsString(1)).toThrow(TypeError);

    await expect(() => new IsString(-1.000)).toThrow(TypeError);
    await expect(() => new IsString(0.0)).toThrow(TypeError);
    await expect(() => new IsString(0.0001)).toThrow(TypeError);
    await expect(() => new IsString(1.000005)).toThrow(TypeError);

    await expect(() => new IsString({})).toThrow(TypeError);

    await expect(() => new IsString(true)).toThrow(TypeError);
    await expect(() => new IsString(false)).toThrow(TypeError);
    await expect(() => new IsString(null)).toThrow(TypeError);
    await expect(() => new IsString(undefined)).toThrow(TypeError);
    await expect(() => new IsString(NaN)).toThrow(TypeError);
    await expect(() => new IsString(Number.POSITIVE_INFINITY)).toThrow(TypeError);
    await expect(() => new IsString(Number.NEGATIVE_INFINITY)).toThrow(TypeError);

});


test("should validate if thing is tring", async () => {

    await expect(() => new IsString("a").isNotBlank()).not.toThrow(TypeError);
    await expect(() => new IsString("a  ").isNotBlank()).not.toThrow(TypeError);
    await expect(() => new IsString("   a").isNotBlank()).not.toThrow(TypeError);
    await expect(() => new IsString("   a    ").isNotBlank()).not.toThrow(TypeError);

    await expect(() => new IsString("").isNotBlank()).toThrow(TypeError);
    await expect(() => new IsString(" ").isNotBlank()).toThrow(TypeError);
    await expect(() => new IsString("  ").isNotBlank()).toThrow(TypeError);
});
