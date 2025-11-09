// Set the current year in the footer
const currentYear = new Date().getFullYear();
// Note: The span is inside the paragraph in your HTML, so we just set the text content for the span.
document.getElementById('currentyear').textContent = `©️${currentYear} 🐹 Shirley Anahi Rabell Magaña 🐹 Mexico City`;

// Set the last modified date in the footer
const lastModified = document.lastModified;
document.getElementById('lastModified').textContent = `Last Modified: ${lastModified}`;

// Hamburger Menu Toggle Logic
const hamButton = document.querySelector('.hamburger-menu');
const navigation = document.querySelector('nav');

hamButton.addEventListener('click', () => {
    // Toggle the 'open' class on the navigation
	navigation.classList.toggle('open');
    // Change the hamburger icon to an 'X' when open
	hamButton.textContent = navigation.classList.contains('open') ? 'X' : '☰';
});