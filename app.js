// Maximize/minimiяe the screen
var x = document.getElementById("btn-open-container");
var calcWidth = document.getElementById('calculator-container');

document.querySelector('#close-btn').onclick = function myFunction() {
    if (x.style.display === "flex") {
      trans()
      x.style.display = "none";
      calcWidth.style.width = "340px";
    } 
  };

  document.querySelector('#open-btn').onclick = function myFunction() {
    if (x.style.display === "none") {
      trans()
      x.style.display = "flex";
      calcWidth.style.width = "600px";
    }
  };


// Change of theme
var checkbox = document.querySelector('input[name=theme]');

checkbox.addEventListener('change', function() {
  if(this.checked) {
      trans()
      document.documentElement.setAttribute('data-theme', 'dark')
  } else {
      trans()
      document.documentElement.setAttribute('data-theme', 'light')
  }
});

let trans = () => {
  document.documentElement.classList.add('transition');
  window.setTimeout(() => {
      document.documentElement.classList.remove('transition')
  }, 1000)
};
