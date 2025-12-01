// Set the current year in the footer
const currentYear = new Date().getFullYear();
// Note: The span is inside the paragraph in your HTML, so we just set the text content for the span.
document.getElementById('currentyear').textContent = `©️${currentYear} 🐹 Shirley Anahi Rabell Magaña 🐹 Mexico City`;

// Set the last modified date in the footer
const lastModified = document.lastModified;
document.getElementById('lastModified').textContent = `Last Modified: ${lastModified}`;


// --- PRODUCT ARRAY DATA ---
const products = [
  {
    id: "fc-1888",
    name: "flux capacitor",
    averagerating: 4.5
  },
  {
    id: "fc-2050",
    name: "power laces",
    averagerating: 4.7
  },
  {
    id: "fs-1987",
    name: "time circuits",
    averagerating: 3.5
  },
  {
    id: "ac-2000",
    name: "low voltage reactor",
    averagerating: 3.9
  },
  {
    id: "jj-1969",
    name: "warp equalizer",
    averagerating: 5.0
  }
];


// --- DYNAMIC POPULATION FUNCTION ---
function populateProducts() {
    // This targets the select element by its ID
    const selectElement = document.getElementById('productName'); 

    // Safety check in case the ID is wrong in the HTML
    if (!selectElement) {
        console.error("Select element with ID 'productName' not found. Check form.html.");
        return;
    }

    products.forEach(product => {
        const option = document.createElement('option');
        // The display text is the product name (capitalized)
        option.textContent = product.name.charAt(0).toUpperCase() + product.name.slice(1); 
        // The required value attribute is the product id
        option.value = product.id; 
        selectElement.appendChild(option);
    });
}

// --- FUNCTION CALL ---
// This line tells the browser to run the function when the script loads.
populateProducts();