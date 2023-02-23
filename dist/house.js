"use strict";
class House {
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
const house = new House('Middle-earth', 5);
house.showAddress();
const houseCopy = { street: 'Героїчна', nomer: 5, showAddress: house.showAddress };
houseCopy.showAddress();
house.addTenant('Anton');
house.addTenant('Nikita');
house.showTenants();
//# sourceMappingURL=house.js.map