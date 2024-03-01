class Tree {
    constructor(title, type, height, age, pic, location) {
      this.title = title;
      this.type = type;
      this.height = height;
      this.age = age;
      this.pic = pic;
      this.location = location;
    }
  
    get section() {
      const section = document.createElement("section");
      section.classList.add("tree");
      section.classList.add("tree-style");
  
      const h3 = document.createElement("h3");
      h3.innerHTML = this.title;
      section.append(h3);
  
      const columns = document.createElement("section");
      columns.classList.add("columns");
      section.append(columns);
  
      const imageSection = document.createElement("section");
      columns.append(imageSection);
      const image = this.picture(this.pic);
      image.addEventListener('click', () => this.showModal());
      imageSection.append(image);
  
      return section;
    }
  
    showModal() {
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
  
      const title = document.createElement("h2");
      title.innerHTML = `<strong>${this.title}</strong>`;
      modalContent.append(title);
  
      const imageSection = document.createElement("section");
      imageSection.classList.add("tree-image");
      imageSection.append(this.picture(this.pic));
      modalContent.append(imageSection);
  
      modalContent.append(this.paragraph("Type", this.type));
      modalContent.append(this.paragraph("Height", this.height));
      modalContent.append(this.paragraph("Age", this.age));
      modalContent.append(this.paragraph("Location", this.location));
  
      modal.append(modalContent);
      document.body.appendChild(modal);
    }
  
    paragraph(title, info) {
      const p = document.createElement("p");
      p.innerHTML = `<strong>${title}</strong>: ${info}`;
      return p;
    }
  
    picture(info) {
      const pic = document.createElement("img");
      pic.src = "images/" + info;
      return pic;
    }
}

const trees = [];
trees.push(new Tree("Oak", "Deciduous", "30 ft", 20, "oak.jpg", "Park"));
trees.push(new Tree("Pine", "Coniferous", "40 ft", 25, "pine.jpg", "Forest"));
trees.push(new Tree("Maple", "Deciduous", "25 ft", 18, "maple.jpg", "Garden"));
trees.push(new Tree("Palm", "Palm Tree", "20 ft", 15, "palm.jpg", "Beach"));

trees.forEach((tree) => {
  document.getElementById("tree-list").append(tree.section);
});
