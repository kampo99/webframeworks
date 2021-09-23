export class Scooter {
  public id: number;
  public tag: string;
  public status: string;
  public gpsLocation: string;
  public mileage: number;
  public batteryCharge: number;


  constructor(id: number, tag: string, status: string, gpsLocation: string, mileage: number, batteryCharge: number) {
    this.id = id;
    this.tag = tag;
    this.status = status;
    this.gpsLocation = gpsLocation;
    this.mileage = mileage;
    this.batteryCharge = batteryCharge;
  }

  public static createSampleScooter(pId = 0): Scooter {
    let id = pId;
    let tag = this.randomString(8);
    let status = this.getEnum();
    let gps = this.gpsLocation();
    let mileage = this.getRandomInt(0, 10000);
    let batteryCharge = this.getRandomInt(5,100);


    let scooter = new Scooter(id, tag, status, gps, mileage, batteryCharge);
    return scooter;
  }


  private static getEnum(){
    let random = this.getRandomInt(1,3);
    if (random === 1){
      return ScooterStatus.IDLE;
    }
    if (random === 2){
      return ScooterStatus.INUSE;
    }
    if (random === 3){
      return ScooterStatus.MAINTENANCE;
    }
    return '';
  }

  private static getRandomInt(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  private static randomString(length: number) {
    var randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var result = '';
    for (var i = 0; i < length; i++) {
      result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
    }
    return result;
  }

  private static gpsLocation(){
    let latitude = this.getRandomInt(52000000, 53000000)/1000000;
    let longtitude = this.getRandomInt(4000000, 5000000)/1000000;
    let gps = latitude + "N, " + longtitude + "E";
    return gps;
  }


}

export enum ScooterStatus{
  IDLE = 'IDLE',
    INUSE = 'INUSE',
    MAINTENANCE = 'MAINTENANCE'
}


