abstract class Hotel {
  protected door = false;
  private tenants: Visitor[] = [];
  constructor(protected key: Key) { }

  public comeIn(name: Visitor): void {
    if (!this.door) {
      throw new Error('Door is close');
    }

    this.tenants.push(name);
    console.log('Visitor inside');
    this.door = false
  }

  public showTenants() {
    console.log(this.tenants);
  }

  abstract openDoor(token: Key): boolean;
}


class Key {
  private signature: number;

  constructor() {
    this.signature = Math.random();
  }

  getSignature(): number {
    return this.signature;
  }
}

class Visitor {
  constructor(private password: Key, private name: string) { }
  getKey(): Key {
    return this.password;
  }
  getName(): string {
    return this.name;
  }
}

class Room extends Hotel {
  public openDoor(token: Key) {
    if (token.getSignature() !== this.key.getSignature()) {
      console.log(token.getSignature())
       console.log(this.key.getSignature())
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

// console.log(persons1)
// console.log(persons1.getName())
// console.log(persons1.getKey())
// console.log(key.getSignature())

room.openDoor(persons.getKey());
room.comeIn(persons);

room.openDoor(persons1.getKey());
room.comeIn(persons1);

room.openDoor(persons2.getKey());
room.comeIn(persons2);

room.showTenants();

room.openDoor(persons3.getKey());
room.comeIn(persons3);







