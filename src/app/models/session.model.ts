export class SessionModel {
    public email: string;
    public password: string;
  
    constructor(email: string, pass: string) {
      this.email = email;
      this.password = pass;
    }
  }