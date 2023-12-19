import User from './user.js';
import Admin from './admin.js';

const newUser = new User('Petro', 'user', 'user123');

newUser.login('user123');
console.log(newUser);

newUser.logout();
console.log(newUser);

newUser.login('user123');
newUser.changeName('Alex');
console.log(newUser);

newUser.logout();
console.log(newUser);

newUser.changePassword('123');
console.log(newUser);

const newAdmin = new Admin('admin', '222');
console.log(newAdmin);

newAdmin.login('222');
console.log(newAdmin);

const user1 = new User('Rob', 'user', 'user1');
user1.login('user1');

newAdmin.addUser(user1);

newAdmin.getAllUsers();

newAdmin.changeUserRole('Rob', 'admin');

newAdmin.removeAllUsers();
