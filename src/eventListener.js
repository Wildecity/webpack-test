import { createHome } from "./home.js";
import { createProducts } from "./products.js";
import { createAboutUs } from "./about.js";
import { emptyMain } from "./emptyMain.js";

export function generateEvents() {
  const home = document.querySelector("#home");
  const products = document.querySelector("#products");
  const aboutUS = document.querySelector("#aboutUS");

  home.addEventListener("click", () => {
    emptyMain();
    createHome();
  });
  products.addEventListener("click", () => {
    emptyMain();
    createProducts();
  });
  aboutUS.addEventListener("click", () => {
    emptyMain();
    createAboutUs();
  });
}
