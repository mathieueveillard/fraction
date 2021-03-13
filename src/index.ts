import { gcd as computeGCD } from "./gcd";

class ValueWrapper {
  constructor(public value: number) {}

  multiply(n: number): ValueWrapper {
    return new ValueWrapper(this.value * n);
  }

  divide(n: number): ValueWrapper {
    return new ValueWrapper(this.value / n);
  }
}

export class Numerator extends ValueWrapper {}

export class Denominator extends ValueWrapper {
  constructor(public value: number) {
    super(value);
    if (value === 0) {
      throw new Error("Cannot create a zero denominator.");
    }
  }
}

export class Fraction {
  constructor(private numerator: Numerator, private denominator: Denominator) {}

  scaleByMultiplication(value: number): Fraction {
    return new Fraction(this.numerator.multiply(value), this.denominator.multiply(value));
  }

  scaleByDivision(value: number): Fraction {
    return new Fraction(this.numerator.divide(value), this.denominator.divide(value));
  }

  gcd(): number {
    return computeGCD(this.numerator.value, this.denominator.value);
  }

  reduce(): Fraction {
    return this.scaleByDivision(this.gcd());
  }

  plus(other: Fraction): Fraction {
    const f1 = this.scaleByMultiplication(other.denominator.value);
    const f2 = other.scaleByMultiplication(this.denominator.value);
    const numerator = new Numerator(f1.numerator.value + f2.numerator.value);
    const denominator = f1.denominator;
    return new Fraction(numerator, denominator).reduce();
  }
}
