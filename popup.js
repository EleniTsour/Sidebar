document.addEventListener('DOMContentLoaded', function () {
    const draggable = document.getElementById('draggable');
    const expandBtn = document.getElementById('expand-btn');
  
    // Toggle expand and collapse
    expandBtn.addEventListener('click', function () {
      draggable.classList.toggle('sidebar-expanded');
    });
  
    // Make draggable
    let isDragging = false;
    let offsetX, offsetY;
  
    draggable.addEventListener('mousedown', function (e) {
      isDragging = true;
      offsetX = e.clientX - draggable.getBoundingClientRect().left;
      offsetY = e.clientY - draggable.getBoundingClientRect().top;
      document.body.style.cursor = 'grabbing';
    });
  
    document.addEventListener('mousemove', function (e) {
      if (isDragging) {
        draggable.style.left = `${e.clientX - offsetX}px`;
        draggable.style.top = `${e.clientY - offsetY}px`;
        draggable.style.bottom = 'auto';
        draggable.style.right = 'auto';
      }
    });
  
    document.addEventListener('mouseup', function () {
      isDragging = false;
      document.body.style.cursor = 'default';
    });
  });
  