const Discord = require('discord.js')

var currentdate = new Date();
var currentdate = new Date(); 
var datetime = "" + currentdate.getDate() + "."
                + (currentdate.getMonth()+1)  + "." 
                + currentdate.getFullYear() + " um "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();



var bot = new Discord.Client()

bot.login("NTE4ODUyOTc3OTgxNzg0MDc5.DuW8LQ.rXdV53yHhs5Dbuyot2TSLqAmg_I")


//Bot-Einstellungen --> Wenn READY
bot.on('ready', () => {

bot.user.setActivity("Advent | ++info" ,{ type: 'WATCHING' });


    console.log(`Verbunden mit ${bot.user.username}`);
})



bot.on('message', (message) => {

    if(message.author.bot) return;
    if(message.channel.type === "dm") return;

    let prefix = "++"
        let messageArray = message.content.split(" ");
        let cmd = messageArray[0];
        let args = messageArray.slice(1);


    
  //  if(cmd === `${prefix}help` || cmd === `${prefix}h`) {
//        let RoleBeta = message.guild.roles.find(`name`, "Beta-Test")    
    //    if(!RoleBeta) return message.reply("Rolle nicht gefunden!")
    //    if(message.member.roles.has(RoleBeta.id)
    
  //  let warnchannel = message.guild.channels.find(`name`, "bestrafung");
   // if(!warnchannel) return message.channel.send("ERROR 404!")


   if(cmd === `${prefix}info` || cmd === `${prefix}i`) {


    message.channel.send(`**__:christmas_tree:Adventskalender__** \n
Wir präsentieren unseren Adventskalender!
Jeden Tag um 18:00 Uhr wird ein neues Türchen unseres Adventskalender geöffnet. Unter jedem Türchen versteckt sich eine kleine Aufgabe für euch. Sollte ihr diese Aufgabe beantworten können, erhöht sich eure Wahrscheinlichkeit am Weihnachtsgewinnspiel zu gewinnen.
    \n
__Benutzung__
In #adventskalender🎄 findet ihr die tägliche Aufgaben, (und die lange sie noch verfügbar ist) meist sind es Fragen, die ihr beantworten müsst. Zum Beispiel: __Welches Datum ist heute?__. Nun kann man in #commands oder im 》allgemein-chat✒ seine Antwort eingeben. Eure Antwort kann als Command oder als Textnachricht gesendet werden. Solbald man die richtige Antwort eingegeben hat, erhaltet ihr eine Nachricht vom Bot per PN!
\n
__Premium-Funktion__
Jedes Premium-Mitglied (YouTuber, Sportycus, VIP, Supreme, Schnitzel mit ♥️) hat die Möglichkeit den Befehl __**tipp [Türchen-Nummer]**__ zu nutzen, welches dem Spieler einen kleine Tipp für die Frage gibt. Jedoch würde diese Funktion bei schwierigen Aufgaben auch für alle Spieler freigeschalten.
\n
Wir wünschen auch eine schöne Vorweihnachtszeit.
Mit freundlichen Grüßen\n
\n
Mineklex und das Happy Sportschnitzel-Team`)

   }

   if(message.content === `1. Advent` || cmd === `${prefix}1.advent` || cmd === `${prefix}1.Advent` || message.content === `1. advent` || message.content === `1 Advent` || message.content === `1 advent` || message.content === `1advent` || message.content === `1Advent`) {

    message.delete()
    

    let infochannel = message.guild.channels.find(`name`, "lösung");
    let allge = message.guild.channels.find(`name`, "》allgemein-chat✒");
    
   if(!infochannel) return message.channel.send("ERROR 404! Channel nicht gefunden! Admin rufen!")
   if(!allge) return message.channel.send("ERROR 404! Channel nicht gefunden! Admin rufen!")

   allge.send(`🎄${message.author} hat das 2. Türchen erraten! Glückwunsch!`)



   
   let ed = new Discord.RichEmbed()
   .setColor("#00ff04")
   .setFooter(`Happy Sportschnitzel, © Mineklex`)
   .setDescription(`${message.author} __hat das 2. Türchen erraten!__`)

   infochannel.send(ed)

    let bicom = bot.user.displayAvatarURL;
    let em = new Discord.RichEmbed()
    .setAuthor("Adventskalender", bicom)
    .setColor("#00ff04")
    .setFooter(`Happy Sportschnitzel, © Mineklex`)
    .setTitle("🎄Adventskalender: **__Türchen 2__**")
    .setDescription(`Guten Tag,
     \n\n
    Richtig! :) __Das Wort ist **1. Advent!**__
    \n\n
    *Bitte verbreiten sie das Wort nicht! __Je öfter sie mitmachen, desto wahrscheinlich gewinnen sie beim Gewinnspiel__* \n
    

    Mit freundlichen Grüßen \n
    **Happy Sportschnitzel-Server**`)

    return message.author.send(em);

   }

   if(message.content === `5` || cmd === `${prefix}5`) {

    message.delete()
    

     let infochannel = message.guild.channels.find(`name`, "lösung");
     let allge = message.guild.channels.find(`name`, "》allgemein-chat✒");
     
    if(!infochannel) return message.channel.send("ERROR 404! Channel nicht gefunden! Admin rufen!")
    if(!allge) return message.channel.send("ERROR 404! Channel nicht gefunden! Admin rufen!")


    allge.send(`🎄${message.author} hat das 1. Türchen erraten! Glückwunsch!`)




    let ed = new Discord.RichEmbed()
    .setColor("#00ff04")
    .setFooter(`Happy Sportschnitzel, © Mineklex`)
    .setDescription(`${message.author} __hat das 1. Türchen erraten!__`)

    infochannel.send(ed)



    let bicom = bot.user.displayAvatarURL;
    let em = new Discord.RichEmbed()
    .setAuthor("Adventskalender", bicom)
    .setColor("#00ff04")
    .setFooter(`Happy Sportschnitzel, © Mineklex`)
    .setTitle("🎄Adventskalender: **__Türchen 1__**")
    .setDescription(`Guten Tag,
     \n\n
    Richtig! :) __Wir haben **5 Admins/Owner**__
    \n\n
    *Bitte verbreiten sie das Wort nicht! __Je öfter sie mitmachen, desto wahrscheinlich gewinnen sie beim Gewinnspiel__* \n
    

    Mit freundlichen Grüßen \n
    **Happy Sportschnitzel-Server**`)

    return message.author.send(em);

   }



   //
   if(cmd === `${prefix}tipp`) {



    let VIP = message.guild.roles.find(`name`, "VIP")
    let Youtuber = message.guild.roles.find(`name`, "YouTuber")
    let Supreme = message.guild.roles.find(`name`, "Supreme")
    let Schnitzel = message.guild.roles.find(`name`, "Schnitzel mit Herz")
    let UserR = message.guild.roles.find(`name`, "User-Rat")
    let Sportycus = message.guild.roles.find(`name`, "Sportycus")

    if(!VIP) return message.reply("VIP: Rolle nicht gefunden!")
    if(!Youtuber) return message.reply("Youtuber Rolle nicht gefunden!")
    if(!Supreme) return message.reply(" Supreme: Rolle nicht gefunden!")
    if(!Schnitzel) return message.reply("Schnitzel: Rolle nicht gefunden!")
    if(!UserR) return message.reply("UserR: Rolle nicht gefunden!")
    if(!Sportycus) return message.reply("Sportycus: Rolle nicht gefunden!")

    if(message.member.roles.has(VIP.id) || message.member.roles.has(Youtuber.id) || message.member.roles.has(Supreme.id) || message.member.roles.has(Schnitzel.id) || message.member.roles.has(UserR.id) || message.member.roles.has(Sportycus.id)) {


       if(args[0] == 1) {

        let bicom = bot.user.displayAvatarURL;
        let em = new Discord.RichEmbed()
        .setAuthor("Adventskalender", bicom)
        .setColor("#00ff04")
        .setFooter(`Happy Sportschnitzel, © Mineklex`)
        .setTitle("🎄Adventskalender: **__Türchen 1__**")
        .setDescription(`Okay. Hier ein Tipp für dich: \n
        __Schau mal in unseren *》teaminfos👥* Channel__`)

        message.author.send(em)

       } else

       if(args[0] == 2) {
        let bicom = bot.user.displayAvatarURL;
        let em = new Discord.RichEmbed()
        .setAuthor("Adventskalender", bicom)
        .setColor("#00ff04")
        .setFooter(`Happy Sportschnitzel, © Mineklex`)
        .setTitle("🎄Adventskalender: **__Türchen 2__**")
        .setDescription(`Okay. Hier ein Tipp für dich: \n
        __Es ist der 1. besondere Tag im Dezember__`)

        message.author.send(em)

        } else {
            message.channel.send("Benutzen Sie: `tipp [Türchennummer]`")
        }

    } else {
        message.channel.reply("Du hast leider keine Premium-Rechte!")
    }

}



});




