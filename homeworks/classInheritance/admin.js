import User from './user.js';

class Admin extends User {
  users = [];
  constructor(name, pass) {
    super(name, 'admin', pass);
    this.users = [];
  }

  addUser(user) {
    console.log(user);
    if (this.isLoggedIn) {
      console.log(this.isLoggedIn);
      if (user instanceof User) {
        this.users.push(user);
        console.log(`${user.name} added successfully!`);
      } else {
        console.log('Invalid user object!');
      }
    } else {
      console.log('You need to log in first!');
    }
  }

  removeUser(userName) {
    if (this.isLoggedIn) {
      const userIndex = this.users.findIndex((user) => user.name === userName);
      if (userIndex !== -1) {
        this.users.splice(userIndex, 1);
        console.log(`${userName} removed successfully!`);
      } else {
        console.log(`${userName} not found!`);
      }
    } else {
      console.log('You need to log in first!');
    }
  }

  changeUserRole(userName, newRole) {
    if (this.isLoggedIn) {
      const user = this.users.find((user) => user.name === userName);
      if (user) {
        user.role = newRole;
        console.log(`${userName}'s role changed to ${newRole} successfully!`);
      } else {
        console.log(`${userName} not found!`);
      }
    } else {
      console.log('You need to log in first!');
    }
  }

  getAllUsers() {
    if (this.isLoggedIn) {
      return this.users.map((user) => user.name);
    } else {
      console.log('You need to log in first!');
      return [];
    }
  }

  removeAllUsers() {
    if (this.isLoggedIn) {
      this.users = [];
      console.log('All users removed successfully!');
    } else {
      console.log('You need to log in first!');
    }
  }
}

export default Admin;
