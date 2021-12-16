import { createHome } from "./home.js";
import { createProducts } from "./products.js";
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
}
