// selectarea tag-urilor de html in JS

// const surpriseButton = document.getElementById("surprise-button");
// const surpriseButton = document.getElementsByTagName("button")[0];
const surpriseButton = document.getElementById("surprise-button");
console.log(surpriseButton);

// PAS2 modificarea HTML-ului din JS
function modifySurpriseImage() {
  const surpriseImage = document.getElementById("surprise-image");
  surpriseImage.innerHTML =
    '<img src = "https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp" width = 200>';
}

// PAS3 Reactionam la evenimentele produse in browser
surpriseButton.addEventListener("click", modifySurpriseImage);
