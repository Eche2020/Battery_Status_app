const batteryLevel = document.getElementById('level')
const chargeLevel = document.getElementById('charging')

// function to update the battery level
function updateBatteryStatus() {
    navigator.getBattery().then(function (battery) {
        batteryLevel.textContent = `${(battery.level * 100).toFixed(2)}`;
        chargeLevel.textContent = battery.charging ? 'Charging' : 'Not Charging';


        if (battery.charging) {
            charging.classList.add('charging-animation')
        } else {
            charging.classList.remove('charging-animation')
        }
    })
}



// initialize the updateBattery()
updateBatteryStatus()

// listen for changes in the battery status
navigator.getBattery().then(function (battery) {
    battery.addEventListener('levelchange', updateBatteryStatus)
    battery.addEventListener('chargingchange', updateBatteryStatus)
});