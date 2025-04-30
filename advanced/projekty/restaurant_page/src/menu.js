export { RenderMenu };

function RenderMenu(){
const content = document.querySelector(".content-wrapper");
content.innerHTML = "";

const navbox = document.createElement("div");
navbox.classList.add("content-nav", "box-nav");

const titleBox1 = document.createElement("div");
titleBox1.classList.add("title-box");
const titleBox2 = document.createElement("div");
titleBox2.classList.add("title-box");

const menuBox1 = document.createElement("div");
menuBox1.classList.add("menu-box", "box");
const menuBox2 = document.createElement("div");
menuBox2.classList.add("menu-box", "box");
const menuBox3 = document.createElement("div");
menuBox3.classList.add("menu-box", "box");
const menuBox4 = document.createElement("div");
menuBox4.classList.add("menu-box", "box");

const dishName1 = document.createElement("p");
dishName1.classList.add("dish-name");
const dishName2 = document.createElement("p");
dishName2.classList.add("dish-name");
const dishName3 = document.createElement("p");
dishName3.classList.add("dish-name");
const dishName4 = document.createElement("p");
dishName4.classList.add("dish-name");

const dishPrice1 = document.createElement("p");
dishPrice1.classList.add("dish-price"); 
const dishPrice2 = document.createElement("p");
dishPrice2.classList.add("dish-price");
const dishPrice3 = document.createElement("p");
dishPrice3.classList.add("dish-price");
const dishPrice4 = document.createElement("p");

const dishImg1 = document.createElement("div");
dishImg1.classList.add("dish-img");
const dishImg2 = document.createElement("div");
dishImg2.classList.add("dish-img");
const dishImg3 = document.createElement("div");
dishImg3.classList.add("dish-img");
const dishImg4 = document.createElement("div");
dishImg4.classList.add("dish-img");

const dishDescription1 = document.createElement("p");
dishDescription1.classList.add("dish-desc");
const dishDescription2 = document.createElement("p");
dishDescription2.classList.add("dish-desc");
const dishDescription3 = document.createElement("p");
dishDescription3.classList.add("dish-desc");
const dishDescription4 = document.createElement("p");
dishDescription4.classList.add("dish-desc");
navbox.textContent = "Menu";
titleBox1.textContent = "Beverages";
titleBox2.textContent = "Main Dishes";

dishName1.textContent = "Honey tea";
dishName2.textContent = "Beary Tea";
dishName3.textContent = "Pancakes";
dishName4.textContent = "French Toast";

dishDescription1.textContent = "A warm, sweet tea made with the highest quality honey and a bit of lemon to start your day off right!";
dishDescription2.textContent = "A comforting, almost filling, tea that is infused with the flavors of several kinds of berries. Best served cold, but can be served hot on request.";
dishDescription3.textContent="A stack of homemade buttermilk pancakes, served with our locally sourced maple syrup.";
dishDescription4.textContent="Two slices of the best french toast you will ever eat, served with our locally sourced maple syrup.";

dishPrice1.textContent = "$2";
dishPrice2.textContent = "$3";
dishPrice3.textContent = "$4";
dishPrice4.textContent = "$5";

content.append(navbox, titleBox1, menuBox1, menuBox2,titleBox2, menuBox3, menuBox4);
menuBox1.append(dishName1, dishDescription1, dishPrice1,dishImg1);
menuBox2.append(dishName2, dishDescription2, dishPrice2,dishImg2);
menuBox3.append(dishName3, dishDescription3, dishPrice3,dishImg3);
menuBox4.append(dishName4, dishDescription4, dishPrice4,dishImg4);

}