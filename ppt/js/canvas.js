/* Chart Configuration */
const config01 = {
  type: 'scatter',
  data: {
	datasets: [{
	  label: 'hasil',
      data: [[1,50],[2,102],[3,151],[4,201],[5,253]],
      backgroundColor: 'rgb(0, 0, 132)'
    }]
  },
  options: {
    legend: {display: true,text: "Hasil Percobaan Hukum Ohm"},
    title: {display: true,text: "Hasil Percobaan Hukum Ohm"},
    scales: {x: {min: 0,max: 6,ticks: {stepSize: 1}}, y: {min: 0,max: 300,ticks: {stepSize: 50}, grid: { display: true}},
    }
  },
  plugins: []  
}

/* Chart Initialization */ 
const ctxch01 = document.getElementById('Chart01');
new Chart(ctxch01,config01);

/* Gerak Parabola */ 
const canvas = document.getElementById('Canvas01');
const ctxcv01 = canvas.getContext('2d');
canvas.width = window.innerWidth*0.5;
canvas.height = window.innerHeight*0.5;

let x = 50; // Initial x position
let y = canvas.height - 50; // Initial y position (from bottom)
let initialVelocity = 20; // m/s
let launchAngle = 30; // degrees
const gravity = 0.5; // Adjusted for canvas scale and framerate

let vx = initialVelocity * Math.cos(launchAngle * Math.PI / 180);
let vy = -initialVelocity * Math.sin(launchAngle * Math.PI / 180); // Negative for upward motion
let time = 0;

function update() {
    // Update position based on velocity and gravity
    x += vx;
    y += vy;
    vy += gravity; // Apply gravity to vertical velocity

    // Reset if out of bounds (optional)
    if (y > canvas.height) {
        x = 50;
        y = canvas.height - 50;
        time = 0;
        vx = initialVelocity * Math.cos(launchAngle * Math.PI / 180);
        vy = -initialVelocity * Math.sin(launchAngle * Math.PI / 180);
    }
}
function draw() {
    ctxcv01.clearRect(0, 0, canvas.width, canvas.height); // Clear canvas
    ctxcv01.beginPath();
    ctxcv01.arc(x, y, 10, 0, Math.PI * 2); // Draw projectile
    ctxcv01.fillStyle = 'blue';
    ctxcv01.fill();
    ctxcv01.closePath();
}
function animate() {
    update();
    draw();
    requestAnimationFrame(animate); // Loop the animation
}
animate(); // Start the animation