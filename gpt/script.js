// Selecting elements
const form = document.getElementById("research-form");
const loadingContainer = document.getElementById("loading-container");
const poemContainer = document.getElementById("poem-container");
const poemOutput = document.getElementById("poem-output");
const referenceSection = document.querySelector(".reference");

const poemLines = [
  "Dear Xin, <br>",
  "It is for <span class='clickable' data-tooltip='Sinterklaas'>me</span> the first time I'm reading about you in  <span class='clickable' data-tooltip='my famous thick book were i have information about every person'>mijn dikke boek.</span><br>",
  "I hear you come from a place afar, that is not  <span class='clickable' data-tooltip='around the corner'>om de hoek.</span><br>",
  "Sint never has been to China before, so once you arrived Maastricht, he became aware of you.<br><br>",
  "I hear you are together with  <span class='clickable' data-tooltip='handsome young man'>Jochem</span>,<br>",
  "And before you only could meet him a few times,<br>",
  "But now since he lives closer, it's easier for you to see him kochem<br>",
  "And he hears he is so happy and lucky<br>",
  "To share with you laughter, liefde, and soms even rhymes<br><br>",
  "Now apart from that, you were quite busy this jaar,<br>",
  "Reading and studying, je doet het zo maar.<br>",
  "In the library, at home,  <span class='clickable' data-tooltip='it doesnt matter where'>het maakt niet uit waar.</span><br>",
  "Writing papers about rare cancers and patient data,<br>",
  "Arguing with professors, want <span class='clickable' data-tooltip='\"they know better\"'>'zij weten het beter'</span><br><br>",
  "You are even working on learning Dutch, although it is quite hard,<br>",
  "Pronouncing <span class='clickable' data-tooltip='Your duolingo stats are also quite impressive'>uil</span> is still tricky, but you're making it happen, with guard!<br> <br>",
  "And on the side you're learning about western anatomy terms,<br>",
  "About brain parts, bones, muscles, and nerves.<br>",
  "This is why Sint thought he might buy you a gift.<br>",
  "To help with your learning and give you a shift.<br>",
  "Now enjoy your time with your gifts and celebrate well.<br><br>",
  "Sint & G-Piet-T<br>" ,
  "<i>(this poem was completely handwritten by Sint, but spelling was checked by ChatGPT)<i>"
];

// Add form submit event listener
document.getElementById("research-form").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent form from refreshing the page
  const queryInput = document.getElementById("query-input").value;

  if (queryInput.trim() === "") {
    alert("Please enter a query!");
    return;
  }

  // Show loading animation and hide others
  document.getElementById("loading-container").classList.remove("hidden");
  document.getElementById("poem-container").classList.add("hidden");
  document.querySelector(".reference").classList.add("hidden");
  document.getElementById("poem-output").innerHTML = ""; // Clear previous content

  // Simulate a 5-second loading period
  setTimeout(() => {
    document.getElementById("loading-container").classList.add("hidden"); // Hide loading
    document.getElementById("poem-container").classList.remove("hidden"); // Show the poem

    // Insert the poem directly without splitting words
    let poemContent = poemLines.join(" "); // Combine lines into one string
    document.getElementById("poem-output").innerHTML = poemContent; // Insert HTML content

    // Display references after poem is shown
    document.querySelector(".reference").classList.remove("hidden"); // Show references
  }, 3000);
});