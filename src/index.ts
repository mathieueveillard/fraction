import computeGCD from "./gcd";

export type Fraction = {
  readonly numerator: number;
  readonly denominator: number;
};

export const createFraction = (numerator: number, denominator: number): Fraction => {
  if (!denominator) {
    throw Error("Denominator can't be null."); // ToDo: proper error management w/ Result
  }
  return {
    numerator,
    denominator
  };
};

const scaleUp = ({ numerator, denominator }: Fraction, factor: number): Fraction =>
  createFraction(numerator * factor, denominator * factor);

const scaleDown = ({ numerator, denominator }: Fraction, factor: number): Fraction =>
  createFraction(numerator / factor, denominator / factor);

const reduce = (fraction: Fraction): Fraction => {
  const { numerator, denominator } = fraction;
  const gcd = computeGCD(numerator, denominator);
  return scaleDown(fraction, gcd);
};

const addFractionsWithSameDenominator = (f1: Fraction, f2: Fraction): Fraction =>
  createFraction(f1.numerator + f2.numerator, f1.denominator);

const add = (f1: Fraction, f2: Fraction): Fraction => {
  const f1bis = scaleUp(f1, f2.denominator);
  const f2bis = scaleUp(f2, f1.denominator);
  return reduce(addFractionsWithSameDenominator(f1bis, f2bis));
};

export default add;
