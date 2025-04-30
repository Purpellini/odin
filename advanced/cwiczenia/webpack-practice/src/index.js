// index.js
import "./styles.css";
import { greeting } from "./greeting.js";

console.log(greeting);

import odinImage from "./monkey.png";
   
const image = document.createElement("img");
image.src = odinImage;
   
document.body.appendChild(image);