const canvas = document.getElementById('pinpon-canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth / 1.5 - (window.innerWidth % 10);
canvas.height = window.innerHeight - (window.innerHeight % 10);

const drawRect = (x, y, w, h, color) => {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, w, h);
};

const clearCanvas = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
};

function drawBg() {
    // BG
    drawRect(0, 0, canvas.width, canvas.height, 'black');

    // Top and bottom lines
    drawRect(0, 10, canvas.width, 20, 'white');
    drawRect(0, LOWER_LIMIT, canvas.width, 20, 'white');

    // Dash lines
    for (let i = 15; i < canvas.height - 20; i += 70) {
        drawRect(canvas.width / 2, i, 20, 55, 'white');
    }
}
