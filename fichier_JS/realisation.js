var position = 1;
Go_Slide(position);

function Go_Slide(position) {
  var i;
  var slide = document.getElementsByClassName("description_project");
  var point = document.getElementsByClassName("title_project");
  for (i = 0; i < slide.length; i++) {
      slide[i].style.display = "none";
  }
  for (i = 0; i < point.length; i++) {
      point[i].className = point[i].className.replace(" visible", "");
  }
  slide[position-1].style.display = "block";
  point[position-1].className += " visible";
}
