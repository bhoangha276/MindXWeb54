const fs = require('fs'); // xử lý file

// CRUD => files
const addUser = async (user) => {
  try {
    const stringUsers = await fs
    .promises.readFile('users.json', { encoding: 'utf-8' });

    const users = JSON.parse(stringUsers);
    const newUsers = [
    ...users,
    { id: users.length + 1, ...user }
    ];
    await fs.promises.writeFile('users.json', JSON.stringify(newUsers));
  } catch (err) {
    console.log(err);
  }
}
// addUser({ username: 'Ha Hoang', password: '1234'});

const readUsers = async () => {
  const stringUsers = await fs.promises.readFile("users.json", { encoding: "utf-8" });
  const users = JSON.parse(stringUsers);
  console.log(users);
}
// readUsers();


const readUser = async (id) => {
  const stringUsers = await fs.promises.readFile("users.json", { encoding: "utf-8" });
  const users = JSON.parse(stringUsers);
  const value = users.find(user => user.id === id);
  console.log(value);
}
// readUser(2);



const updateUser = async (id, ...dataUpdate) => {
  const stringUsers = await fs.promises.readFile("users.json", { encoding: "utf-8" });
  const users = JSON.parse(stringUsers);
  const value = users.findIndex(user => user.id === id);
  if (value < 0) {
    return console.log(`[ERROR] Not found user with id: ${id}`);
  }
  if (dataUpdate.length == 0) {
    return console.log(`[ERROR] Invalid Information.`);
  }
  const newData = {
    id: id,
    username: dataUpdate[0] ?? users[value].username,
    password: dataUpdate[1] ?? users[value].password,
  };

  if (dataUpdate[0]) {
    users.splice(value, 1, newData);
  }
  await fs.promises.writeFile("users.json", JSON.stringify(users));
}
// updateUser(1,'ha','ha');

const deleteUser = async (id) => {
  const stringUsers = await fs.promises.readFile("users.json", { encoding: "utf-8" });
  const users = JSON.parse(stringUsers);
  const value = users.findIndex((user) => user.id === id);
  if (value < 0) {
    return console.log(`[ERROR] Not found user with id: ${id}`);
  }
  users.splice(value, 1);
  await fs.promises.writeFile("users.json", JSON.stringify(users));
}
// deleteUser(15);
module.exports = {addUser,readUsers,readUser,updateUser,deleteUser};