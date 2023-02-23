class House {
    private tenants: string[]=[]

  constructor (private readonly street: string, private readonly nomer: number) {}
    
     showAddress () {
    console.log('Address: ' + this.street + " " + this.nomer);
    }

    public addTenant (tenant: string) {
    this.tenants.push(tenant);
  }

  public showTenants () {
    console.log(this.tenants);
  }
}

const house = new House('Middle-earth', 5);
house.showAddress();
// console.log(house)

const houseCopy = { street: 'Героїчна', nomer: 5, showAddress: house.showAddress };
houseCopy.showAddress();

house.addTenant('Anton');
house.addTenant('Nikita');
house.showTenants();
// console.log(house.tenants[1])