import { createHome } from "./home.js";
import { generateEvents } from "./eventListener";
import './style.css';

let container = document.querySelector("#container");

createHome();
generateEvents();
