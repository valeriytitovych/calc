document.querySelector('#close-btn').onclick = function myFunction() {
    var x = document.getElementById("btn-open-container");
    var calcWidth = document.getElementById('calculator-container');

    if (x.style.display === "none") {
      x.style.display = "flex";
      calcWidth.style.width = "600px";
    } else {
      x.style.display = "none";
      calcWidth.style.width = "340px";
    }
  }