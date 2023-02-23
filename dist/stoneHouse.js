"use strict";
class Housess {
    constructor(street, nomer) {
        this.street = street;
        this.nomer = nomer;
        this.tenants = [];
    }
    showAddress() {
        console.log('Address: ' + this.street + " " + this.nomer);
    }
    addTenant(tenant) {
        this.tenants.push(tenant);
    }
    showTenants() {
        console.log(this.tenants);
    }
}
class StoneHouse extends Housess {
    constructor(street, generalTenant) {
        super(street, 5);
        this.chargeOfTheHouse = generalTenant;
        this.addTenant(generalTenant);
    }
    showTenants() {
        console.log('General: ' + this.chargeOfTheHouse);
        super.showTenants();
    }
}
const stoneHouse = new StoneHouse('Героїчна', 'Max');
stoneHouse.addTenant('Dmytro');
stoneHouse.addTenant('Lena');
stoneHouse.showTenants();
stoneHouse.showAddress();
//# sourceMappingURL=stoneHouse.js.map