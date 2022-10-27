const { Client, GatewayIntentBits, EmbedBuilder, PermissionsBitField, Permissions} = require('discord.js');

const prefix = 'band ';

const client = new Client ({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

client.on("ready", () => {
    console.log("TedBot is online!")

    client.user.setActivity('Ted Simulator', { type: "PLAYING" });
})

client.on("messageCreate", (message) => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    //message array

    const messageArray = message.content.split(" ");
    const argument = messageArray.slice(1);
    const cmd = messageArray[0];

    //COMMANDS




//test command

var tabInp = ['hate band', 'fuck band', 'whats your favorite food'];
var tabAnsw = ['Unacceptable. I will be assigning more SmartMusic assignments.', 'Unacceptable.', 'My favorite Chinese food is Mongolian Beef'];
var content = message.content.split(' ');

if (tabHInp.indexOf(message.content) > -1  && message.isMentioned(client.user)){
    var row = Math.floor(Math.random() * tabAnsw.length);
    message.channel.sendMessage(tabAnsw[row]);
}


if(command === 'test') {
    message.channel.send("TedBot is working!")
}

if(command === 'fuck') {
    message.channel.send("Unacceptable.")
}

if(command === 'calendar') {
    message.channel.send("https://calendar.google.com/calendar/embed?src=tnewton@moreaucatholic.org&ctz=America/Los_Angeles&gsessionid=OK&pli=1")
}
})















client.login("MTAzNDU5MDM1NjgzNjE4ODI5Mg.GqUTRG.ZsEOuLKFnrEgoapfyHhmCa9-1NCtlm-xx91K2k");