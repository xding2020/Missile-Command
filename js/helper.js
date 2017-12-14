
// A method that create cube and add it to object
function addCube(object, x, y, z, width, height, depth, c) {
    var material = new THREE.MeshLambertMaterial({ color: c });
    var geometry = new THREE.CubeGeometry(width, height, depth, 1, 1, 1);
    var mesh = new THREE.Mesh(geometry, material);
    mesh.position.x = x + (width / 2);
    mesh.position.y = y - (height / 2);
    mesh.position.z = z + (depth / 2);
    object.add(mesh);
}

function addCubeCenter(object, x, y, z, width, height, depth, c) {
    var material = new THREE.MeshLambertMaterial({ color: c });
    var geometry = new THREE.CubeGeometry(width, height, depth, 1, 1, 1);
    var mesh = new THREE.Mesh(geometry, material);
    mesh.position.x = x;
    mesh.position.y = y;
    mesh.position.z = z;
    object.add(mesh);
}


// A method that return a Nyan cat
function buildNyanCat(numRainChunks, rainbowWidthScale, rainbowHightScale) {
    var nyanCat = new THREE.Group();

    // Body
    var body = new THREE.Object3D();
    addCube(body, 0, -2, -1, 21, 14, 3, 0x222222);
    addCube(body, 1, -1, -1, 19, 16, 3, 0x222222);
    addCube(body, 2, 0, -1, 17, 18, 3, 0x222222);
    addCube(body, 1, -2, -1.5, 19, 14, 4, 0xffcc99);
    addCube(body, 2, -1, -1.5, 17, 16, 4, 0xffcc99);
    addCube(body, 2, -4, 2, 17, 10, .6, 0xff99ff);
    addCube(body, 3, -3, 2, 15, 12, .6, 0xff99ff);
    addCube(body, 4, -2, 2, 13, 14, .6, 0xff99ff);
    addCube(body, 4, -4, 2, 1, 1, .7, 0xff3399);
    addCube(body, 9, -3, 2, 1, 1, .7, 0xff3399);
    addCube(body, 12, -3, 2, 1, 1, .7, 0xff3399);
    addCube(body, 16, -5, 2, 1, 1, .7, 0xff3399);
    addCube(body, 8, -7, 2, 1, 1, .7, 0xff3399);
    addCube(body, 5, -9, 2, 1, 1, .7, 0xff3399);
    addCube(body, 9, -10, 2, 1, 1, .7, 0xff3399);
    addCube(body, 3, -11, 2, 1, 1, .7, 0xff3399);
    addCube(body, 7, -13, 2, 1, 1, .7, 0xff3399);
    addCube(body, 4, -14, 2, 1, 1, .7, 0xff3399);
    body.position.x = -10.5;
    body.position.y = 9;
    nyanCat.add(body);

    // Feet
    var feet = new THREE.Object3D();
    addCube(feet, 0, -2, .49, 3, 3, 1, 0x222222);
    addCube(feet, 1, -1, .49, 3, 3, 1, 0x222222);
    addCube(feet, 1, -2, -.01, 2, 2, 2, 0x999999);
    addCube(feet, 2, -1, -.01, 2, 2, 2, 0x999999);
    addCube(feet, 6, -2, -.5, 3, 3, 1, 0x222222);
    addCube(feet, 6, -2, -.5, 4, 2, 1, 0x222222);
    addCube(feet, 7, -2, -.99, 2, 2, 2, 0x999999);
    addCube(feet, 16, -3, .49, 3, 2, 1, 0x222222);
    addCube(feet, 15, -2, .49, 3, 2, 1, 0x222222);
    addCube(feet, 15, -2, -.01, 2, 1, 2, 0x999999);
    addCube(feet, 16, -3, -.01, 2, 1, 2, 0x999999);
    addCube(feet, 21, -3, -.5, 3, 2, 1, 0x222222);
    addCube(feet, 20, -2, -.5, 3, 2, 1, 0x222222);
    addCube(feet, 20, -2, -.99, 2, 1, 2, 0x999999);
    addCube(feet, 21, -3, -.99, 2, 1, 2, 0x999999);
    feet.position.x = -12.5;
    feet.position.y = -6;
    nyanCat.add(feet);

    // Tail
    var tail = new THREE.Object3D();
    addCube(tail, 0, 0, -.25, 4, 3, 1.5, 0x222222);
    addCube(tail, 1, -1, -.25, 4, 3, 1.5, 0x222222);
    addCube(tail, 2, -2, -.25, 4, 3, 1.5, 0x222222);
    addCube(tail, 3, -3, -.25, 4, 3, 1.5, 0x222222);
    addCube(tail, 1, -1, -.5, 2, 1, 2, 0x999999);
    addCube(tail, 2, -2, -.5, 2, 1, 2, 0x999999);
    addCube(tail, 3, -3, -.5, 2, 1, 2, 0x999999);
    addCube(tail, 4, -4, -.5, 2, 1, 2, 0x999999);
    tail.position.x = -16.5;
    tail.position.y = 2;
    nyanCat.add(tail);

    // Face
    var face = new THREE.Object3D();
    addCube(face, 2, -3, -3, 12, 9, 4, 0x222222);
    addCube(face, 0, -5, 0, 16, 5, 1, 0x222222);
    addCube(face, 1, -1, 0, 4, 10, 1, 0x222222);
    addCube(face, 11, -1, 0, 4, 10, 1, 0x222222);
    addCube(face, 3, -11, 0, 10, 2, 1, 0x222222);
    addCube(face, 2, 0, 0, 2, 2, 1, 0x222222);
    addCube(face, 4, -2, 0, 2, 2, 1, 0x222222);
    addCube(face, 12, 0, 0, 2, 2, 1, 0x222222);
    addCube(face, 10, -2, 0, 2, 2, 1, 0x222222);
    addCube(face, 1, -5, .5, 14, 5, 1, 0x999999);
    addCube(face, 3, -4, .5, 10, 8, 1, 0x999999);
    addCube(face, 2, -1, .5, 2, 10, 1, 0x999999);
    addCube(face, 12, -1, .5, 2, 10, 1, 0x999999);
    addCube(face, 4, -2, .5, 1, 2, 1, 0x999999);
    addCube(face, 5, -3, .5, 1, 1, 1, 0x999999);
    addCube(face, 11, -2, .5, 1, 2, 1, 0x999999);
    addCube(face, 10, -3, .5, 1, 1, 1, 0x999999);
    // Eyes
    addCube(face, 4, -6, .6, 2, 2, 1, 0x222222);
    addCube(face, 11, -6, .6, 2, 2, 1, 0x222222);
    addCube(face, 3.99, -5.99, .6, 1.01, 1.01, 1.01, 0xffffff);
    addCube(face, 10.99, -5.99, .6, 1.01, 1.01, 1.01, 0xffffff);
    // Mouth
    addCube(face, 5, -10, .6, 7, 1, 1, 0x222222);
    addCube(face, 5, -9, .6, 1, 2, 1, 0x222222);
    addCube(face, 8, -9, .6, 1, 2, 1, 0x222222);
    addCube(face, 11, -9, .6, 1, 2, 1, 0x222222);
    // Cheeks
    addCube(face, 2, -8, .6, 2, 2, .91, 0xff9999);
    addCube(face, 13, -8, .6, 2, 2, .91, 0xff9999);
    face.position.x = -.5;
    face.position.y = 4;
    face.position.z = 4;
    nyanCat.add(face);

    var rainbow = new THREE.Object3D();
    for (var c = 0; c < numRainChunks - 1; c++) {
        var yOffset = 8;
        if (c % 2 == 1) yOffset = 7;
        var xOffset = (-c * 8) - 16.5;
        addCube(rainbow, xOffset, yOffset, 0, 8, 3, 1, 0xff0000);
        addCube(rainbow, xOffset, yOffset - 3, 0, 8, 3, 1, 0xff9900);
        addCube(rainbow, xOffset, yOffset - 6, 0, 8, 3, 1, 0xffff00);
        addCube(rainbow, xOffset, yOffset - 9, 0, 8, 3, 1, 0x33ff00);
        addCube(rainbow, xOffset, yOffset - 12, 0, 8, 3, 1, 0x0099ff);
        addCube(rainbow, xOffset, yOffset - 15, 0, 8, 3, 1, 0x6633ff);
    }
    rainbow.scale.set(rainbowWidthScale, rainbowHightScale, 1);
    nyanCat.add(rainbow);

    return nyanCat;
}


function buildBoomber() {
    var boomber = new THREE.Group();

    // Body
    var body = new THREE.Object3D();
    var r = 50;
    for (var i = r; i >= 0; i -= 5) {
        var cos = Math.floor(Math.sqrt(r * r - i * i));
        addCubeCenter(body, 0, i, 0, cos * 2, 5, 5, 0x222222);
    }
    for (var i = -r; i < 0; i += 5) {
        var cos = Math.floor(Math.sqrt(r * r - i * i));
        addCubeCenter(body, 0, i, 0, cos * 2, 5, 5, 0x222222);
    }

    // Fuse
    addCubeCenter(body, 0, 55, 0, 12, 30, 12, 0x916835);
    addCubeCenter(body, 0, 64, 0, 12, 8, 12, 0xfc2c07);
    body.rotateZ(-Math.PI / 4);
    // Star
    var star = new THREE.Object3D();
    addCube(star, 0, 0, 0, 1, 1, 1, 0xef480b);
    addCube(star, 2, 0, 0, 2, 1, 1, 0xef480b);
    addCube(star, -3, 0, 0, 2, 1, 1, 0xef480b);
    addCube(star, 0, 3, 0, 1, 2, 1, 0xef480b);
    addCube(star, 0, -2, 0, 1, 2, 1, 0xef480b);
    star.scale.set(8, 8, 10);
    star.rotateZ(-Math.PI / 4);
    star.position.x = 0;
    star.position.y = 70;
    star.position.z = 0;

    body.add(star);
    boomber.add(body);

    return boomber;
}

function buildCannon() {
    var cannon = new THREE.Group();

    return cannon;
}