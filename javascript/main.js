//Permainan daya ingat

document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('click', () => {
    card.classList.toggle('flip');
  });
});


//

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const tags = ["Energy", "Creativity", "Free-Thinker"];
const colors = ["#8ec3f7", "#efce1f"];
const particles = [];

let draggingTag = null;
let offsetX = 0;
let offsetY = 0;

class Tag {
  constructor(text) {
    this.text = text;
    this.x = Math.random() * canvas.width;
    this.y = -Math.random() * 300;
    this.vx = (Math.random() - 0.5) * 2;
    this.vy = 0;
    this.width = ctx.measureText(text).width + 60;
    this.height = 40;
    this.color = colors[Math.floor(Math.random() * colors.length)];
    this.dragging = false;
  }

  draw() {
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.roundRect(this.x, this.y, this.width, this.height, 20);
    ctx.fill();
    ctx.fillStyle = "#f0f4ff";
    ctx.font = "20px Poppins";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(this.text, this.x + this.width / 2, this.y + this.height / 2);
  }

  update() {
    if (!this.dragging) {
      this.vy += 0.3;
      this.y += this.vy;
      this.x += this.vx;

      if (this.y + this.height > canvas.height) {
        this.y = canvas.height - this.height;
        this.vy *= -0.4;
      }

      if (this.x <= 0 || this.x + this.width >= canvas.width) {
        this.vx *= -1;
      }
    }

    this.draw();
  }

  isMouseInside(mx, my) {
    return mx >= this.x && mx <= this.x + this.width && my >= this.y && my <= this.y + this.height;
  }
}

CanvasRenderingContext2D.prototype.roundRect = function (x, y, w, h, r) {
  this.beginPath();
  this.moveTo(x + r, y);
  this.lineTo(x + w - r, y);
  this.quadraticCurveTo(x + w, y, x + w, y + r);
  this.lineTo(x + w, y + h - r);
  this.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
  this.lineTo(x + r, y + h);
  this.quadraticCurveTo(x, y + h, x, y + h - r);
  this.lineTo(x, y + r);
  this.quadraticCurveTo(x, y, x + r, y);
  this.closePath();
};

function init() {
  for (let i = 0; i < tags.length; i++) {
    particles.push(new Tag(tags[i]));
  }
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let p of particles) {
    p.update();
  }
  requestAnimationFrame(animate);
}

canvas.addEventListener("mousedown", (e) => {
  const rect = canvas.getBoundingClientRect();
  const mx = e.clientX - rect.left;
  const my = e.clientY - rect.top;

  for (let p of particles) {
    if (p.isMouseInside(mx, my)) {
      draggingTag = p;
      p.dragging = true;
      offsetX = mx - p.x;
      offsetY = my - p.y;
      break;
    }
  }
});

canvas.addEventListener("mousemove", (e) => {
  if (draggingTag) {
    const rect = canvas.getBoundingClientRect();
    draggingTag.x = e.clientX - rect.left - offsetX;
    draggingTag.y = e.clientY - rect.top - offsetY;
    draggingTag.vx = 0;
    draggingTag.vy = 0;
  }
});

canvas.addEventListener("mouseup", () => {
  if (draggingTag) {
    draggingTag.dragging = false;
    draggingTag = null;
  }
});

init();
animate();


const carousel = document.getElementById('carousel');

let scrollAmount = 0;
const scrollStep = 1;
const speed = 20; // kecepatan scroll (ms)

function autoScroll() {
  scrollAmount += scrollStep;
  if (scrollAmount >= carousel.scrollWidth / 2) {
    scrollAmount = 0;
    carousel.scrollLeft = 0;
  } else {
    carousel.scrollLeft += scrollStep;
  }
  requestAnimationFrame(autoScroll);
}

autoScroll();

const handleMouseMove = e => {
  const {currentTarget: target } = e;

  const rect = target.getBoundingClientRect(),
   x = e.clientX - rect.left,
   y = e.clientY - rect.top;

   target.style.setProperty('--mouse-x', `${x}px`);
   target.style.setProperty('--mouse-y', `${y}px`);
}

for(const box of document.querySelectorAll('.box')) {
  box.onmousemove = e => handleMouseMove(e);
}
