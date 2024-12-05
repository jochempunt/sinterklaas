// Selecting elements
const form = document.getElementById("research-form");
const loadingContainer = document.getElementById("loading-container");
const poemContainer = document.getElementById("poem-container");
const poemOutput = document.getElementById("poem-output");
const referenceSection = document.querySelector(".reference");

// Poem content
const poemLines = [
  "In the quantum realm of thought you shine, \n",
  "Decoding knowledge line by line \n ",
  "Your research sparks a brilliant mind \n",
  "Happy Birthday  best of !",
  "PhD warrior, data's great ,",
  "Illuminating research's .",
  "Another year of genius ,",
  "Your insights reshape the world! 🎓🔬"
];


// if local storaage "verified" is not set, redirect to login page
if (!localStorage.getItem("verified")) {
  window.location.href = "index.html";
}


// Add form submit event listener
form.addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent form from refreshing the page
  const queryInput = document.getElementById("query-input").value;

  if (queryInput.trim() === "") {
    alert("Please enter a query!");
    return;
  }

  // Show loading animation and hide others
  loadingContainer.classList.remove("hidden");
  poemContainer.classList.add("hidden");
  referenceSection.classList.add("hidden");
  poemOutput.innerHTML = ""; // Clear previous content

  // Simulate a 5-second loading period
  setTimeout(() => {
    loadingContainer.classList.add("hidden"); // Hide loading
    poemContainer.classList.remove("hidden"); // Show the poem

    // Combine poem lines into one string and split by words
    const poemWords = poemLines.join(" \n").split(" ");
    let index = 0;

    // Display words one by one
    const interval = setInterval(() => {
      if (index < poemWords.length) {
        if (poemWords[index] === "\n") {
          poemOutput.innerHTML += "<br>";
        } else {
          poemOutput.innerHTML += poemWords[index] + " ";
        }
        index++;
      } else {
        clearInterval(interval); // Stop when done
        referenceSection.classList.remove("hidden"); // Show references
      }
    }, 100); // Adjust speed as desired // Adjust speed as desired
  }, 1000);
});
