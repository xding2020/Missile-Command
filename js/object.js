// Ground
class Ground {
    constructor() {
        this.ground = new THREE.Group();
        addCube(this.ground, -1000, 0, -100, 2000, 10, 200, 0xe2aa58);
        this.ground.position.x = 0;
        this.ground.position.y = -320;
        this.ground.position.z = 0;
        // Add to scene
        scene.add(this.ground);
    }
}

// Buildings
class Road {
    constructor() {
        this.road = new THREE.Group();
        // Main body
        addCube(this.road, -1000, 0, -20, 2000, 0, 30, 0x444444);
        addCube(this.road, -1000, 0, -20, 2000, 0, 3, 0xEEEEEE);
        addCube(this.road, -1000, 0, 10, 2000, 0, 3, 0xEEEEEE);
        this.road.position.x = 0;
        this.road.position.y = -320;
        this.road.position.z = -20;
        // Add to scene
        scene.add(this.road);
    }
}


// Building
class Building {
    constructor(x) {
        this.building = new THREE.Object3D();
        // Main body
        addCube(this.building, 0, 30, -40, 140, 30, 50, 0x76e280);
        addCube(this.building, 0, 40, -40, 50, 10, 50, 0x2e00d6);
        addCube(this.building, 0, 50, -40, 50, 10, 50, 0xdd4b5c);
        addCube(this.building, 0, 60, -40, 50, 10, 50, 0x2e00d6);
        addCube(this.building, 0, 70, -40, 50, 10, 50, 0xdd4b5c);
        addCube(this.building, 0, 80, -40, 50, 10, 50, 0x2e00d6);
        addCube(this.building, 0, 100, -40, 50, 20, 50, 0xdd4b5c);
        for (var i = 0; i < 10; i++) {
            addCubeCenter(this.building, 25, 100 + 5 * i, -15, 50 - 5 * i, 5, 50 - 5 * i, 0xb8fcf2);
        }

        addCube(this.building, 90, 40, -40, 50, 10, 50, 0x287a4d);
        addCube(this.building, 90, 50, -40, 50, 10, 50, 0xEEEEEE);
        addCube(this.building, 90, 60, -40, 50, 10, 50, 0x287a4d);
        addCube(this.building, 90, 70, -40, 50, 10, 50, 0xEEEEEE);
        for (var i = 0; i < 10; i++) {
            addCubeCenter(this.building, 115, 70 + 5 * i, -15, 50 - 5 * i, 5, 50 - 5 * i, 0xb8fcf2);
        }
        // Door
        addCube(this.building, 40, 10, 10, 40, 10, 2, 0xb8fcf2);

        this.building.position.x = x;
        this.building.position.y = -320;
        this.building.position.z = -50;

    }
}



// City: combination of ground, buildings and etc.
class City {
    constructor() {
        this.buildings = new THREE.Group();
        new Ground();
        new Road();
        this.buildings.add(new Building(-440).building);
        this.buildings.add(new Building(-240).building);
        this.buildings.add(new Building(-40).building);
        this.buildings.add(new Building(160).building);
        this.buildings.add(new Building(360).building);
        scene.add(this.buildings);
    }
}


// Cursor
class Cursor {
    constructor() {
        this.cursor = new THREE.Object3D();
        addCube(this.cursor, 1, 0, 0, 2, 1, 1, 0xffffff);
        addCube(this.cursor, -2, 0, 0, 2, 1, 1, 0xffffff);
        addCube(this.cursor, 0, 2, 0, 1, 2, 1, 0xffffff);
        addCube(this.cursor, 0, -1, 0, 1, 2, 1, 0xffffff);
        this.cursor.scale.set(6, 6, 0.1);
        scene.add(this.cursor);
    }

    // Set position
    setPosition(x, y, z) {
        this.cursor.position.x = x;
        this.cursor.position.y = y;
        this.cursor.position.z = z;
    }
}

// Mothership: is able to generate and manage missiles
class Mothership {

    constructor() {
        // Mothership object
        this.mothership = buildNyanCat(20, 1, 1);
        this.mothership.position.x = 440;
        this.mothership.position.y = 350;
        this.mothership.position.z = -50;
        this.mothership.scale.set(6, 6, 10);
        // Prepare missiles array
        this.missiles = new THREE.Group();
        this.prepareMissiles(5);
        this.prepareShips(1);
        this.speed = 1;
        // Add to scene
        scene.add(this.mothership);
        scene.add(this.missiles);
    }

    // Create missiles
    prepareMissiles(missileNum) {
        for (var i = 0; i < missileNum; i++) {
            this.missiles.add(new BadMissile((Math.random() * 20 - 10) * 45, 330, -50 + Math.random() * 2).missile);
        }
    }

    // Create spaceships
    prepareShips(shipNum) {
        for (var i = 0; i < shipNum; i++) {
            this.missiles.add(new Spaceship(-400, 200, -50).missile);
        }
    }

    moveMissiles() {
        for (var i in this.missiles.children) {
            var missile = this.missiles.children[i];
            missile.translateX(this.speed);
            if (missile.position.x > 600) {
                missile.position.x = 598;
                missile.rotateZ(Math.PI);
            } else if (missile.position.x < -600) {
                missile.position.x = -598;
                missile.rotateZ(Math.PI);
            }
            if (missile.position.y < -320) {
                this.missiles.remove(missile);
            }
            for (var l in city.buildings.children) {
                var building = city.buildings.children[l];
                if (missile.position.distanceTo(building.position) < 100) {
                    this.missiles.remove(missile);
                    city.buildings.remove(building);
                    boomSound.play();
                }
            }
            for (var j in missileSender.missiles.children) {
                var defendingMissile = missileSender.missiles.children[j];
                if (missile.position.distanceTo(defendingMissile.position) < 30) {
                    this.missiles.remove(missile);
                    missileSender.missiles.remove(defendingMissile);
                    boomSound.play();
                }
            }
        }
    }

}


// Nyan cat missile
class BadMissile {

    constructor(x, y, z) {
        // BadMissile body
        this.missile = buildNyanCat(60, 2, 0.5);
        this.setPosition(x, y, z);
        this.missile.scale.set(1, 1, 1);
        // Generate a random direction
        this.direction = new THREE.Vector3((Math.random() * 20 - 10) * 50 - x, -320 - y, 0).normalize();
        // Rotate to the direction
        this.missile.rotateZ(-this.direction.angleTo(new THREE.Vector3(1, 0, 0)));
        // Init speed
        this.speed = 1;
    }

    // Set position
    setPosition(x, y, z) {
        this.setPositionX(x);
        this.setPositionY(y);
        this.setPositionZ(z);
    }
    // Set position x
    setPositionX(x) {
        this.missile.position.x = x;
    }
    // Set position y
    setPositionY(y) {
        this.missile.position.y = y;
    }
    // Set position z
    setPositionZ(z) {
        this.missile.position.z = z;
    }

}


// Nyan cat missile
class Spaceship {

    constructor(x, y, z) {
        // BadMissile body
        this.missile = buildNyanCat(0, 0, 0);
        this.setPosition(x, y, z);
        this.missile.scale.set(3, 3, 3);
        // Generate a random direction
        this.direction = new THREE.Vector3(1, 0, 0).normalize();
        // Rotate to the direction
        this.missile.rotateZ(-this.direction.angleTo(new THREE.Vector3(1, 0, 0)));
        // Init speed
        this.speed = 1;
    }

    // Set position
    setPosition(x, y, z) {
        this.setPositionX(x);
        this.setPositionY(y);
        this.setPositionZ(z);
    }
    // Set position x
    setPositionX(x) {
        this.missile.position.x = x;
    }
    // Set position y
    setPositionY(y) {
        this.missile.position.y = y;
    }
    // Set position z
    setPositionZ(z) {
        this.missile.position.z = z;
    }


}


// Nyan cat missile
class GoodMissile {

    constructor(target) {
        // GoodMissile body
        this.missile = buildBoomber();
        this.missile.position.x = 0;
        this.missile.position.y = -330;
        this.missile.position.z = -50;
        this.missile.scale.set(0.2, 0.2, 0.2);
        // Set target
        this.target = target;
        // Generate a random direction
        this.direction = new THREE.Vector3(target.x - this.missile.position.x, target.y - this.missile.position.y, 0).normalize();
        // Rotate to the direction
        this.missile.rotateZ(this.direction.angleTo(new THREE.Vector3(1, 0, 0)));
        // Init speed
        this.speed = 5;

    }

    // Move the missile by one speed unit
    move() {
        if (this.missile !== null) {
            this.missile.translateX(this.speed);
        }
    }
}


class MissileSender {
    constructor() {
        // GoodMissile body
        this.missileSender = new THREE.Object3D();;
        this.missileSender.position.x = 0;
        this.missileSender.position.y = -300;
        this.missileSender.position.z = -50;
        this.missileSender.scale.set(1, 1, 1);
        // Missiles array
        this.missiles = new THREE.Group();
        this.speed = 5;
        // Add to scene
        scene.add(this.missileSender);
        scene.add(this.missiles);
    }

    sendMissile(target) {
        this.missiles.add(new GoodMissile(target).missile);
    };

    moveMissiles() {
        for (var i in this.missiles.children) {
            var missile = this.missiles.children[i];
            missile.translateX(this.speed);
            if (missile.position.y > 350) {
                this.missiles.remove(missile);
            }
        }
    }

}

class Explosion {

    constructor() {
        this.star = new THREE.Object3D();
        var state = 4;
        switch (state) {
            case 0:
                addCube(this.star, 0, 0, 0, 1, 1, 1, 0xffffff);
                break;
            case 1:
                addCube(this.star, 1, 0, 0, 1, 1, 1, 0xffffff);
                addCube(this.star, -1, 0, 0, 1, 1, 1, 0xffffff);
                addCube(this.star, 0, 1, 0, 1, 1, 1, 0xffffff);
                addCube(this.star, 0, -1, 0, 1, 1, 1, 0xffffff);
                break;
            case 2:
                addCube(this.star, 1, 0, 0, 2, 1, 1, 0xffffff);
                addCube(this.star, -2, 0, 0, 2, 1, 1, 0xffffff);
                addCube(this.star, 0, 2, 0, 1, 2, 1, 0xffffff);
                addCube(this.star, 0, -1, 0, 1, 2, 1, 0xffffff);
                break;
            case 3:
                addCube(this.star, 0, 0, 0, 1, 1, 1, 0xffffff);
                addCube(this.star, 2, 0, 0, 2, 1, 1, 0xffffff);
                addCube(this.star, -3, 0, 0, 2, 1, 1, 0xffffff);
                addCube(this.star, 0, 3, 0, 1, 2, 1, 0xffffff);
                addCube(this.star, 0, -2, 0, 1, 2, 1, 0xffffff);
                break;
            case 4:
                addCube(this.star, 0, 3, 0, 1, 1, 1, 0xffffff);
                addCube(this.star, 2, 2, 0, 1, 1, 1, 0xffffff);
                addCube(this.star, 3, 0, 0, 1, 1, 1, 0xffffff);
                addCube(this.star, 2, -2, 0, 1, 1, 1, 0xffffff);
                addCube(this.star, 0, -3, 0, 1, 1, 1, 0xffffff);
                addCube(this.star, -2, -2, 0, 1, 1, 1, 0xffffff);
                addCube(this.star, -3, 0, 0, 1, 1, 1, 0xffffff);
                addCube(this.star, -2, 2, 0, 1, 1, 1, 0xffffff);
                break;
            case 5:
                addCube(this.star, 2, 0, 0, 1, 1, 1, 0xffffff);
                addCube(this.star, -2, 0, 0, 1, 1, 1, 0xffffff);
                addCube(this.star, 0, 2, 0, 1, 1, 1, 0xffffff);
                addCube(this.star, 0, -2, 0, 1, 1, 1, 0xffffff);
                break;
        }

        this.star.scale.set(6, 6, 10);
        scene.add(this.star);
    }
}

