export class SessionModel {
    public email: string;
    public password: string;
    public access: string;
  
    constructor(email: string, pass: string, acc: string) {
      this.email = email;
      this.password = pass;
      this.access = acc;
    }
  }