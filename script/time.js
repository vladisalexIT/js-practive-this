export class Time {
    constructor(hours = 0, minutes = 0, seconds = 0) {
        this.hours = hours;
        this.minutes = minutes;
        this.seconds = seconds;
        this.normalize();
    }

    normalize() {
        let totalSeconds = this.seconds + this.minutes * 60 + this.hours * 3600;
        totalSeconds = totalSeconds % 86400;
        if (totalSeconds < 0) {
            totalSeconds += 86400;
        }
        this.seconds = Math.floor(totalSeconds % 60);
        this.minutes = Math.floor((totalSeconds / 60) % 60);
        this.hours = Math.floor(totalSeconds / 3600);
    }

    display() {
        return `${this.hours.toString().padStart(2, '0')}:` +
            `${this.minutes.toString().padStart(2, '0')}:` +
            `${this.seconds.toString().padStart(2, '0')}`;
    }

    addSeconds(seconds) {
        this.seconds += seconds;
        this.normalize();
    }

    addMinutes(minutes) {
        this.minutes += minutes;
        this.normalize();
    }

    addHours(hours) {
        this.hours += hours;
        this.normalize();
    }
}

export const demoTime = new Time(12, 15, 30);

export function updateTimeDisplay() {
    const timeDisplay = document.getElementById('timeDisplay');
    timeDisplay.textContent = demoTime.display();
}

export function addSeconds() {
    const timeResult = document.getElementById('timeResult');
    demoTime.addSeconds(45);
    updateTimeDisplay();
    timeResult.textContent = '+45 секунд → ' + demoTime.display();
}

export function addMinutes() {
    const timeResult = document.getElementById('timeResult');
    demoTime.addMinutes(25);
    updateTimeDisplay();
    timeResult.textContent = '+25 минут → ' + demoTime.display();
}

export function addHours() {
    const timeResult = document.getElementById('timeResult');
    demoTime.addHours(3);
    updateTimeDisplay();
    timeResult.textContent = '+3 часа → ' + demoTime.display();
}