"use strict";
class Hotel {
    constructor(key) {
        this.key = key;
        this.door = false;
        this.tenants = [];
    }
    comeIn(name) {
        if (!this.door) {
            throw new Error('Door is close');
        }
        this.tenants.push(name);
        console.log('Visitor inside');
        this.door = false;
    }
    showTenants() {
        console.log(this.tenants);
    }
}
class Key {
    constructor() {
        this.signature = Math.random();
    }
    getSignature() {
        return this.signature;
    }
}
class Visitor {
    constructor(password, name) {
        this.password = password;
        this.name = name;
    }
    getKey() {
        return this.password;
    }
    getName() {
        return this.name;
    }
}
class Room extends Hotel {
    openDoor(token) {
        if (token.getSignature() !== this.key.getSignature()) {
            console.log(token.getSignature());
            console.log(this.key.getSignature());
            throw new Error('Key to another door');
        }
        return this.door = true;
    }
}
const key = new Key();
const key2 = new Key();
const room = new Room(key);
const persons = new Visitor(key, "Max");
const persons1 = new Visitor(key, "Dmytro");
const persons2 = new Visitor(key, "Lena");
const persons3 = new Visitor(key2, "Valera");
room.openDoor(persons.getKey());
room.comeIn(persons);
room.openDoor(persons1.getKey());
room.comeIn(persons1);
room.openDoor(persons2.getKey());
room.comeIn(persons2);
room.showTenants();
room.openDoor(persons3.getKey());
room.comeIn(persons3);
//# sourceMappingURL=hw-4.js.map