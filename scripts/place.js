// --- Footer Dates ---

// Set the current year
const currentYear = new Date().getFullYear();
document.getElementById('currentyear').textContent = `©️${currentYear} 🐹 Shirley Anahi Rabell Magaña 🐹 Mexico City`;

// Set the last modified date
const lastModified = document.lastModified;
document.getElementById('lastModified').textContent = `Last Modified: ${lastModified}`;


// --- Wind Chill Implementation ---

// 1. Define static variables (REQUIRED)
// Metric: Temperature in °C, Wind Speed in km/h
const tempC = 25; // Static Temperature
const speedKmh = 8;  // Static Wind Speed

// 2. Write the calculateWindChill function (Metric Formula) (REQUIRED)
// Formula: T_wc = 13.12 + 0.6215*T - 11.37*V^0.16 + 0.3965*T*V^0.16
function calculateWindChill(T, V) {
    // The calculation in a single line (REQUIRED)
    return (13.12 + (0.6215 * T) - (11.37 * Math.pow(V, 0.16)) + (0.3965 * T * Math.pow(V, 0.16)));
}

// 3. Logic to check conditions and display result (REQUIRED)
const windChillElement = document.getElementById('windchill-display');

// Viable Wind Chill Conditions (Metric): Temperature <= 10 °C AND Wind speed > 4.8 km/h
if (tempC <= 10 && speedKmh > 4.8) {
    // Conditions met, calculate and display
    const windChillFactor = calculateWindChill(tempC, speedKmh);
    
    // Display result rounded to one decimal place
    windChillElement.textContent = `${windChillFactor.toFixed(1)} °C`;
} else {
    // Conditions not met, display "N/A" (Not Applicable)
    windChillElement.textContent = "N/A";
}