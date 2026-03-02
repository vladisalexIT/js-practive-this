import { car, calculateTime } from './car.js';
import { calculateFraction, currentOp, setCurrentOp } from './fraction.js';
import { updateTimeDisplay, addSeconds, addMinutes, addHours } from './time.js';


// Инициализация задания 1
document.getElementById('carInfo').textContent = car.showInfo();
calculateTime();

document.querySelectorAll('input').forEach(input => {
    input.addEventListener('input', () => {
        if (input.id === 'distanceInput') calculateTime();
        else calculateFraction();
    });
});


// Инициализация задания 2
document.getElementById('operator').textContent = currentOp;

document.getElementById('operator').addEventListener('click', function () {
    const ops = ['+', '-', '×', '÷'];
    const currentIndex = ops.indexOf(this.textContent);
    const nextOp = ops[(currentIndex + 1) % 4];
    
    this.textContent = nextOp;
    setCurrentOp(nextOp);
    calculateFraction();
});

calculateFraction();


// Инициализация задания 3

updateTimeDisplay();

document.getElementById('btnSeconds').addEventListener('click', addSeconds);
document.getElementById('btnMinutes').addEventListener('click', addMinutes);
document.getElementById('btnHours').addEventListener('click', addHours);



