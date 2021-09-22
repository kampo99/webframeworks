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
    let status = 'INUSE';
    let gps = this.randomString(4);
    let mileage = this.getRandomInt(0, 10000);
    let batteryCharge = this.getRandomInt(5,100);


    // enum status{
    //   IDLE = 'IDLE',
    //   INUSE = 'INUSE',
    //   MAINTENANCE = 'MAINTENANCE'
    // }
    let scooter = new Scooter(id, tag, status, gps, mileage, batteryCharge);
    return scooter;
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
}
