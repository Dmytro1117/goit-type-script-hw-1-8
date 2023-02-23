abstract class Plane {
  protected pilotInCabin = false;

  public sitInPlane () {
    this.pilotInCabin = true;
  }

  public abstract startEngine(action: 'enable' | 'disable'): string ;
}


class Maize extends Plane {
    public startEngine(action: 'enable' | 'disable') {
      if (action === 'enable') {
    return "enable";
  } else {
     return "disable";
  }
    // Запускаємо гвинти двигуна
   
  }
}

class Boeing extends Plane {
  public startEngine (): 'enable' | 'disable' {
    // Розігріваємо реактивні турбіни
    return "enable";
  }
}



const maize = new Maize()
const boeing = new Boeing()
maize.sitInPlane()
boeing.sitInPlane()
console.log(maize.startEngine("enable"))
console.log(boeing.startEngine())