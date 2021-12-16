import { createText } from "./createText";
import myImage from "./pizza-chef.jpg";

export function createHome() {
  //ya está declarado el container en el index.js, se pueden eliminar las referencias a main y usar la otra variable(container)
  const main = document.getElementById("container");
  const home = document.createElement("div");
  home.classList.add("home");

  const pizzaChef = document.createElement("img");
  pizzaChef.src = myImage;

  home.appendChild(createText("The best pizza place in town"));
  home.appendChild(pizzaChef);
  home.appendChild(createText("Don't miss out on us, we're pretty cool"));
  home.appendChild(createText("(unlike our pizzas)"));

  main.appendChild(home);
}
