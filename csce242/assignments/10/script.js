const advertisements = [
    "The variety with in these images is outstanding",
    "Each image has been edditted by our superior staff",
    "Look at all of these beautiful images",
    "Enjoy these images of nature",
    "These images just radiate a sense of calm"
];

const images = {
  "garden.jpg": {
    src: "images/garden.jpg",
    attribution: "Image by vecstock <a href='https://www.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_40965130.htm#query=landscape&position=0&from_view=keyword&track=sph&uuid=8e520e53-3fb6-4e41-9da7-682c824a94f7'>on Freepik</a>"
  },
  "golden.jpg": {
    src: "images/golden.jpg",
    attribution: "Image by vecstock <a href='https://www.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_11342065.htm#query=landscape&position=7&from_view=keyword&track=sph&uuid=16f8afcf-90c6-4cae-8249-a03fef90c6f4'>on Freepik</a>"
  },
  "mountain-lake.jpg": {
    src: "images/mountain-lake.jpg",
    attribution: "Image by vecstock <a href='https://www.freepik.com/free-photo/amazing-shot-beautiful-butchart-gardens-brentwood-bay_20496783.htm#query=landscape&position=27&from_view=keyword&track=sph&uuid=16f8afcf-90c6-4cae-8249-a03fef90c6f4'>on Freepik</a>"
  },
  "small-house.jpg": {
    src: "images/small-house.jpg",
    attribution: "Image by vecstock <a href='https://www.freepik.com/free-photo/small-houses-green-field-with-dark-sky_7553929.htm#query=landscape&position=39&from_view=keyword&track=sph&uuid=16f8afcf-90c6-4cae-8249-a03fef90c6f4'>on Freepik</a>"
  },
  "snow.jpg": {
    src: "images/snow.jpg",
    attribution: "Image by vecstock <a href='https://www.freepik.com/free-photo/beautiful-scenery-lot-leafless-trees-snow-covered-land-during-sunset_10990489.htm#query=landscape&position=38&from_view=keyword&track=sph&uuid=16f8afcf-90c6-4cae-8249-a03fef90c6f4'>on Freepik</a>"
  }
};

let currentIndex = 0;
const advertisement = document.getElementById('advertisement');
advertisement.innerHTML = advertisements[currentIndex];

const changeAdvertisement = () => {
    currentIndex = (currentIndex + 1) % advertisements.length;
    advertisement.innerHTML = advertisements[currentIndex];
}


const imageGalleryElement = document.getElementById('imageGallery');

for (const property in images) {
  const image = images[property];
  
  const imageContainer = document.createElement('div');

  const imgElement = document.createElement('img');
  imgElement.src = image.src;
  imageContainer.appendChild(imgElement);

  const attributionElement = document.createElement('p');
  attributionElement.innerHTML = image.attribution;
  imageContainer.appendChild(attributionElement);

  imageGalleryElement.appendChild(imageContainer);
}

setInterval(changeAdvertisement, 2000);