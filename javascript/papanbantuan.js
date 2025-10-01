// Kebutuhan Harian Start
const pilihKondisi = document.getElementById('pilihKondisi');
const inputBox = document.getElementById('inputBox');
let draggedItem = null;

// Fungsi untuk menambahkan event listener ke semua gambar
function initializeDragAndDrop() {
  const images = document.querySelectorAll('#pilihKondisi img');
  
  images.forEach(img => {
    img.setAttribute('draggable', 'true');
    
    img.addEventListener('dragstart', (e) => {
      draggedItem = img;
      img.classList.add('dragging');
      img.style.opacity = '0.5';
    });
    
    img.addEventListener('dragend', (e) => {
      draggedItem = null;
      img.classList.remove('dragging');
      img.style.opacity = '1';
    });
  });
}

[pilihKondisi, inputBox].forEach(board => {
  board.addEventListener('dragover', (e) => {
    e.preventDefault();
    board.style.backgroundColor = board === inputBox ? '#2d5a8a' : '#7ab5f0';
  });
  
  board.addEventListener('dragleave', (e) => {
    board.style.backgroundColor = board === inputBox ? '#346CA3' : '#8EC3F7';
  });
  
  board.addEventListener('drop', (e) => {
    e.preventDefault();
    board.style.backgroundColor = board === inputBox ? '#346CA3' : '#8EC3F7';
    
    if (draggedItem) {
      board.appendChild(draggedItem);
    }
  });
});

document.addEventListener('DOMContentLoaded', initializeDragAndDrop);

// Kebutuhan Harian End