const toggleHamburger = () => {
    document.getElementById("nav-items").classList.toggle("hide");
  };
  
  window.onload = () => {
    document.getElementById("hamburger").onclick = toggleHamburger;
  };

  window.onload = async () => {
    const currentPage = window.location.pathname;
    if (currentPage.includes("scarletOak.html")) {
      const propertyListings = document.getElementById("scarlet-right");
      try {
        const response = await fetch('https://raw.githubusercontent.com/anath21/anath21.github.io/main/csce242/projects/part5/properties.json');
        const data = await response.json();
    
        const scarletData = data.find(property => property._id === 1);
        const listingDiv = createListingDiv(scarletData);
        propertyListings.appendChild(listingDiv);
      } catch (error) {
        console.log(error);
      }
    } else if (currentPage.includes("spartanDrive.html")) {
      const propertyListings = document.getElementById("spartan-right");
      try {
        const response = await fetch('https://raw.githubusercontent.com/anath21/anath21.github.io/main/csce242/projects/part5/properties.json');
        const data = await response.json();
    
        const spartanData = data.find(property => property._id === 2);
        const listingDiv = createListingDiv(spartanData);
        propertyListings.appendChild(listingDiv);
      } catch (error) {
        console.log(error);
      }
    }
  };
  
  function createListingDiv(property) {
    const listingDiv = document.createElement('div');
    listingDiv.classList.add('property-listing');
  
    listingDiv.innerHTML = `
      <img src="images/${property.img_name}" alt="${property.address}" class="property-image">
      <div class="property-details">
        <h2 class="property-address">${property.address}</h2>
        <p class="property-description">${property.description}</p>
        <ul class="property-info">
          <li>Bedrooms: ${property.bedrooms}</li>
          <li>Bathrooms: ${property.bathrooms}</li>
          <li>Square Footage: ${property.sqft}</li>
          <li>Price Estimate: ${property.price_estimate}</li>
        </ul>
        <h3 class="school-header">Nearby Schools:</h3>
        <ul class="school-list">
          ${property.nearby_schools.map(school => `
            <li>${school.name} - Grades: ${school.grades}, Distance: ${school.distance}</li>
          `).join('')}
        </ul>
      </div>
    `;
  
    return listingDiv;
  };  