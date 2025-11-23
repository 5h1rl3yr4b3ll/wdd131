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

const listTemples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
  templeName: "Salt Lake Temple",
  location: "Salt Lake City, Utah, United States",
  dedicated: "1893, April, 6",
  area: 253000,
  imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/salt-lake-city-utah/800x500/salt-lake-temple-763229.jpg"
},
{
  templeName: "Paris France",
  location: "Le Chesnay, France",
  dedicated: "2017, May, 21",
  area: 44175,
  imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/paris-france/800x500/paris-france-temple-exterior-1905503.jpg"
},
{
  templeName: "Cardston Alberta",
  location: "Cardston, Alberta, Canada",
  dedicated: "1923, August, 26",
  area: 17000,
  imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/cardston-alberta/800x500/cardston-alberta-temple-lds-782043-wallpaper.jpg"
},
{
  templeName: "Rome Italy",
  location: "Rome, Italy",
  dedicated: "2019, March, 10",
  area: 41010,
  imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/rome-italy/2019/800x500/6-Rome-Temple-2160338.jpg"
},
{
  templeName: "São Paulo Brazil",
  location: "São Paulo, Brazil",
  dedicated: "1978, October, 30",
  area: 59246,
  imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/sao-paulo-brazil/800x500/sao-paulo-brazil-mormon-temple-947863-wallpaper.jpg"
}
];

function renderTemples(filteredTemples) {
  const container = document.querySelector(".figure-grid");
  container.innerHTML = ""; // clear if needed

  filteredTemples.forEach(temple=> {
    const card = `
      <figure class="temple-card">
        <img 
          src="${temple.imageUrl}" 
          alt="${temple.templeName}" 
          loading="lazy"
        >
        <figcaption>
          <h2>${temple.templeName}</h2>
          <p><strong>Location:</strong> ${temple.location}</p>
          <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
          <p><strong>Area:</strong> ${temple.area} sq ft</p>
        </figcaption>
      </figure>
    `;

    container.innerHTML += card;
  }
)};

renderTemples(listTemples);

const oldLink = document.querySelector("#old");
oldLink.addEventListener("click", () => {
  renderTemples(
    listTemples.filter(temple => {
      // Extract the year from "1888, May, 21"
      const year = parseInt(temple.dedicated.split(",")[0]);
      return year <= 1900;
    })
  );
});


const newLink = document.querySelector("#new");
newLink.addEventListener("click", () => {
  renderTemples(
    listTemples.filter(temple => {
      // Extract the year from "1888, May, 21"
      const year = parseInt(temple.dedicated.split(",")[0]);
      return year >= 2000;
    })
  );
});

const largeLink = document.querySelector("#large");
largeLink.addEventListener("click", () => {
  renderTemples(
    listTemples.filter(temple => { return temple.area > 90000;
    })
  );
});

const smallLink = document.querySelector("#small");
smallLink.addEventListener("click", () => {
  renderTemples(
    listTemples.filter(temple => { return temple.area < 10000;
    })
  );
});

const homeLink = document.querySelector("#home");
homeLink.addEventListener("click", () => {
  renderTemples(listTemples);
});