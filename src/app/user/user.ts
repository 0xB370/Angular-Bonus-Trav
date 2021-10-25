export class User {
    constructor(
      public username: string,
      public password: string,
      public repeatPassword: string,
    ) {  }
}

export class   LoginUser {
  constructor(
    public username: string,
    public password: string
  ) {  }
}