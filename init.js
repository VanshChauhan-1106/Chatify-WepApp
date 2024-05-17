const mongoose = require("mongoose");
const Chat = require("./models/chat.js");

mongoose.connect("mongodb+srv://vanshchauhan1106:wCMyLCwOqBJQLWkE@chating-app0.aeefyat.mongodb.net/?retryWrites=true&w=majority&appName=chating-app0")
.then(() => {
    console.log("Mongodb Connection Successfull!");
})
.catch((err) => {
    console.log(err);
});

let chats = [
    {
        from: "Alice",
        to: "Bob",
        msg: "Hey",
        created_at: new Date()
    },
    {
        from: "Chris",
        to: "David",
        msg: "Good morning!",
        created_at: new Date()
    },
    {
        from: "Emma",
        to: "Frank",
        msg: "How are you?",
        created_at: new Date()
    },
    {
        from: "George",
        to: "Hannah",
        msg: "Nice to meet you",
        created_at: new Date()
    },
    {
        from: "Isaac",
        to: "Jessica",
        msg: "See you later",
        created_at: new Date()
    },
    {
        from: "Kevin",
        to: "Lily",
        msg: "Take care",
        created_at: new Date()
    },
    {
        from: "Mary",
        to: "Nick",
        msg: "What's up?",
        created_at: new Date()
    },
    {
        from: "Olivia",
        to: "Peter",
        msg: "Hi there",
        created_at: new Date()
    },
    {
        from: "Quinn",
        to: "Rachel",
        msg: "Howdy",
        created_at: new Date()
    },
    {
        from: "Sarah",
        to: "Tom",
        msg: "Good evening",
        created_at: new Date()
    },
    {
        from: "Uma",
        to: "Victor",
        msg: "Hey buddy",
        created_at: new Date()
    },
    {
        from: "Wendy",
        to: "Xavier",
        msg: "Nice day, isn't it?",
        created_at: new Date()
    },
    {
        from: "Yasmine",
        to: "Zack",
        msg: "Hola",
        created_at: new Date()
    },
    {
        from: "David",
        to: "Eva",
        msg: "Bonjour",
        created_at: new Date()
    },
    {
        from: "Fiona",
        to: "George",
        msg: "Goodbye",
        created_at: new Date()
    },
    {
        from: "Hugo",
        to: "Isla",
        msg: "Later!",
        created_at: new Date()
    },
    {
        from: "Jenny",
        to: "Kevin",
        msg: "See ya",
        created_at: new Date()
    },
    {
        from: "Liam",
        to: "Mia",
        msg: "Ciao",
        created_at: new Date()
    },
    {
        from: "Natalie",
        to: "Oscar",
        msg: "Bye for now",
        created_at: new Date()
    },
    {
        from: "Patrick",
        to: "Quinn",
        msg: "Hey friend",
        created_at: new Date()
    },
    {
        from: "Rachel",
        to: "Sarah",
        msg: "Hey there",
        created_at: new Date()
    },
    {
        from: "Sam",
        to: "Tara",
        msg: "How's it going?",
        created_at: new Date()
    },
    {
        from: "Tyler",
        to: "Una",
        msg: "Sup",
        created_at: new Date()
    },
    {
        from: "Vanessa",
        to: "William",
        msg: "Greetings",
        created_at: new Date()
    }
];

Chat.insertMany(chats);

// let newChat = new Chat({
//     from: "Vansh",
//     to: "Ridam",
//     msg: "Hello",
//     created_at: "2020-05-18T14:10:30Z"
// });
// 
// newChat.save().then((res) => {
//     console.log(res);
// })
// .catch((err) => {
//     console.log(err);
// });