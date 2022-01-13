const Discord = require("discord.js")
const config = require("./../config.json")
const fs = require("fs");

const client = new Discord.Client();

client.on("message", async function(message) {
    // return if message is irrelevant
    if (message.author.bot) return;
    if (!message.content.toLowerCase().startsWith(config.PREFIX)) return;

    // get command data
    const commandBody = message.content.slice(config.PREFIX.length);
    const args = commandBody.split(" ");
    const command = args.shift().toLowerCase()

    // unsubscribe user from the service
    if (command === "subscribe") {
             
        // read json file
        let rawdata = fs.readFileSync('./src/data.json');
        let jsonData = JSON.parse(rawdata);

        if(jsonData[message.author.id] != null){
            return message.author.send("You are already subscribing, Fat Feck :)");
        }else{
            // save new user
            jsonData[message.author.id] = message.author;
            fs.writeFileSync('./src/data.json', JSON.stringify(jsonData));
            return message.author.send("You're now a subscriber to the daily message, Fat Feck :)");
        }
    }

    // unsubscribe user from the service
    if (command === "unsubscribe"){
        // read json file
        let rawdata = fs.readFileSync('./src/data.json');
        let jsonData = JSON.parse(rawdata);

        if(jsonData[message.author.id] != null){
            // delete user
            delete jsonData[message.author.id];
            console.log(jsonData);
            fs.writeFileSync('./src/data.json', JSON.stringify(jsonData));
            return message.author.send("You are not a subscriber to the daily message anymore, Fat Feck :(");
        }else{
            return message.author.send("You are not subscribing, Fat Feck :(");
        }
    }

    // manually send "Fat Feck" to the users
    if (command === "sendmanually"){
        if(message.author.tag === config.OWNER_TAG){
            sendMessageToUsers();
        }
    }
});

// send "Fat Feck" to the users
function sendMessageToUsers(){
    let rawdata = fs.readFileSync('./src/data.json');
    let jsonData = JSON.parse(rawdata);

    for(var user in jsonData){
        client.users.resolve(user).send("Fat Feck");
    }
}

function initializeMessageTimer() {
    client.setInterval(function () {
        sendMessageToUsers();
    }, 24*60*60*1000);
}

client.on("ready", async function(){
    initializeMessageTimer();
})

client.login(config.BOT_TOKEN);
