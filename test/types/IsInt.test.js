const { IsInt } = require("../../src/types/IsInt");

test("should validate if thing is a number", async () => {

    await expect(() => new IsInt(1)).not.toThrow(TypeError);

    await expect(() => new IsInt(1.1)).toThrow(TypeError);

});

test("should validate if thing is even", async () => {

    await expect(() => new IsInt(2).isEven()).not.toThrow(TypeError);

    await expect(() => new IsInt(1).isEven()).toThrow(TypeError);
});

test("should validate if thing is odd", async () => {

    await expect(() => new IsInt(1).isOdd()).not.toThrow(TypeError);

    await expect(() => new IsInt(2).isOdd()).toThrow(TypeError);
});
