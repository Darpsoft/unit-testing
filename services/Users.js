export class UsersServices {
  constructor(state) {
    this.state = state;
  }

  getUsers() {
    return this.state;
  }
}
