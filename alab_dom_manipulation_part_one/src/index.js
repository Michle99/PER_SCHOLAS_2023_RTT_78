

// 1. Select and cache the <main> element in a variable named mainEl.
let mainEl = document.querySelector("main");

// 2. Set the background color of mainEl to the value stored in the --main-bg CSS custom property.
mainEl.style.backgroundColor = "var(--main-bg)";

// 3 Set the content of mainEl to <h1>DOM Manipulation</h1>.
mainEl.innerHTML = "<h1>DOM Manipulation</h1>";

// 4. Add a class of flex-ctr to mainEl.
mainEl.classList.add("flex-ctr");

// Part 2: Creating a Menu Bar
//  Select and cache the nav element with id "top-menu"
let topMenuEl = document.getElementById("top-menu");
console.log("top-menu element: ", topMenuEl);

// Set the height of topMenuEl to be 100%.
topMenuEl.style.height = "100%";

// Set the background color of topMenuEl
topMenuEl.style.backgroundColor = "var(--top-menu-bg)";

// Add class to topMenuEl
topMenuEl.classList.add("flex-around");

// Part 3: adding menu buttons
// Menu data structure
var menuLinks = [
  { text: "about", href: "/about" },
  { text: "catalog", href: "/catalog" },
  { text: "orders", href: "/orders" },
  { text: "account", href: "/account" }
];

for (let i = 0; i < menuLinks.length; i++) {
  // Create a new <a> element
  let linkElement = document.createElement("a");

  // Set the href attribute with the value from the href property
  linkElement.setAttribute("href", menuLinks[i].href);

  // Set the content of the <a> element to the value from the text property
  linkElement.textContent = menuLinks[i].text;

  // Append the <a> element to the topMenuEl
  topMenuEl.appendChild(linkElement);
}
