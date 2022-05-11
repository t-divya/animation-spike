const canvas = document.getElementById('canvas');
const c = canvas.getContext('2d');
for (let i = 0; i < 6; i++) {
    for (let j = 0; j < 6; j++) {
        c.fillStyle = `rgb(
          ${Math.floor(Math.random() * 255 - 10.5 * i)},
          ${Math.floor(Math.random() * 255 - 20.5 * j)},
          0)`;
        c.fillRect(j * 25, i * 25, 25, 25);
    }
}

const circleCanvas = document.getElementById("circleCanvas");
const circleContext = circleCanvas.getContext("2d");


circleContext.beginPath();
// crclecontext.arc(x,y,r,startangle,endangle)
circleContext.arc(150, 50, 40, 0, 50 * Math.PI);
circleContext.stroke();


