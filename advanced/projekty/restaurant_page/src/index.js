

import "./style.css";

import { RenderContact } from "./contact";
import { RenderMenu } from "./menu";
import { RenderHome } from "./home";

RenderHome();

const contact=document.querySelector("#contact");
const menu=document.querySelector("#menu");
const home=document.querySelector("#home");

contact.addEventListener("click", RenderContact)
menu.addEventListener("click", RenderMenu)
home.addEventListener("click", RenderHome)