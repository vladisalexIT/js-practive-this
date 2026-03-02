
// Car
// const car = {
//     brand: 'BMW',
//     model: 'M3',
//     year: 2023,
//     speed: 250,

//     showInfo() {
//         return `Автомобиль: ${this.brand} ${this.model}, ${this.year} года выпуска, ср. скорость: ${this.speed} км/ч`;
//     },

//     calcTime(distance) {
//         const totalHours = distance / this.speed
//         const hours = Math.floor(totalHours)
//         const minutes = Math.round((totalHours - hours) * 60);
//         const timeBreak = Math.floor((totalHours - 0.001) / 4)
//         const finalHours = Math.floor(+hours + +timeBreak)
//         return `Необходимое время чтобы проехать ${distance} км со средней скоростью составит ${finalHours} часа/ов, ${minutes} минут`
//     }
// }

// document.getElementById('carInfo').textContent = car.showInfo();
// function calculateTime() {
//     const distance = parseFloat(document.getElementById('distanceInput').value);
//     if (isNaN(distance) || distance <= 0) {
//         document.getElementById('result').textContent = '❌ Введите корректное расстояние!';
//         return;
//     }
//     document.getElementById('result').textContent = car.calcTime(distance);
// }
// calculateTime();

// Класс Fraction (дробь)
// class Fraction {
//     constructor(numerator, denominator) {
//         if (denominator === 0) throw new Error("Знаменатель не может быть 0");
//         this.numerator = numerator;
//         this.denominator = denominator;
//     }

//     static gcd(a, b) {
//         a = Math.abs(a);
//         b = Math.abs(b);
//         while (b !== 0) {
//             let temp = b;
//             b = a % b;
//             a = temp;
//         }
//         return a;
//     }

//     reduce() {
//         const gcd = Fraction.gcd(this.numerator, this.denominator);
//         this.numerator /= gcd;
//         this.denominator /= gcd;
//         return this;
//     }

//     add(other) {
//         const newNum = this.numerator * other.denominator + other.numerator * this.denominator;
//         const newDen = this.denominator * other.denominator;
//         return new Fraction(newNum, newDen).reduce();
//     }

//     subtract(other) {
//         const newNum = this.numerator * other.denominator - other.numerator * this.denominator;
//         const newDen = this.denominator * other.denominator;
//         return new Fraction(newNum, newDen).reduce();
//     }

//     multiply(other) {
//         const newNum = this.numerator * other.numerator;
//         const newDen = this.denominator * other.denominator;
//         return new Fraction(newNum, newDen).reduce();
//     }

//     divide(other) {
//         if (other.numerator === 0) throw new Error("Деление на ноль запрещено");
//         const newNum = this.numerator * other.denominator;
//         const newDen = this.denominator * other.numerator;
//         return new Fraction(newNum, newDen).reduce();
//     }

//     toString() {
//         if (this.denominator === 1) return `${this.numerator}`;
//         return `${this.numerator}/${this.denominator}`;
//     }
// }

// // Калькулятор дробей
// let currentOp = '+';
// document.getElementById('operator').textContent = currentOp;

// function calculateFraction() {
//     const num1 = parseInt(document.getElementById('num1').value) || 0;
//     const den1 = parseInt(document.getElementById('den1').value) || 1;
//     const num2 = parseInt(document.getElementById('num2').value) || 0;
//     const den2 = parseInt(document.getElementById('den2').value) || 1;

//     if (den1 === 0 || den2 === 0) {
//         document.getElementById('fractionResult').textContent = '❌ Знаменатель ≠ 0';
//         document.getElementById('fractionResult').className = 'error';
//         return;
//     }

//     if (isNaN(num1) || isNaN(den1) || isNaN(num2) || isNaN(den2)) {
//         document.getElementById('fractionResult').textContent = '❌ Введите корректные числа';
//         document.getElementById('fractionResult').className = 'error';
//         return;
//     }

//     const frac1 = new Fraction(num1, den1);
//     const frac2 = new Fraction(num2, den2);

//     let result;
//     switch (currentOp) {
//         case '+': result = frac1.add(frac2); break;
//         case '-': result = frac1.subtract(frac2); break;
//         case '×': result = frac1.multiply(frac2); break;
//         case '÷':
//             if (frac2.numerator === 0) {
//                 document.getElementById('fractionResult').textContent = '❌ Деление на 0';
//                 document.getElementById('fractionResult').className = 'error';
//                 return;
//             }
//             result = frac1.divide(frac2);
//             break;
//         default:
//             currentOp = '+';
//             result = frac1.add(frac2);
//     }

//     document.getElementById('fractionResult').textContent =
//         `${frac1.toString()} ${currentOp} ${frac2.toString()} = ${result.toString()}`;
//     document.getElementById('fractionResult').className = 'result';
// }

// document.querySelectorAll('input').forEach(input => {
//     input.addEventListener('input', () => {
//         if (input.id === 'distanceInput') calculateTime();
//         else calculateFraction();
//     });
// });

// document.getElementById('operator').addEventListener('click', function () {
//     const ops = ['+', '-', '×', '÷'];
//     const currentIndex = ops.indexOf(this.textContent);
//     this.textContent = ops[(currentIndex + 1) % 4];
//     currentOp = ops[(currentIndex + 1) % 4];
//     calculateFraction();
// });

// calculateFraction();




// Калькулятор времени
// class Time {
//     constructor(hours = 0, minutes = 0, seconds = 0) {
//         this.hours = hours;
//         this.minutes = minutes;
//         this.seconds = seconds;
//         this.normalize();
//     }

//     normalize() {
//         let totalSeconds = this.seconds + this.minutes * 60 + this.hours * 3600;
//         totalSeconds = totalSeconds % 86400;
//         if (totalSeconds < 0) {
//             totalSeconds += 86400;
//         }
//         this.seconds = Math.floor(totalSeconds % 60);
//         this.minutes = Math.floor((totalSeconds / 60) % 60);
//         this.hours = Math.floor(totalSeconds / 3600);
//     }

//     display() {
//         return `${this.hours.toString().padStart(2, '0')}:` +
//             `${this.minutes.toString().padStart(2, '0')}:` +
//             `${this.seconds.toString().padStart(2, '0')}`;
//     }

//     addSeconds(seconds) {
//         this.seconds += seconds;
//         this.normalize();
//     }

//     addMinutes(minutes) {
//         this.minutes += minutes;
//         this.normalize();
//     }

//     addHours(hours) {
//         this.hours += hours;
//         this.normalize();
//     }
// }

// const demoTime = new Time(12, 15, 30);
// const timeDisplay = document.getElementById('timeDisplay');
// const timeResult = document.getElementById('timeResult');

// function updateTimeDisplay() {
//     timeDisplay.textContent = demoTime.display();
// }

// function addSeconds() {
//     demoTime.addSeconds(45);
//     updateTimeDisplay();
//     timeResult.textContent = '+45 секунд → ' + demoTime.display();
// }

// function addMinutes() {
//     demoTime.addMinutes(25);
//     updateTimeDisplay();
//     timeResult.textContent = '+25 минут → ' + demoTime.display();
// }

// function addHours() {
//     demoTime.addHours(3);
//     updateTimeDisplay();
//     timeResult.textContent = '+3 часа → ' + demoTime.display();
// }

// updateTimeDisplay();

