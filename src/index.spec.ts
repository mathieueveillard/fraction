import { Denominator, Fraction, Numerator } from ".";

describe("Denominator", function() {
  it("Should NOT allow to create a zero denominator", function() {
    expect(() => new Denominator(0)).toThrowError("Cannot create a zero denominator.");
  });
});

describe("Fraction", function() {
  it("Should be able to add 0 to a fraction", function() {
    const f1 = new Fraction(new Numerator(1), new Denominator(1));
    const f2 = new Fraction(new Numerator(0), new Denominator(1));
    const actual = f1.plus(f2);
    const expected = f1;
    expect(actual).toEqual(expected);
  });

  it("Should be able to add two fractions with the same denominator", function() {
    const f1 = new Fraction(new Numerator(1), new Denominator(1));
    const f2 = new Fraction(new Numerator(2), new Denominator(1));
    const actual = f1.plus(f2);
    const expected = new Fraction(new Numerator(3), new Denominator(1));
    expect(actual).toEqual(expected);
  });

  it("Should be able to scale up a fraction", function() {
    const f = new Fraction(new Numerator(1), new Denominator(2));
    const actual = f.scaleByMultiplication(2);
    const expected = new Fraction(new Numerator(2), new Denominator(4));
    expect(actual).toEqual(expected);
  });

  it("Should be able to add fractions with different denominators", function() {
    const f1 = new Fraction(new Numerator(1), new Denominator(2));
    const f2 = new Fraction(new Numerator(1), new Denominator(3));
    const actual = f1.plus(f2);
    const expected = new Fraction(new Numerator(5), new Denominator(6));
    expect(actual).toEqual(expected);
  });

  it("Should be able to scale down a fraction", function() {
    const f = new Fraction(new Numerator(2), new Denominator(4));
    const actual = f.scaleByDivision(2);
    const expected = new Fraction(new Numerator(1), new Denominator(2));
    expect(actual).toEqual(expected);
  });

  it("Should be able to reduce a fraction", function() {
    const f = new Fraction(new Numerator(6), new Denominator(9));
    const actual = f.reduce();
    const expected = new Fraction(new Numerator(2), new Denominator(3));
    expect(actual).toEqual(expected);
  });

  it("Should be able to add fractions with different denominators and reduce the resulting fraction", function() {
    const f1 = new Fraction(new Numerator(1), new Denominator(4));
    const f2 = new Fraction(new Numerator(1), new Denominator(6));
    const actual = f1.plus(f2);
    const expected = new Fraction(new Numerator(5), new Denominator(12));
    expect(actual).toEqual(expected);
  });
});
