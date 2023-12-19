class User {
  name = '';
  role = 'user' || 'admin';
  isLoggedIn = false;
  password = '';

  constructor(name, role, pass) {
    if (this.#checkValueString(name)) {
      this.name = name;
    }

    if (!this.#isValidRole(role)) {
      console.log('Invalid role! Role should be either "admin" or "user".');
      return;
    }
    this.role = role;

    if (this.#checkValueString(pass)) {
      this.password = pass;
    }
  }

  #checkValueString(value) {
    return value && typeof value === 'string' && value.length >= 2;
  }

  #isValidRole(role) {
    if (this.#checkValueString(role)) {
      return role === 'admin' || role === 'user';
    }
  }

  get name() {
    return this.name;
  }

  get role() {
    return this.role;
  }

  login(password) {
    if (this.isLoggedIn) {
      console.log('Already logged in!');
      return;
    }

    if (password === this.password) {
      this.isLoggedIn = true;
      console.log('Successfully logged in!');
    } else {
      console.log('Incorrect password!');
    }
  }

  logout() {
    if (!this.isLoggedIn) {
      console.log('Not logged in!');
      return;
    }

    this.isLoggedIn = false;
    console.log('Successfully logged out!');
  }

  changeName(newName) {
    if (this.isLoggedIn) {
      this.name = newName;
      console.log('Name changed successfully!');
    } else {
      console.log('You need to log in first!');
    }
  }

  changePassword(newPassword) {
    if (this.isLoggedIn) {
      this.password = newPassword;
      console.log('Password changed successfully!');
    } else {
      console.log('You need to log in first!');
    }
  }
}

export default User;
