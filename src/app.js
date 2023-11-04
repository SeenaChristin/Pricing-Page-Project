function changeMode(e) {
  let elements = document.getElementsByClassName("price");
  if (!e.srcElement.checked) {
    elements[0].innerHTML = "$199.99";

    elements[1].innerHTML = "$249.99";

    elements[2].innerHTML = "$399.99";
  } else {
    elements[0].innerHTML = "$19.99";

    elements[1].innerHTML = "$24.99";

    elements[2].innerHTML = "$39.99";
  }
}
