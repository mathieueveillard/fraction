import add, { createFraction } from ".";

describe("Addition of fractions", () => {
  test("Addition of a fraction with 0", () => {
    const f1 = createFraction(1, 2);
    const f2 = createFraction(0, 2);
    expect(add(f1, f2)).toEqual(f1);
  });

  test("Addition of two fractions with same denominator", () => {
    const f1 = createFraction(1, 3);
    const f2 = createFraction(1, 3);
    expect(add(f1, f2)).toEqual(createFraction(2, 3));
  });

  test("Addition of two fractions with different denominators", () => {
    const f1 = createFraction(1, 2);
    const f2 = createFraction(1, 3);
    expect(add(f1, f2)).toEqual(createFraction(5, 6));
  });

  test("Addition of two fractions (reduction)", () => {
    const f1 = createFraction(1, 4);
    const f2 = createFraction(1, 4);
    expect(add(f1, f2)).toEqual(createFraction(1, 2));
  });

  test("[control] Addition of two fractions (reduction)", () => {
    const f1 = createFraction(2, 3);
    const f2 = createFraction(2, 6);
    expect(add(f1, f2)).toEqual(createFraction(1, 1));
  });

  test("It should not allow to create fractions with 0 as denominator", () => {
    expect(() => createFraction(1, 0)).toThrowError("Denominator can't be null.");
  });
});
