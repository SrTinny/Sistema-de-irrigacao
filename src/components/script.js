let isIrrigationOn = false;

function toggleIrrigation() {
    isIrrigationOn = !isIrrigationOn;
    updateStatus();
}

function updateStatus() {
    const statusElement = document.getElementById('status');
    if (isIrrigationOn) {
        statusElement.textContent = 'Irrigação Ligada';
        statusElement.style.color = 'green';
    } else {
        statusElement.textContent = 'Irrigação Desligada';
        statusElement.style.color = 'red';
    }
}

function updateMonitoring() {
    const consumptionElement = document.getElementById('consumption');
    const levelElement = document.getElementById('level');
    const savingsElement = document.getElementById('savings');
    const temperatureElement = document.getElementById('temperature');
    const soilHumidityElement = document.getElementById('soilHumidity');
    const plantTypeElement = document.getElementById('plantType');

    const temperature = Math.floor(Math.random() * 30) + 12; // Simulação de temperatura
    const soilHumidity = Math.floor(Math.random() * 3) + 13; // Simulação de umidade do solo

    consumptionElement.textContent = Math.floor(Math.random() * 20) + 1; // Simulação de consumo
    levelElement.textContent = Math.floor(Math.random() * 100) + 1; // Simulação de nível de água
    savingsElement.textContent = Math.floor(Math.random() * 50) + 1; // Simulação de economia de água
    temperatureElement.textContent = temperature;
    soilHumidityElement.textContent = soilHumidity;

    if (temperature >= 12 && temperature <= 30 && soilHumidity >= 13 && soilHumidity <= 15) {
        plantTypeElement.textContent = 'Feijão';
        plantTypeElement.style.color = 'green';
    } else {
        plantTypeElement.textContent = 'Condições não ideais para Feijão';
        plantTypeElement.style.color = 'red';
    }
}

// Atualizar o status e o monitoramento a cada segundo
setInterval(() => {
    updateStatus();
    updateMonitoring();
}, 1000);
