import { createHome } from "./home.js";
import { generateEvents } from "./eventListener";
let container = document.querySelector("#container");
import './style.css'

createHome();
generateEvents();
