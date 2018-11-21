const path = require("path");
const fs = require("fs");
//const ramda = require("ramda")
var dbData = undefined;
var db = () =>
  new Promise(resolve => {
    return dbData
      ? resolve(dbData)
      : resolve(
          dbConnect()
            .then(JSON.parse)
            .then(data => {
              dbData = data;
              return dbData;
            })
        );
  });

function dbConnect() {
  return new Promise((resolve, reject) => {
    fs.readFile("./server/data.json", "utf8", (err, data) =>
      err ? reject(err) : resolve(data)
    );
  });
}

const getUser = userId =>
  db()
    .then(data => data.find(user => user.user === userId))
    .then(user => (user ? user : Promise.reject("user not found")));

const getUserTodo = userId => getUser(userId).then(user => user.todo);

const addUserTodo = (userId, todoItem) =>
  getUser(userId).then(user => {
    user.todo.push(todoItem);
    return user;
  });

const deleteUserTodo = (userId, item) =>
  getUser(userId).then(user => {
    user.todo = user.todo.filter(todoItem => todoItem.id != item.id);
    return user;
  });

module.exports = {
  getUserTodo,
  addUserTodo,
  deleteUserTodo,
  db
};
