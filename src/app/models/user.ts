export class User {
  public _id: string;
  public firstName: string;
  public lastName: string;
  public identificationType: string;
  public identificationNum: string;
  public phone: string;
  public role_id: string;
  public access_id: string;

  constructor(
    id: string,
    firstName: string,
    lastName: string,
    identificationType: string,
    identificationNum: string,
    phone: string,
    role_id: string,
    access_id: string,
  ) {
    this._id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.identificationType = identificationType;
    this.identificationNum = identificationNum;
    this.phone = phone;
    this.role_id = role_id;
    this.access_id= access_id;
  }
}
