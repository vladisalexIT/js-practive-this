export class Fraction {
    constructor(numerator, denominator) {
        if (denominator === 0) throw new Error("Знаменатель не может быть 0");
        this.numerator = numerator;
        this.denominator = denominator;
    }

    static gcd(a, b) {
        a = Math.abs(a);
        b = Math.abs(b);
        while (b !== 0) {
            let temp = b;
            b = a % b;
            a = temp;
        }
        return a;
    }

    reduce() {
        const gcd = Fraction.gcd(this.numerator, this.denominator);
        this.numerator /= gcd;
        this.denominator /= gcd;
        return this;
    }

    add(other) {
        const newNum = this.numerator * other.denominator + other.numerator * this.denominator;
        const newDen = this.denominator * other.denominator;
        return new Fraction(newNum, newDen).reduce();
    }

    subtract(other) {
        const newNum = this.numerator * other.denominator - other.numerator * this.denominator;
        const newDen = this.denominator * other.denominator;
        return new Fraction(newNum, newDen).reduce();
    }

    multiply(other) {
        const newNum = this.numerator * other.numerator;
        const newDen = this.denominator * other.denominator;
        return new Fraction(newNum, newDen).reduce();
    }

    divide(other) {
        if (other.numerator === 0) throw new Error("Деление на ноль запрещено");
        const newNum = this.numerator * other.denominator;
        const newDen = this.denominator * other.numerator;
        return new Fraction(newNum, newDen).reduce();
    }

    toString() {
        if (this.denominator === 1) return `${this.numerator}`;
        return `${this.numerator}/${this.denominator}`;
    }
}

export let currentOp = '+';

export function calculateFraction() {
    const num1 = parseInt(document.getElementById('num1').value) || 0;
    const den1 = parseInt(document.getElementById('den1').value) || 1;
    const num2 = parseInt(document.getElementById('num2').value) || 0;
    const den2 = parseInt(document.getElementById('den2').value) || 1;

    if (den1 === 0 || den2 === 0) {
        document.getElementById('fractionResult').textContent = '❌ Знаменатель ≠ 0';
        document.getElementById('fractionResult').className = 'error';
        return;
    }

    if (isNaN(num1) || isNaN(den1) || isNaN(num2) || isNaN(den2)) {
        document.getElementById('fractionResult').textContent = '❌ Введите корректные числа';
        document.getElementById('fractionResult').className = 'error';
        return;
    }

    const frac1 = new Fraction(num1, den1);
    const frac2 = new Fraction(num2, den2);

    let result;
    switch (currentOp) {
        case '+': result = frac1.add(frac2); break;
        case '-': result = frac1.subtract(frac2); break;
        case '×': result = frac1.multiply(frac2); break;
        case '÷':
            if (frac2.numerator === 0) {
                document.getElementById('fractionResult').textContent = '❌ Деление на 0';
                document.getElementById('fractionResult').className = 'error';
                return;
            }
            result = frac1.divide(frac2);
            break;
        default:
            currentOp = '+';
            result = frac1.add(frac2);
    }

    document.getElementById('fractionResult').textContent =
        `${frac1.toString()} ${currentOp} ${frac2.toString()} = ${result.toString()}`;
    document.getElementById('fractionResult').className = 'result';
}

export function setCurrentOp(val) {
    currentOp = val;
}