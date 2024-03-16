const toggleHamburger = () => {
    document.getElementById("nav-items").classList.toggle("hide");
  };
  
  window.onload = () => {
    document.getElementById("hamburger").onclick = toggleHamburger;
  };

  window.onload = async () => {
    const propertyListings = document.getElementById('featured-content');
  
    try {
      const response = await fetch('https://github.com/anath21/anath21.github.io/blob/main/csce242/projects/part5/propertues.json');
      const data = await response.json();
  
      data.forEach(property => {
        const listingDiv = document.createElement('div');
        listingDiv.classList.add('property-listing');
  
        listingDiv.innerHTML = `
          <img src="images/${property.img_name}" alt="${property.address}">
          <h2>${property.address}</h2>
          <p>${property.description}</p>
          <ul>
            <li>Bedrooms: ${property.bedrooms}</li>
            <li>Bathrooms: ${property.bathrooms}</li>
            <li>Square Footage: ${property.sqft}</li>
            <li>Price Estimate: ${property.price_estimate}</li>
            <li>Nearby Schools:</li>
            ${property.nearby_schools.map(school => `
              <li>${school.name} - Grades: ${school.grades}, Distance: ${school.distance}</li>
            `).join('')}
          </ul>
        `;
  
        propertyListings.appendChild(listingDiv);
      });
    } catch (error) {
      console.log(error);
    }
  };
  