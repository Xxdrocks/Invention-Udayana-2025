//Permainan daya ingat

document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('click', () => {
    card.classList.toggle('flip');
  });
});


//Bagaimana Perasaan Teman Saat ini

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = 380;

const tags = ["Malu", "Cemas", "Sedih", "Senang", "Marah", "Bosan", "Pusing", "Takut"];
const colors = ["#E366B4", "#ED9A3B", "#5998D0", "#F3CB3D", "#E14646", "#7C75D4", "#7FC057", "#BF87D9"];
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
  this.color = colors[tags.indexOf(text)];
  this.dragging = false;
  this.angle = (Math.random() - 0.5) * 0.2; 

  ctx.font = "bold 20px Poppins";
  const textMetrics = ctx.measureText(text);
  const paddingX = 50;
  const paddingY = 15;

  this.width = textMetrics.width + paddingX * 2;
  this.height = 20 + paddingY * 2;
}

  draw() {
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.roundRect(this.x, this.y, this.width, this.height, 20);
    ctx.fill();
    ctx.fillStyle = "#f0f4ff";
    ctx.font = "bold 25px Poppins";
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

      canvas.style.background = p.color;

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


