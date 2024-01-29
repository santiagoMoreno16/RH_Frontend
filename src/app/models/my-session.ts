export class MySession {
  public id: string;
  public email: string;

  constructor(
    _id: string,
    ema: string,
  ) {
    this.id = _id;
    this.email = ema;
  }
}
