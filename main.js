const blogHeader = document.getElementById("blog-header");
const header = document.getElementById("header");
const rightCont = document.getElementById("right");
const article = document.getElementById("article");
const article2 = document.getElementById("article2");
const article3 = document.getElementById("article3");
const article4 = document.getElementById("article4");
const para = document.getElementById("para");
const btn = document.getElementById("btn")
const countnum = document.getElementById("count")

blogHeader.classList.remove("blog-header");
blogHeader.classList.add("dark-theme");

header.textContent = "FemCodeAfrica";

rightCont.classList.remove("right-container");
rightCont.classList.add("right-container-update");

article.textContent = "FemCodeAfrica Blog Sponsored By Frontend Team";
para.textContent = "Welcome to femcodeafrica blog site, happy to see you here";

article2.textContent = "Hello Team"
article3.textContent = "Welcome to this blog post"
article4.textContent = "Random Article"

btn.addEventListener("click", () => {
    countnum.textContent = 100 * 200;
})

/* Creating HTML Elements */
document.createElement('div');
document.createElement('p')
document.createElement('custom')

let div = document.createElement("div");
div.textContent = "I am a new div from Javascript"
div.style.backgroundColor = "red";
div.id = "custom_id";

document.body.appendChild(div)