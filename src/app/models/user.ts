export class User {
  public _id: string;
  public firstName: string;
  public lastName: string;
  public identificationType: string;
  public identificationNum: string;
  public phone: string;

  constructor(
    id: string,
    firstName: string,
    lastName: string,
    identificationType: string,
    identificationNum: string,
    phone: string
  ) {
    this._id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.identificationType = identificationType;
    this.identificationNum = identificationNum;
    this.phone = phone;
  }
}
