// When mouse moves
function onMouseMove(event) {
    cursor.setPosition(event.clientX - window.innerWidth / 2, - event.clientY + window.innerHeight / 2, 0)
}
window.addEventListener('mousemove', onMouseMove, false);

// When mouse clicks
function onMousePressed(event) {
    missileSender.sendMissile(new THREE.Vector2(cursor.cursor.position.x, cursor.cursor.position.y));
}
window.addEventListener('click', onMousePressed, false);