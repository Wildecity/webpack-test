import pizza1 from "./p1.jpg";
import pizza2 from "./p2.jpg";
import pizza3 from "./p3.jpg";

export function createProducts() {
  // let container = document.querySelector("#container");
  let sources = [pizza1, pizza2, pizza3];
  let prodName = ["Pineapple Pizza", "Peperoni Pizza", "Neapolitan Pizza"];
  let images = [];
  for (let i = 0; i < sources.length; i++) {
    let imgContainer = document.createElement("div");
    let img = document.createElement("img");
    let title = document.createElement("h2");
    imgContainer.classList.add("imgContainer");
    img.classList.add("productImg");
    title.classList.add("productTitle");
    img.src = sources[i];
    title.textContent = prodName[i];
    imgContainer.appendChild(title);
    imgContainer.appendChild(img);
    images.push(imgContainer);
  }
  images.forEach((image) => {
    container.appendChild(image);
  });
}
