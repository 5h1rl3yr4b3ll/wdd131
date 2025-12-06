//========================================================================
// PROJECT: Shirley & Gilberto Wedding Website (The Next Chapter)
// AUTHOR: Shirley Rabell
//
// DESCRIPTION:
// This script provides core dynamic functionality for the four main pages
// (index.html, rsvp.html, gifts.html, details.html).
//
// CORE REQUIREMENTS IMPLEMENTED:
// 1. RSVP (rsvp.html): Comprehensive HTML form data capture and storage in
//    the browser's localStorage using JavaScript objects and arrays.
// 2. Gifts (gifts.html): Dynamic rendering of gift items using objects, 
//    arrays, and template literals, supporting interactive filtering.
// 3. Progressive Design: Utility functions and element targeting for UX.
//========================================================================


// --- 1. SITE-WIDE UTILITIES (e.g., Footer Date) -------------------------

/**
 * Sets the current year in the footer's copyright notice.
 */
// Set the current year in the footer
const currentYear = new Date().getFullYear();
// Note: The span is inside the paragraph in your HTML, so we just set the text content for the span.
document.getElementById('currentyear').textContent = `©️${currentYear} 🪼🪸 Shirley & Gilberto: The Next Chapter 🏖️🐚 Sisal, Yucatan`;

// Set the last modified date in the footer
const lastModified = document.lastModified;
document.getElementById('lastModified').textContent = `Last Modified: ${lastModified}`;


// --- 2. GIFT REGISTRY DATA AND RENDERING ------------------------------

// Array of gift objects
const giftList = [
    {
        itemName: "Teapot",
        category: "Kitchen",
        store: "Crate & Barrel",
        price: 350,
        imageUrl: "https://m.media-amazon.com/images/I/61Sb0dHB73L._AC_UL320_.jpg"
    },
    {
        itemName: "Cash Fund Contribution",
        category: "Honeymoon",
        store: "Honeymoon Fund",
        price: 50,
        imageUrl: "https://plus.unsplash.com/premium_photo-1661756642433-2b63cf1bd2a9?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        itemName: "High-Quality Luggage Set",
        category: "Travel",
        store: "Amazon",
        price: 450,
        imageUrl: "https://m.media-amazon.com/images/I/91z+f3HQTSL._AC_UL320_.jpg"
    },
    {
        itemName: "Ocean Blue Dinnerware Set",
        category: "Kitchen",
        store: "Crate & Barrel",
        price: 200,
        imageUrl: "https://m.media-amazon.com/images/I/81Psau7eWzL._AC_SX342_.jpg"
    },
    {
        itemName: "Smart Home Assistant",
        category: "Home Tech",
        store: "Amazon",
        price: 150,
        imageUrl: "https://m.media-amazon.com/images/I/51ekoxLm0LL._AC_SX679_.jpg"
    }
];

/**
 * Renders the gift items to the gifts.html page using template literals.
 */
function renderGifts(filteredGifts) {
    const container = document.querySelector(".featured-grid");

    // Exit if the container element is not found (i.e., we are not on gifts.html)
    if (!container) return;

    container.innerHTML = ""; // Clear existing content

    filteredGifts.forEach(gift => {
        // Template literal used to structure each gift card dynamically
        const card = `
            <figure class="gift-card" data-category="${gift.category.toLowerCase()}">
                <img
                    src="${gift.imageUrl}"
                    alt="${gift.itemName}"
                    loading="lazy"
                >
                <figcaption>
                    <h3 style="color: var(--color-primary);">${gift.itemName}</h3>
                    <p><strong>Category:</strong> ${gift.category}</p>
                    <p><strong>Store:</strong> ${gift.store}</p>
                    <p style="color: var(--color-accent);"><strong>Suggested Price:</strong> $${gift.price}</p>
                    <a href="#" class="registry-link cta-button">View Registry</a>
                </figcaption>
            </figure>
        `;
        container.innerHTML += card;
    });
}

/**
 * Sets up the event listeners for the filter links on gifts.html
 */
function setupGiftFilters() {
    const allLink = document.querySelector("#filterAll");
    if (!allLink) return; // Exit if filters are not present

    const filters = [
        { id: "#filterAll", filterFn: () => giftList },
        { id: "#filterKitchen", filterFn: () => giftList.filter(gift => gift.category === "Kitchen") },
        { id: "#filterHoneymoon", filterFn: () => giftList.filter(gift => gift.category === "Honeymoon") },
        { id: "#filterBudget", filterFn: () => giftList.filter(gift => gift.price < 200) }
    ];

    filters.forEach(filter => {
        const link = document.querySelector(filter.id);
        if (link) {
            link.addEventListener("click", (e) => {
                e.preventDefault();
                
                // Set active class for visual feedback
                document.querySelectorAll('.filter-link').forEach(l => l.classList.remove('active'));
                link.classList.add('active');
                
                renderGifts(filter.filterFn());
            });
        }
    });
    // Set 'Show All' as active by default upon page load
    document.querySelector("#filterAll")?.classList.add('active');
}


// --- 3. RSVP LOCAL STORAGE IMPLEMENTATION (Core Requirement) -----------

/**
 * Handles the RSVP form submission, saves data to localStorage, and provides feedback.
 * This function uses objects, arrays, and template literals to fulfill the project requirement.
 */
function handleRsvpSubmission(event) {
    event.preventDefault(); // Stop the form from submitting normally

    const form = document.getElementById('rsvpForm');
    if (!form) return;

    // 1. Collect form data using the FormData object
    const formData = new FormData(form);
    
    // Create the guest object
    const guestData = {
        id: Date.now(), // Unique ID
        name: formData.get('fullName'),
        partySize: parseInt(formData.get('partySize')),
        attendance: formData.get('attendance'),
        mealChoice: formData.get('mealChoice'),
        dietaryRestrictions: formData.get('dietaryRestrictions') || 'None',
        timestamp: new Date().toISOString()
    };

    // 2. Retrieve existing submissions array from localStorage
    let guests = [];
    const storedGuests = localStorage.getItem('weddingRSVPs');
    if (storedGuests) {
        // Parse the stored JSON string into a JavaScript array
        guests = JSON.parse(storedGuests);
    }

    // 3. Add the new guest object to the array
    guests.push(guestData);

    // 4. Save the updated array back to localStorage as a JSON string
    try {
        localStorage.setItem('weddingRSVPs', JSON.stringify(guests));
        
        alert(`RSVP Submitted! Thank you, ${guestData.name}. 
Your party size of ${guestData.partySize} is confirmed as ${guestData.attendance}.
(Data stored locally in weddingRSVPs array)`);

        form.reset(); 

    } catch (e) {
        console.error("Error saving RSVPs to localStorage:", e);
        alert("Sorry, there was an issue submitting your RSVP. Please try again later.");
    }
}

/**
 * Attaches the submission handler to the RSVP form on page load.
 */
function setupRsvpListener() {
    const rsvpForm = document.getElementById('rsvpForm');
    if (rsvpForm) {
        rsvpForm.addEventListener('submit', handleRsvpSubmission);
    }
}


// --- 4. INITIALIZATION -------------------------------------------------

// Run all setup functions once the entire page is loaded
document.addEventListener('DOMContentLoaded', () => {
      
    // Gifts page setup
    renderGifts(giftList);
    setupGiftFilters();
    
    // RSVP page setup
    setupRsvpListener();
});