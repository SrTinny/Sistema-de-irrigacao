function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomFloat(min, max, decimals) {
    const str = (Math.random() * (max - min) + min).toFixed(decimals);
    return parseFloat(str);
}

function generateDashboardData() {
    const soilMoisturePercentage = getRandomInt(30, 95);
    let soilMoistureStatus = "IDEAL";
    if (soilMoisturePercentage < 40) {
        soilMoistureStatus = "SECO";
    } else if (soilMoisturePercentage > 80) {
        soilMoistureStatus = "ÚMIDO";
    }

    const systemStatuses = ["ACTIVE", "INACTIVE"];
    const currentStatus = systemStatuses[getRandomInt(0, 0)];

    return {
        waterUsage: {
            liters: getRandomInt(500, 9500),
            maxLiters: 10000
        },
        nextIrrigation: {
            percentage: getRandomInt(0, 100),
            startTime: "14:00",
            duration: "45 min"
        },
        waterLevel: {
            percentage: getRandomInt(5, 100)
        },
        systemStatus: {
            status: currentStatus,
            uptime: `${getRandomInt(10, 50)}d ${getRandomInt(0, 23)}h ${getRandomInt(0, 59)}m`,
            lastCheck: "agora mesmo"
        },
        temperature: {
            current: getRandomFloat(25.0, 38.5, 1),
            min: 18.0,
            max: 42.0
        },
        irrigationSchedule: [
            { day: "Dom", value: getRandomInt(10, 90) },
            { day: "Seg", value: getRandomInt(10, 90) },
            { day: "Ter", value: getRandomInt(10, 90) },
            { day: "Qua", value: getRandomInt(10, 90) },
            { day: "Qui", value: getRandomInt(10, 90) },
            { day: "Sex", value: getRandomInt(10, 90) },
            { day: "Sab", value: getRandomInt(10, 90) },
        ],
        soilMoisture: {
            percentage: soilMoisturePercentage,
            status: soilMoistureStatus
        }
    };
}

module.exports = { generateDashboardData };