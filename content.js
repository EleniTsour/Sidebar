// Ensure the content script runs when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function() {
    const circle = document.createElement("div");
    circle.id = "draggable-circle";
    document.body.appendChild(circle);
  
    // Set initial position
    circle.style.position = "fixed";
    circle.style.bottom = "20px";
    circle.style.right = "20px";
  
    // Make the circle draggable
    let isDragging = false;
    let offsetX, offsetY;
  
    circle.addEventListener("mousedown", function(e) {
      isDragging = true;
      offsetX = e.clientX - circle.offsetLeft;
      offsetY = e.clientY - circle.offsetTop;
      circle.style.cursor = "grabbing";
    });
  
    document.addEventListener("mousemove", function(e) {
      if (isDragging) {
        circle.style.left = e.clientX - offsetX + "px";
        circle.style.top = e.clientY - offsetY + "px";
      }
    });
  
    document.addEventListener("mouseup", function() {
      isDragging = false;
      circle.style.cursor = "grab";
    });
  });
  