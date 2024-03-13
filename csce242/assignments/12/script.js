const getHousePlans = async () => {
    const url = "https://portiaportia.github.io/json/house-plans.json";

    try {
        const response = await fetch(url);
        return response.json();
    } catch (error) {
        console.log(error);
    }
};

const showHousePlans = async () => {
    const housePlans = await getHousePlans();

    housePlans.forEach((housePlan) => {
        document.getElementById("house-plans-section").append(getHousePlanSection(housePlan));
    });
};

const getHousePlanSection = (housePlan) => {
    const mainSection = document.createElement("section");

    const titleSection = document.createElement("section");
    const h3 = document.createElement("h3");
    h3.innerHTML = housePlan.name;
    titleSection.appendChild(h3);
    mainSection.appendChild(titleSection);

    const imageDescriptionSection = document.createElement("section");
    imageDescriptionSection.classList.add("house-plan-details");

    const imageSection = document.createElement("section");
    const mainImage = document.createElement("img");
    mainImage.src = "images/" + housePlan.main_image;
    mainImage.alt = housePlan.name + " main image";
    imageSection.appendChild(mainImage);
    imageDescriptionSection.appendChild(imageSection);

    const descriptionSection = document.createElement("section");
    descriptionSection.style.flex = "3";
    const sizeP = document.createElement("p");
    sizeP.innerHTML = "Size: " + housePlan.size + " sqft";
    descriptionSection.appendChild(sizeP);
    const bedroomsP = document.createElement("p");
    bedroomsP.innerHTML = "Bedrooms: " + housePlan.bedrooms;
    descriptionSection.appendChild(bedroomsP);
    const bathroomsP = document.createElement("p");
    bathroomsP.innerHTML = "Bathrooms: " + housePlan.bathrooms;
    descriptionSection.appendChild(bathroomsP);
    const featuresUl = document.createElement("ul");
    housePlan.features.forEach((feature) => {
        const li = document.createElement("li");
        li.innerHTML = feature;
        featuresUl.appendChild(li);
    });
    descriptionSection.appendChild(featuresUl);
    imageDescriptionSection.appendChild(descriptionSection);
    mainSection.appendChild(imageDescriptionSection);

    const blueprintSection = document.createElement("section");
    blueprintSection.classList.add("blueprint-images");
    housePlan.floor_plans.forEach((floorPlan) => {
        const floorPlaneName = document.createElement("p");
        floorPlaneName.innerHTML = floorPlan.name;
        blueprintSection.appendChild(floorPlaneName);
        const floorPlanImage = document.createElement("img");
        floorPlanImage.src = "images/" + floorPlan.image;
        floorPlanImage.alt = floorPlan.name + " blueprint";
        blueprintSection.appendChild(floorPlanImage);
    });
    mainSection.appendChild(blueprintSection);

    return mainSection;
};

showHousePlans();