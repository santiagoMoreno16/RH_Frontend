export class MySession {
  public id: string;
  public email: string;
  public city: string;
  public name: string;
  public lastName: string;

  constructor(
    _id: string,
    ema: string,
    city: string,
    nam: string,
    lastN: string
  ) {
    this.id = _id;
    this.email = ema;
    this.city = city;
    this.name = nam;
    this.lastName = lastN;
  }
}
