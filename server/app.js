const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const uuid = require("uuid");
const ejs = require("ejs");
console.log("vinay");

const app = express();
app.set("view engine","ejs");
app.use(bodyParser.urlencoded({ extended: false }))
app.use((res,req,next)=>{console.log(req.body); next()})

app.use(express.static("client"))

app.listen(3000);

// ROUTES "/"
app.get("/", (req, res) => {
  // Get request to root
  // if user is logged in redirect to todo.html route
  // if user is not logged in redirect to login.html route
  //res.send("vinay");
  res.render(path.resolve("client/views/login"));
  
  
});

app.post("/login",(req,res)=>{
 // res.redirect("/home");
 console.log(req.body)
 res.redirect("/home");
})

app.get("/home",(req,res)=>{
  //res.render(path.resolve("client/views/home"),userTodo("user"))
  res.render(path.resolve("client/views/home"),{list: [{id: "a", desc:"vinay"}]})
  //check cookie for valid user
  //if invalid user redirect to login page
  //if valid user get todo list, then render home page
})

function test(res){
  setTimeout(()=>res.render(path.resolve("client/views/home"),userTodo("user")),1000);
}

function userTodo(user) {
  var todoList =[
    {id: 'a', desc: 'learn', done: true},
    {id: 'b', desc: 'Run vv', done: true}  
  ]


  return {list: todoList}
}