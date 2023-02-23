"use strict";
class Plane {
    constructor() {
        this.pilotInCabin = false;
    }
    sitInPlane() {
        this.pilotInCabin = true;
    }
}
class Maize extends Plane {
    startEngine(action) {
        if (action === 'enable') {
            return "enable";
        }
        else {
            return "disable";
        }
    }
}
class Boeing extends Plane {
    startEngine() {
        return "enable";
    }
}
const maize = new Maize();
const boeing = new Boeing();
maize.sitInPlane();
boeing.sitInPlane();
console.log(maize.startEngine("enable"));
console.log(boeing.startEngine());
//# sourceMappingURL=plane.js.map