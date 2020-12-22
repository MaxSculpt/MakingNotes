function animate() {
    ctx3.clearRect(0, 0, canvas.width, canvas.height);
    ctx2.drawImage(background_lvl2, 0, 0, canvas.width, canvas.height);
    frog.draw();
    frog.update();
    handleObstacles();
    ctx4.drawImage(grass, 0, 0, canvas.width, canvas.height);
    requestAnimationFrame(animate);

}

animate();

// event listeners
window.addEventListener('keydown', function (e) {
    keys = [];
    keys[ e.keyCode ] = true;
    if (keys[ 37 ] || keys[ 38 ] || keys[ 39 ] || keys[ 40 ]) {
        frog.jump();
    }
})

window.addEventListener('keyup', function (e) {
    delete keys[ e.keyCode ];
    frog.moving = false;
})

function scored() {
    score++;
    gameSpeed += 0.05;
    frog.x = canvas.width / 2 - this.width / 2;
    frog.y = canvas.height - this.height - 40;
}