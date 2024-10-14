// Get the modal
var modal = document.getElementById("resumeModal");

// Get the button that opens the modal
var btn = document.getElementById("resumeLink");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

btn.onclick = function(event) {
    event.preventDefault();
    document.getElementById("resumeIframe").src = "Chidubem_Anekwuonye_Resume.pdf#toolbar=0";
    modal.style.display = "block";
}
span.onclick = function() {
    document.getElementById("resumeIframe").src = "";
    modal.style.display = "none";
}
window.onclick = function(event) {
if (event.target == modal) {
    modal.style.display = "none";
    document.getElementById("resumeIframe").src = "";
}
}


document.addEventListener("DOMContentLoaded", function() {
const quoteBank = [
    "Remember who you want to be, then work to be that person",
    "You miss 100% of the shots you don't take"
];




function changeQuote() {
const quoteElement = document.getElementById('quote');
quoteElement.style.opacity = 0;
    setTimeout(() => {
        quoteElement.textContent = quoteBank[currentIndex];
        quoteElement.style.opacity = 1;
        currentIndex = (currentIndex + 1) % quoteBank.length;
    }, 1000);
}

let currentIndex=Math.floor(Math.random()*quoteBank.length)

setInterval(changeQuote, 5000)});
