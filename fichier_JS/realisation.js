var position = 1;
Go_Slide(position);

function Go_Slide(position) {
  var i;
  var slide = document.getElementsByClassName("Contenu_Slide");
  var point = document.getElementsByClassName("point");
  for (i = 0; i < slide.length; i++) {
      slide[i].style.display = "none";
  }
  for (i = 0; i < point.length; i++) {
      point[i].className = point[i].className.replace(" active", "");
  }
  slide[position-1].style.display = "block";
  point[position-1].className += " active";
}

function Go_Web() {
  document.getElementById("Site_TPE").style.display = "block";
  document.getElementById("img_TPE").style.opacity = "0.1";
}

function Not_Go_Web() {
  document.getElementById("Site_TPE").style.display = "none";
  document.getElementById("img_TPE").style.opacity = "1";
}
