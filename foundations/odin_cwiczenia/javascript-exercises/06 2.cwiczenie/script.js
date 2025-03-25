const container = document.querySelector(".container")

const p = document.createElement("p")
p.textContent = "Hey im red"
p.setAttribute("style"," color:red")
p.classList.add("para")
container.appendChild(p)

const h3 = document.createElement("h3")
h3.textContent="im blue h3"
h3.style.cssText="color:blue"
container.appendChild(h3)

const div = document.createElement("div")
div.style.cssText="border: 1px solid black; background-color:pink"
container.appendChild(div)

const h1 = document.createElement("h1")
h1.textContent="im in a div"
div.appendChild(h1)

const p2 = document.createElement("p")
p2.textContent = "me too"
div.appendChild(p2)