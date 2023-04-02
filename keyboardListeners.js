window.addEventListener('keydown', function (e) {
    playerRocket.setMoving(e.code, true);
});

window.addEventListener('keyup', function (e) {
    playerRocket.setMoving(e.code, false);
});
