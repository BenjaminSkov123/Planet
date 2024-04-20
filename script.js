function togglePopup(body) {
  var popupId = body + "-popup";
  var popup = document.getElementById(popupId);
  var overlay = document.getElementById("overlay");
  
  // Toggle display of pop-up and overlay
  if (popup.style.display === "none") {
      popup.style.display = "block";
      overlay.style.display = "block";
  } else {
      popup.style.display = "none";
      overlay.style.display = "none";
  }
}


