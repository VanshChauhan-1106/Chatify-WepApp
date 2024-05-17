const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const Chat = require("./models/chat.js");
const methodOverride = require("method-override");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({extended: true}));
app.use(methodOverride("_method"));

mongoose.connect("mongodb+srv://vanshchauhan1106:wCMyLCwOqBJQLWkE@chating-app0.aeefyat.mongodb.net/?retryWrites=true&w=majority&appName=chating-app0")
.then(() => {
    console.log("Mongodb Connection Successfull!");
})
.catch((err) => {
    console.log(err);
});

app.get("/", (req, res) => {
    res.send("THIS IS ROOT!");
});

//All Chats
app.get("/chats",async (req, res) => {
    let chats = await Chat.find();
    res.render("index.ejs", { chats });
});

//New Chat
app.get("/chats/new", (req, res) => {
    res.render("new.ejs");
});

app.post("/chats",async (req, res) => {
    let {from, to, msg} = req.body;
    let newChat = new Chat({
        from: from,
        msg: msg,
        to: to,
        created_at: new Date()
    });
    await newChat.save().then(res => {
        console.log(res);
    }).catch(err => {
        console.log(err);
    })
    res.redirect("chats");
});

//Edit Chat
app.get("/chats/:id/edit", async (req, res) => {
    let {id} = req.params;
    let chat = await Chat.findById(id);
    res.render("edit.ejs", {chat});
});

//Update Chat
app.put("/chats/:id",async (req, res) => {
    let {id} = req.params;
    let {msg : newMsg} = req.body;
    let updatedChat = await Chat.findByIdAndUpdate(id, {msg : newMsg}, {runValidators: true, new: true});
    console.log(updatedChat);
    res.redirect("/chats");
});

//Delete Chat
app.delete("/chats/:id", async (req, res) => {
    let {id} = req.params;
    let deletedChat = await Chat.findByIdAndDelete(id);
    console.log(deletedChat);
    res.redirect("/chats");
});

app.listen(8080, () => {
    console.log("App is listening on port 8080!");
});