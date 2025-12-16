# fraction

Write a program that implements the addition of fractions. Fractions must be reduced. An implementation of the greatest common divisor (GCD) is provided:

```javascript
function gcd(a, b) {
  return b === 0 ? a : gcd(b, a % b);
}
```

Examples:

```
1/2 + 1/3 = 5/6
1/4 + 1/4 = 1/2
```
