import { reactive } from "../reactive";

describe("rectivity", () => {
  it("happy path", () => {
    const orginal = { foo: 1 };
    const observed = reactive(orginal);
    expect(observed).not.toBe(orginal);
    expect(observed.foo).toBe(1);
  });
});
