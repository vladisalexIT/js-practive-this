const car = {
    brand: 'BMW',
    model: 'M3',
    year: 2023,
    speed: 250,

    showInfo() {
        return `Автомобиль: ${this.brand} ${this.model}, ${this.year} года выпуска, ср. скорость: ${this.speed} км/ч`;
    },

    calcTime(distance) {
        const totalHours = distance / this.speed
        const hours = Math.floor(totalHours)
        const minutes = Math.round((totalHours - hours) * 60);
        const timeBreak = Math.floor((totalHours - 0.001) / 4)
        const finalHours = Math.floor(+hours + +timeBreak)
        return `Необходимое время чтобы проехать ${distance} км со средней скоростью составит ${finalHours} часа/ов, ${minutes} минут`
    }
}


function calculateTime() {
    const distance = parseFloat(document.getElementById('distanceInput').value);
    if (isNaN(distance) || distance <= 0) {
        document.getElementById('result').textContent = '❌ Введите корректное расстояние!';
        return;
    }
    document.getElementById('result').textContent = car.calcTime(distance);
}

export { car, calculateTime };