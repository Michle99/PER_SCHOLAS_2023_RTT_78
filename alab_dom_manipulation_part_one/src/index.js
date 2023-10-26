

// 1. Select and cache the <main> element in a variable named mainEl.
let mainEl = document.querySelector("main");

// 2. Set the background color of mainEl to the value stored in the --main-bg CSS custom property.
mainEl.style.backgroundColor = "var(--main-bg)";

// 3 Set the content of mainEl to <h1>DOM Manipulation</h1>.
mainEl.innerHTML = "<h1>DOM Manipulation</h1>";

// 4. Add a class of flex-ctr to mainEl.
mainEl.classList.add("flex-ctr");

// Part 2: Creating a Menu Bar
//  Select and cache the nav element with id "top-menu"
let topMenuEl = document.getElementById("top-menu");
console.log("top-menu element: ", topMenuEl);

// Set the height of topMenuEl to be 100%.
topMenuEl.style.height = "100%";

// Set the background color of topMenuEl
topMenuEl.style.backgroundColor = "var(--top-menu-bg)";

// Add class to topMenuEl
topMenuEl.classList.add("flex-around");

// Part 3: adding menu buttons
// Part 4: Updated MenuLinks
var menuLinks = [
  {text: 'about', href: '/about'},
  {text: 'catalog', href: '#', subLinks: [
    {text: 'all', href: '/catalog/all'},
    {text: 'top selling', href: '/catalog/top'},
    {text: 'search', href: '/catalog/search'},
  ]},
  {text: 'orders', href: '#' , subLinks: [
    {text: 'new', href: '/orders/new'},
    {text: 'pending', href: '/orders/pending'},
    {text: 'history', href: '/orders/history'},
  ]},
  {text: 'account', href: '#', subLinks: [
    {text: 'profile', href: '/account/profile'},
    {text: 'sign out', href: '/account/signout'},
  ]},
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

// Part 3: Creating the Submenu
const subMenuEl = document.getElementById("sub-menu");
console.log("sub-menu element: ", subMenuEl);
// Set the height of topMenuEl to be 100%.
subMenuEl.style.height = "100%";

// Set the background color of topMenuEl
subMenuEl.style.backgroundColor = "var(--sub-menu-bg)";

// Add class to topMenuEl
subMenuEl.classList.add("flex-around");

// Set the CSS position property of subMenuEl to the value of absolute.
subMenuEl.style.position = "absolute";
// Set the CSS top property of subMenuEl to the value of 0.
subMenuEl.style.top = "0";


// Part 4: Adding Menu Interaction
let topMenuLinks = topMenuEl.querySelectorAll("a");

// Attach a delegated 'click' event listener to topMenuEl.
topMenuEl.addEventListener("click", function(event) {
  // Call the event object's preventDefault() method.
  event.preventDefault();
  // Check if the element clicked was not an <a> element and return immediately.
  if(!event.target.matches("a")) {
    return;
  }
  // Cache the clicked <a> element.
  const clickedLink = event.target;
  // Loop through all <a> elements in  topMenuLinks.
  topMenuLinks.forEach((link) => {
    // Remove the already "acitve" class from all <a> elements.
    link.classList.remove("active");
  });

  // Toggle the "active" class on the clicked <a> element.
  clickedLink.classList.toggle("active");

  // Part 5: Adding Submenu Interaction
  // Find the corresponding menuLinks object for the clicked <a>.
  // const linkText = event.target.textContent.toLowerCase();
  const clickedLinkObject = menuLinks.find((linkObject) => linkObject.text.toLowerCase() === clickedLink.textContent);

  // Check if the clicked <a> element's "link" object has a subLinks property.
  if (clickedLinkObject && clickedLinkObject.subLinks) {
    // Set the CSS top property of subMenuEl to 100%.
    subMenuEl.style.top = "100%";
    // Build the submenu using the subLinks array from the clicked link.
    buildSubmenu(clickedLinkObject.subLinks);
  } else {
    // Set the CSS top property of subMenuEl to 0.
    subMenuEl.style.top = "0";
  }
   // Update the contents of mainEl within an <h1> to the 
  // contents of the <a> element clicked
  if (event.target.textContent === "about") {
    mainEl.innerHTML = "<h1>About</h1>";
  } else {
    mainEl.innerHTML = `<h1>${event.target.textContent}</h1>`;
  }

  // Log the content of the <a> to verify the handler is working.
  console.log("Clicked link text: ", event.target.textContent);
})


// Helper function to build the submenu
function buildSubmenu(subLinks) {
  // Clear the current contents of subMenuEl.
  subMenuEl.innerHTML = '';

  // Iterate over the subLinks array and create <a> elements for each link.
  for (let link of subLinks) {
    // Create an <a> element.
    let subLinkElement = document.createElement("a");

    // Add an href attribute to the <a> with the value from the href property of the link object.
    subLinkElement.setAttribute("href", link.href);

    // Set the content of the <a> element to the value from the text property of the link object.
    subLinkElement.textContent = link.text;

    // Append the new element to the subMenuEl.
    subMenuEl.appendChild(subLinkElement);
  }
}

// Attach a delegated 'click' event listener to subMenuEl.
subMenuEl.addEventListener("click", (event) => {
  // Call the event object's preventDefault() method.
  event.preventDefault();
  // Check if the element clicked was not an <a> element and return immediately.
  if(!event.target.matches("a")) {
    return;
  }

  subMenuEl.style.top = "0";
  // Loop through all <a> elements in  topMenuLinks.
  topMenuLinks.forEach((link) => {
    // Remove the already "acitve" class from all <a> elements.
    link.classList.remove("active");
  });

  // Update the contents of mainEl within an <h1> to the 
  // contents of the <a> element clicked within subMenuEl.
  // if (event.target.textContent === "ABOUT") {
  //   mainEl.innerHTML = "<h1>About</h1>";
  // } else {
  //   mainEl.innerHTML = "<h1>" + event.target.innerText + "</h1>";
  // }
  mainEl.innerHTML = `<h1>${event.target.textContent}</h1>`;

  // Log the content of the <a> to verify the handler is working.
  console.log("Clicked link text: ", event.target.textContent);
})