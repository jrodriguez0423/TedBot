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

    if (arr.includes("hello"))
    {
        message.channel.send("Hello")
    }
    if (arr.includes("bruh")) //i hate bruh -> true
    {
        message.channel.send("bruh");
    }
    if (arr.includes("daddy"))
    {
        message.channel.send("Not appropiate.")
    }

    if (arr.includes("fuck"))
    {
        if(arr.includes("band"))
        {
            message.channel.send("Unacceptable.")
        }
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
    if (arr.includes(">bet"))
    {
        message.channel.send("How much do you want to bet over/under?")
        {
            if (arr.includes("1"))
            {
                message.channel.send("Bet 1 to 1 odds")
            }
            if (arr.includes("2"))
            {
                message.channel.send("Bet 2 to 1 odds")
            }
            if (arr.includes("3"))
            {
                message.channel.send("Bet 3 to 1 odds")
            }
            if (arr.includes("4"))
            {
                message.channel.send("Bet 4 to 1 odds")
            }
            if (arr.includes("5"))
            {
                message.channel.send("Bet 6 to 1 odds")
            }
            if (arr.includes("6"))
            {
                message.channel.send("Bet 6 to 1 odds")
            }
            if (arr.includes("7"))
            {
                message.channel.send("Bet 7 to 1 odds")
            }
            if (arr.includes("8"))
            {
                message.channel.send("Bet 8 to 1 odds")
            }
            if (arr.includes("9"))
            {
                message.channel.send("Bet 9 to 1 odds")
            }
            if (arr.includes("10"))
            {
                message.channel.send("Bet 10 to 1 odds")
            }
        }
    }
    if (arr.includes(">help"))
    {
        message.channel.send("Help yourself.")
        message.channel.send("Just kidding -")
        message.channel.send(">complain, >name")
    }

});

client.login("MTAzNDU5MDM1NjgzNjE4ODI5Mg.GqUTRG.ZsEOuLKFnrEgoapfyHhmCa9-1NCtlm-xx91K2k");
