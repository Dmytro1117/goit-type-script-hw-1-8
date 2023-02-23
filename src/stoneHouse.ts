class Housess {
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

class StoneHouse extends Housess  {
  private chargeOfTheHouse: string; // Головний в будинку

  constructor (street: string, generalTenant: string) {
    super(street, 5); // Виклик батьківського конструктора

    // Додаємо власника квартири
    this.chargeOfTheHouse = generalTenant;
    this.addTenant(generalTenant);
  }

  public showTenants () {
    console.log('General: ' + this.chargeOfTheHouse);

    // Запускаємо батьківський метод showTenants();
    super.showTenants();
  }
}

const stoneHouse = new StoneHouse('Героїчна', 'Max');

stoneHouse.addTenant('Dmytro');
stoneHouse.addTenant('Lena');

stoneHouse.showTenants();
stoneHouse.showAddress();