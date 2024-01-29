export class ResponseSessionModel {
    public token: string;
    public user: SessionResponseModel;
  
    constructor(tok: string, user: SessionResponseModel) {
      this.token = tok;
      this.user = user;
    }
  }

  export class SessionResponseModel {
    public id: string;
    public email: string;
  
    constructor(id: string, email: string) {
      this.id = id;
      this.email = email;
    }
  }