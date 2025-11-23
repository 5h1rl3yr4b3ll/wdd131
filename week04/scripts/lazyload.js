// Set the current year in the footer
const currentYear = new Date().getFullYear();
// Note: The span is inside the paragraph in your HTML, so we just set the text content for the span.
document.getElementById('currentyear').textContent = `©️${currentYear} 🐹 Shirley Anahi Rabell Magaña 🐹 Mexico City`;

// Set the last modified date in the footer
const lastModified = document.lastModified;
document.getElementById('lastModified').textContent = `Last Modified: ${lastModified}`;