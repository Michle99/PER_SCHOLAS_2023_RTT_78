// Caching DOM Elements
const cList = document.getElementById("commentList");
const cInput = document.getElementById("commentInput");
const cBtn = document.getElementById("addCommentBtn");


function addComment(e) {
// Trim the input value to remove leading and trailing spaces
  const inputValue = cInput.value.trim();
  if (inputValue === "") return;
  const newLI = document.createElement("li");
  newLI.textContent = inputValue;
  cList.appendChild(newLI);
  cInput.value = "";
}

cBtn.addEventListener("click", addComment);