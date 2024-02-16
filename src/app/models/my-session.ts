export class MySession {
  public id: string;
  public email: string;
  public access: string;

  constructor(
    _id: string,
    ema: string,
    acc: string
  ) {
    this.id = _id;
    this.email = ema;
    this.access = acc;
  }
}
