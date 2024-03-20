const toggleHamburger = () => {
    document.getElementById("nav-items").classList.toggle("hide");
  };
  
  document.getElementById("hamburger").onclick = toggleHamburger;
  

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

  const result = document.getElementById("result");

  const showEmailResult = async(e) => {
    e.preventDefault();

    let response = await getEmailResult();

    if(response.status == 200) {
        result.innerHTML = "Email was successfully sent :) "
    } else {
        result.innerHTML = "Sorry the email couldn't be sent :( "
    }

};

const getEmailResult = async() => {

    const form = document.getElementById("contact-form");
    const formData = new FormData(form);
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);
    result.innerHTML = "Please wait ...";

    try {
        const response = await fetch("https://api.web3forms.com/submit", {
            method:"POST",
            headers:{
                "Content-Type":"application/json",
                Accept:"application.json"
            },
            body:json
        });

        return response;
    } catch(error) {
        console.log(error);
        result.innerHTML = "Sorry the email couldn't be sent :( ";
    }
};

document.getElementById("contact-form").onsubmit = showEmailResult;






document.getElementById("add-house-btn").addEventListener('click', function() {
  showHouseFormModal();
});

function showHouseFormModal() {
  const modal = document.createElement("div");
  modal.classList.add("modal");
  modal.addEventListener('click', () => modal.remove());

  const modalContent = document.createElement("div");
  modalContent.classList.add("modal-content");

  const close = document.createElement("span");
  close.classList.add("close");
  close.innerHTML = "&times;";
  close.addEventListener('click', () => modal.remove());
  modalContent.append(close);

  const form = document.createElement("form");
  form.id = "add-house-form";
  form.innerHTML = `
      <label for="address">Address:</label>
      <input type="text" id="address" name="address" required><br>
      <label for="bathrooms">Bathrooms:</label>
      <input type="number" id="bathrooms" name="bathrooms" required><br>
      <label for="bedrooms">Bedrooms:</label>
      <input type="number" id="bedrooms" name="bedrooms" required><br>
      <label for="squareFootage">Square Footage:</label>
      <input type="number" id="squareFootage" name="squareFootage" required><br>
      <label for="nextOpenHouse">Next Open House:</label>
      <input type="date" id="nextOpenHouse" name="nextOpenHouse" required><br>
      <button type="submit">Add House</button>
  `;
  modalContent.appendChild(form);

  modal.append(modalContent);
  document.body.appendChild(modal);

  form.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent default form submission

      const formData = new FormData(form);
      const address = formData.get('address');
      const bathrooms = formData.get('bathrooms');
      const bedrooms = formData.get('bedrooms');
      const squareFootage = formData.get('squareFootage');
      const nextOpenHouse = formData.get('nextOpenHouse');

      // Display the entered information on the page
      const houseList = document.getElementById("house-list");
      const newHouse = document.createElement("div");
      newHouse.classList.add("house");
      newHouse.innerHTML = `
          <h3>${address}</h3>
          <p><strong>Bathrooms:</strong> ${bathrooms}</p>
          <p><strong>Bedrooms:</strong> ${bedrooms}</p>
          <p><strong>Square Footage:</strong> ${squareFootage}</p>
          <p><strong>Next Open House:</strong> ${nextOpenHouse}</p>
      `;
      houseList.appendChild(newHouse);

      modal.remove(); // Remove the modal after submission
  });
};