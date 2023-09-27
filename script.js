const progressBar = document.getElementById("progress");
let progress = 0;
let id = setInterval(frame, 10);

function frame() {
  if (progress >= 80) {
    clearInterval(id);
  } else {
    progress++;
    progressBar.style.width = progress + "%";
    progressBar.innerHTML = progress + "%";
  }
}
function addPlaceholder() {
  var inputElement = document.getElementById("myInput");
  var placeholderText = "Enter your text here";
  inputElement.value = ""; // Reset input value
  inputElement.setAttribute("data-placeholder", placeholderText);
  inputElement.classList.add("placeholder");
}

function removePlaceholder() {
  var inputElement = document.getElementById("myInput");
  inputElement.value = "";
  inputElement.removeAttribute("data-placeholder");
  inputElement.classList.remove("placeholder");
}
