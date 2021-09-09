const myPop = document.getElementById('my-popup');

const popBtn = document.getElementById('submit-recipe');

var span = document.getElementsByClassName("close")[0];

popBtn.onclick = function() {
  myPop.style.display = "block";
}

span.onclick = function() {
  myPop.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == myPop) {
    myPop.style.display = "none";
  }
}
