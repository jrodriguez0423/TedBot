const { Client, GatewayIntentBits, EmbedBuilder, PermissionsBitField, Permissions} = require('discord.js');

const prefix = '>';

const client = new Client ({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

client.on("ready", () => {
    console.log("TedBot is online!")
    const status = "Ted Simulator";
    client.user.setActivity(status, { type: 'PLAYING' });
})

client.on("messageCreate", (message) => {
    console.log(message);

    if (message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    //message array

    const messageArray = message.content.split(" ");
    const arguments = messageArray.slice(1);
    const cmd = messageArray[0];

    console.log(command, messageArray);

    //COMMANDS


    const arr = message.content.split(" ");

    arr.includes("") //boolean

    if (arr.includes("bruh")) //i hate bruh -> true
    {
        message.channel.send("bruh");
    }
    if (arr.includes("jojo")) 
    {
        message.channel.send("Jo. Jo. Are you here, Jo. Jo?")
    }
    if (arr.includes("crash"))
    {
        message.channel.send("How many chinks do you have?")
    }
    if (arr.includes("chink"))
    {
        message.channel.send("How many chinks do you have?")
    }
    if (arr.includes("tone"))
    {
        message.channel.send("Watch your intonation!!")
    }
    if (arr.includes("breakfast"))
    {
        message.channel.send("Do you guys not eat breakfast because you don’t want to, or because you wake up too late to eat?")
    }
    if (arr.includes("white"))
    {
        if (arr.includes("people"))
        {
            message.channel.send("SCARED WHITE MAN DISEASE!!")
        }
    }
    if (arr.includes(">complain"))
    {
        message.channel.send("I’m done complaining. Actually no, I love complaining.");
    }
    if (arr.includes(">name"))
    {
        message.channel.send("Theodore Newton.")
    }
    if (arr.includes(">help"))
    {
        message.channel.send("Help yourself.")
        message.channel.send("Just kidding -")
        message.channel.send(">complain, >name")
    }

});

client.login("MTAzNDU5MDM1NjgzNjE4ODI5Mg.GqUTRG.ZsEOuLKFnrEgoapfyHhmCa9-1NCtlm-xx91K2k");