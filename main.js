const Discord = require('discord.js')
const fs = require('fs')
const ms = require("ms");


var currentdate = new Date();
var currentdate = new Date(); 
var datetime = "" + currentdate.getDate() + "."
                + (currentdate.getMonth()+1)  + "." 
                + currentdate.getFullYear() + " um "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();


const config = JSON.parse(fs.readFileSync('config.json','utf8'))

let Banumgehung = JSON.parse(fs.readFileSync('data/banumgehung.json', 'utf8'))
let Beleidigung_leicht = JSON.parse(fs.readFileSync('data/beleidigung_leicht.json', 'utf8'))
let Beleidigung_schwer = JSON.parse(fs.readFileSync('data/beleidigung_schwer.json', 'utf8'))
let Caps = JSON.parse(fs.readFileSync('data/caps.json', 'utf8'))
let Erwähnung = JSON.parse(fs.readFileSync('data/erwähnung.json', 'utf8'))
let Hasserfüllte_Inhalte = JSON.parse(fs.readFileSync('data/hasserfüllte_inhalte.json', 'utf8'))
let Pornografische_Inhalte = JSON.parse(fs.readFileSync('data/pornografische_inhalte.json', 'utf8'))
let Rassismus = JSON.parse(fs.readFileSync('data/rassismus.json', 'utf8'))
let Rufschädigung = JSON.parse(fs.readFileSync('data/rufschädigung.json', 'utf8'))
let Spamming = JSON.parse(fs.readFileSync('data/spamming.json', 'utf8'))
let Unangemessenes_Verhalten = JSON.parse(fs.readFileSync('data/unangemessenes_verhalten.json', 'utf8'))
let Unerlaubtes_Aufnehmen = JSON.parse(fs.readFileSync('data/unerlaubtes_aufnehmen.json', 'utf8'))
let Werbung_Erwärnung = JSON.parse(fs.readFileSync('data/werbung_erwärnung.json', 'utf8'))
let Werbung_Öffentlich = JSON.parse(fs.readFileSync('data/werbung_öffentlich.json', 'utf8'))
let Werbung_PN = JSON.parse(fs.readFileSync('data/werbung_pn.json', 'utf8'))


let NumberOfWarns = JSON.parse(fs.readFileSync('warns.json', 'utf8'))

let Gründe = "```Banumgehung - Beleidigung_leicht - Beleidigung_schwer - Caps - Erwähnung - Hasserfüllte_Inhalte - Pornografische_Inhalte - Rassismus - Rufschädigung - Spamming - Unangemessenes_Verhalten - Unerlaubtes_Aufnehmen - Werbung_Erwärnung - Werbung_Öffentlich - Werbung_PN```"
let Rechte = "Du bist nicht dafür berechtigt! Sollte dies ein Fehler sein wende dich an einen ADMINISTRATOR!"


var bot = new Discord.Client()

bot.login(config.token)


//Bot-Einstellungen --> Wenn READY
bot.on('ready', () => {

bot.user.setActivity("Mineklex.de | +help" ,{ type: 'WATCHING' });


    console.log(`Verbunden mit ${bot.user.username}`);
})



bot.on('message', (message) => {

    if(message.author.bot) return;
    if(message.channel.type === "dm") return;

    let prefix = config.prefix;
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);


    



    if(cmd === `${prefix}help` || cmd === `${prefix}h`) {
        let RoleBeta = message.guild.roles.find(`name`, "Beta-Test")
        let RoleSup = message.guild.roles.find(`name`, "Supporter")
        let RoleMod = message.guild.roles.find(`name`, "Moderator")
  if(!RoleBeta) return message.reply("Rolle nicht gefunden!")
  if(!RoleSup) return message.reply("Rolle nicht gefunden!")
  if(!RoleMod) return message.reply("Rolle nicht gefunden!")

  let Player = message.author;

        if(message.member.roles.has(RoleBeta.id) && message.member.roles.has(RoleSup.id) || message.member.roles.has(RoleMod.id) && message.member.roles.has(RoleBeta.id) || message.member.hasPermission("ADMINISTRATOR")) {

        let eingabe = args[0]; 
        let bicom = bot.user.displayAvatarURL;
        
        if(!eingabe) {

        let em = new Discord.RichEmbed()
        .setAuthor("Moderation-Bot by Mineklex", bicom)
        .setColor("#0086f5")
        .setFooter(`${datetime}, © Mineklex`)
        .setDescription("__Commands:__\n\n ```+help private/online - +h p/o``` `help` **Hiermit erhältest du alle Commands**" +
        "\n\n```+winfo - +warns - +wi``` `+winfo [Name]` **Hiermit erhältest du alle Infos über den Spieler**" +
        "\n\n```+mod* - *+warn -  +kick - +mute - +ban - +m``` `+mod [Name] [Grund]` **Hiermit führst du den Mod-Command aus**" +
        "\n\n```+del - +dreason - +dr``` :x:`+dr [Name] [Punkte] [Grund]` **Hiermit kannst Bestrafungen löschen**" +
        "\n\n```+mlist - +glist - +list - +l``` `+mlist` **Hiermit erhältest du eine Übersicht über alle Gründe**" +
        "\n\n```+remove-all - +remove - +ra``` `+remove-all [Name]` **Hiermit löscht man alle Daten eines Spielers**" +
        "\n\n ```+changelog -change - +cl ``` `+change` **Hiermit siehst du die neusten Änderungen**" + 
        "\n\n...");
        
    return message.channel.send(em);

    } else 
        if(eingabe === "online" || eingabe === "o") {

            let bicom = bot.user.displayAvatarURL;
            let em = new Discord.RichEmbed()
            .setAuthor("Moderation-Bot by Mineklex", bicom)
            .setColor("#0086f5")
            .setFooter(`${datetime}, © Mineklex`)
            .setDescription("__Commands:__\n\n ```+help private/online - +h p/o``` `help` **Hiermit erhältest du alle Commands**" +
            "\n\n```+winfo - +warns - +wi``` `+winfo [Name]` **Hiermit erhältest du alle Infos über den Spieler**" +
            "\n\n```+mod* - *+warn -  +kick - +mute - +ban - +m``` `+mod [Name] [Grund]` **Hiermit führst du den Mod-Command aus**" +
            "\n\n```+del - +dreason - +dr``` :x:`+dr [Name] [Punkte] [Grund]` **Hiermit kannst Bestrafungen löschen**" +
            "\n\n```+mlist - +glist - +list - +l``` `+mlist` **Hiermit erhältest du eine Übersicht über alle Gründe**" +
            "\n\n```+remove-all - +remove - +ra``` `+remove-all [Name]` **Hiermit löscht man alle Daten eines Spielers** \n\n ...");
            
        return message.channel.send(em);
    
        } else 
        if(eingabe === "privat" || eingabe === "p") {
            let bicom = bot.user.displayAvatarURL;
            Player = message.author;

            let emI = new Discord.RichEmbed()
            .setAuthor("Moderation-Bot by Mineklex", bicom)
            .setColor("#0086f5")
            .setFooter(`${datetime}, © Mineklex`)
            .setDescription("__Commands:__\n\n ```+help private/online - +h p/o``` `help` **Hiermit erhältest du alle Commands**" +
            "\n\n```+winfo - +warns - +wi``` `+winfo [Name]` **Hiermit erhältest du alle Infos über den Spieler**" +
            "\n\n```+mod* - *+warn -  +kick - +mute - +ban - +m``` `+mod [Name] [Grund]` **Hiermit führst du den Mod-Command aus**" +
            "\n\n```+del - +dreason - +dr``` :x:`+dr [Name] [Punkte] [Grund]` **Hiermit kannst Bestrafungen löschen**" +
            "\n\n```+mlist - +glist - +list - +l``` `+mlist` **Hiermit erhältest du eine Übersicht über alle Gründe**" +
            "\n\n```+remove-all - +remove - +ra``` `+remove-all [Name]` **Hiermit löscht man alle Daten eines Spielers** \n\n ...");
            
        return Player.send(emI)

        }

      
    } else {
        message.channel.send(Rechte)
    }

    }

    
    if(cmd === `${prefix}changelog` || cmd === `${prefix}change` || cmd === `${prefix}cl`) {

   return message.channel.send(config.version + "```" + config.change + "```");
        
    }



    if(cmd === `${prefix}remove-all` || cmd === `${prefix}remove` || cmd === `${prefix}ra`) {
        if(message.member.hasPermission("ADMINISTRATOR")) {

        let mPlayer = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]))
        if(!mPlayer) return message.channel.send("Nutze: `+remove-all [Name]` --> Hiermit löscht man alle Daten eines Spielers");


            //add GRUND


        if(message.member=== mPlayer) {

            message.channel.send("Dies funktioniert im Moment noch, da es ein Beta-Test ist. Jedoch wird das bald deaktiviert")
            }
        
        delete NumberOfWarns[mPlayer.id]
        delete Banumgehung[mPlayer.id]
        delete Beleidigung_leicht[mPlayer.id]
        delete  Beleidigung_schwer[mPlayer.id]
        delete  Caps[mPlayer.id]
        delete  Erwähnung[mPlayer.id]
        delete  Hasserfüllte_Inhalte[mPlayer.id]
        delete   Pornografische_Inhalte[mPlayer.id]
        delete   Rassismus[mPlayer.id]
        delete   Rufschädigung[mPlayer.id]
        delete    Spamming[mPlayer.id]
        delete    Unangemessenes_Verhalten[mPlayer.id]
        delete    Unerlaubtes_Aufnehmen[mPlayer.id]
        delete     Werbung_Erwärnung[mPlayer.id]
        delete       Werbung_Öffentlich[mPlayer.id]
        delete     Werbung_PN[mPlayer.id]

        


        fs.writeFileSync("warns.json",JSON.stringify(NumberOfWarns))
        fs.writeFileSync("data/banumgehung.json",JSON.stringify(Banumgehung))
        fs.writeFileSync("data/beleidigung_leicht.json",JSON.stringify(Beleidigung_leicht))
        fs.writeFileSync("data/beleidigung_schwer.json",JSON.stringify(Beleidigung_schwer))
        fs.writeFileSync("data/caps.json",JSON.stringify(Caps))
        fs.writeFileSync("data/erwähnung.json",JSON.stringify(Erwähnung))
        fs.writeFileSync("data/hasserfüllte_inhalte.json",JSON.stringify(Hasserfüllte_Inhalte))
        fs.writeFileSync("data/pornografische_inhalte.json",JSON.stringify(Pornografische_Inhalte))
        fs.writeFileSync("data/rassismus.json",JSON.stringify(Rassismus))
        fs.writeFileSync("data/rufschädigung.json",JSON.stringify(Rufschädigung))
        fs.writeFileSync("data/spamming.json",JSON.stringify(Spamming))
        fs.writeFileSync("data/unangemessenes_verhalten.json",JSON.stringify(Unangemessenes_Verhalten))
        fs.writeFileSync("data/unerlaubtes_aufnehmen.json",JSON.stringify(Unerlaubtes_Aufnehmen))
        fs.writeFileSync("data/werbung_erwärnung.json",JSON.stringify(Werbung_Erwärnung))
        fs.writeFileSync("data/werbung_öffentlich.json",JSON.stringify(Werbung_Öffentlich));
        fs.writeFileSync("data/werbung_pn.json",JSON.stringify(Werbung_PN));

        return message.channel.send(`Es wurde alles von ${mPlayer} gelöscht!`);




        
        } else {
            message.channel.send(Rechte)
        }
    }


    if(cmd === `${prefix}glist` || cmd === `${prefix}mlist` || cmd === `${prefix}list` || cmd === `${prefix}l`) {

        message.channel.send("__Verfügbare Gründe:__" + Gründe)
        message.author.send("__Verfügbare Gründe:__" + Gründe)

        return;

    }


    if(cmd === `${prefix}mod` || cmd === `${prefix}ban` || cmd === `${prefix}m` || cmd === `${prefix}mute` || cmd === `${prefix}kick` || cmd === `${prefix}warn`) {

        let RoleBeta = message.guild.roles.find(`name`, "Beta-Test")
        let RoleSup = message.guild.roles.find(`name`, "Supporter")
        let RoleMod = message.guild.roles.find(`name`, "Moderator")
  if(!RoleBeta) return message.reply("Rolle nicht gefunden!")
  if(!RoleSup) return message.reply("Rolle nicht gefunden!")
  if(!RoleMod) return message.reply("Rolle nicht gefunden!")



        if(message.member.roles.has(RoleBeta.id) && message.member.roles.has(RoleSup.id) || message.member.roles.has(RoleMod.id) && message.member.roles.has(RoleBeta.id) || message.member.hasPermission("ADMINISTRATOR")) {

        let mPlayer = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]))
        if(!mPlayer) return message.channel.send("Nutze: `+mod [Name] [Grund]` --> Hiermit führst du den Mod-Command aus");

        if(message.member === mPlayer) {

            message.channel.send("Dies funktioniert im Moment noch, da es ein Beta-Test ist. Jedoch wird das bald deaktiviert")
            }


        let grund = args[1]


            NullCounter();

            //Banumgehung
        
        if(grund === "Banumgehung") {

            Banumgehung[mPlayer.id] += 1
            NumberOfWarns[mPlayer.id] += 210

            fs.writeFileSync("warns.json",JSON.stringify(NumberOfWarns))
            fs.writeFileSync("data/banumgehung.json",JSON.stringify(Banumgehung))

        message.channel.send(`Der Spieler ${mPlayer} hat eine Strafe erhalten wegen ${grund} erhalten!`);
            info123();

        return;



        } else

        //beleidigung_leicht


        if(grund === "Beleidigung_leicht") {
            NumberOfWarns[mPlayer.id] += 10;
            Beleidigung_leicht[mPlayer.id]++;
    
            message.channel.send(`Der Spieler ${mPlayer} hat eine Strafe erhalten wegen ${grund} erhalten!`);
            fs.writeFileSync("data/beleidigung_leicht.json",JSON.stringify(Beleidigung_leicht))
            fs.writeFileSync("warns.json",JSON.stringify(NumberOfWarns))

            info123();

            return;
        } else
            


        //Beleidigung schwer


        if(grund === "Beleidigung_schwer") {
            NumberOfWarns[mPlayer.id] += 10;
            Beleidigung_schwer[mPlayer.id]++;
    
            message.channel.send(`Der Spieler ${mPlayer} hat eine Strafe erhalten wegen ${grund} erhalten!`);
            fs.writeFileSync("data/beleidigung_schwer.json",JSON.stringify(Beleidigung_schwer))
            fs.writeFileSync("warns.json",JSON.stringify(NumberOfWarns))

            info123();

            return;
        } else



        if(grund === "Caps") {
            NumberOfWarns[mPlayer.id] += 7;
            Caps[mPlayer.id]++;
    
            message.channel.send(`Der Spieler ${mPlayer} hat eine Strafe erhalten wegen ${grund} erhalten!`);
            fs.writeFileSync("data/caps.json",JSON.stringify(Caps))
            fs.writeFileSync("warns.json",JSON.stringify(NumberOfWarns))
            
            info123();

            return;
        } else

                        
        if(grund === "Erwähnung") {
            NumberOfWarns[mPlayer.id] += 50;
            Erwähnung[mPlayer.id]++;
    
            message.channel.send(`Der Spieler ${mPlayer} hat eine Strafe erhalten wegen ${grund} erhalten!`);
            fs.writeFileSync("data/erwähnung.json",JSON.stringify(Erwähnung))
            fs.writeFileSync("warns.json",JSON.stringify(NumberOfWarns))

            info123();

            return;

        }
        
        else

                         
        if(grund === "Hasserfüllte_Inhalte") {
            NumberOfWarns[mPlayer.id] += 85;
            Hasserfüllte_Inhalte[mPlayer.id]++;
    
            message.channel.send(`Der Spieler ${mPlayer} hat eine Strafe erhalten wegen ${grund} erhalten!`);
            fs.writeFileSync("data/hasserfüllte_inhalte.json",JSON.stringify(Hasserfüllte_Inhalte))
            fs.writeFileSync("warns.json",JSON.stringify(NumberOfWarns))

            info123();

            return;

        }


        else

                         
        if(grund === "Pornografische_Inhalte") {
            NumberOfWarns[mPlayer.id] += 85;
            Pornografische_Inhalte[mPlayer.id]++;
    
            message.channel.send(`Der Spieler ${mPlayer} hat eine Strafe erhalten wegen ${grund} erhalten!`);
            fs.writeFileSync("data/pornografische_inhalte.json",JSON.stringify(Pornografische_Inhalte))
            fs.writeFileSync("warns.json",JSON.stringify(NumberOfWarns))

            info123();

            return;

        }


        else

                         
        if(grund === "Rassismus") {
            NumberOfWarns[mPlayer.id] += 75;
            Rassismus[mPlayer.id]++;
    
            message.channel.send(`Der Spieler ${mPlayer} hat eine Strafe erhalten wegen ${grund} erhalten!`);
            fs.writeFileSync("data/rassismus.json",JSON.stringify(Rassismus))
            fs.writeFileSync("warns.json",JSON.stringify(NumberOfWarns))

            info123();

            return;

        }



        else

                         
        if(grund === "Rufschädigung") {
            NumberOfWarns[mPlayer.id] += 75;
            Rufschädigung[mPlayer.id]++;
    
            message.channel.send(`Der Spieler ${mPlayer} hat eine Strafe erhalten wegen ${grund} erhalten!`);
            fs.writeFileSync("data/rufschädigung.json",JSON.stringify(Rufschädigung))
            fs.writeFileSync("warns.json",JSON.stringify(NumberOfWarns))

            info123();

            return;

        }



        else

                         
        if(grund === "Spamming") {
            NumberOfWarns[mPlayer.id] += 40;
            Spamming[mPlayer.id]++;
    
            message.channel.send(`Der Spieler ${mPlayer} hat eine Strafe erhalten wegen ${grund} erhalten!`);
            fs.writeFileSync("data/spamming.json",JSON.stringify(Spamming))
            fs.writeFileSync("warns.json",JSON.stringify(NumberOfWarns))

            info123();

            return;

        }



        else

                         
        if(grund === "Unangemessenes_Verhalten") {
            NumberOfWarns[mPlayer.id] += 15;
            Unangemessenes_Verhalten[mPlayer.id]++;
    
            message.channel.send(`Der Spieler ${mPlayer} hat eine Strafe erhalten wegen ${grund} erhalten!`);
            fs.writeFileSync("data/unangemessenes_verhalten.json",JSON.stringify(Unangemessenes_Verhalten))
            fs.writeFileSync("warns.json",JSON.stringify(NumberOfWarns))

            info123();

            return;

        }




        else

                         
        if(grund === "Unerlaubtes_Aufnehmen") {
            NumberOfWarns[mPlayer.id] += 40;
            Unerlaubtes_Aufnehmen[mPlayer.id]++;
    
            message.channel.send(`Der Spieler ${mPlayer} hat eine Strafe erhalten wegen ${grund} erhalten!`);
            fs.writeFileSync("data/unerlaubtes_aufnehmen.json",JSON.stringify(Unerlaubtes_Aufnehmen))
            fs.writeFileSync("warns.json",JSON.stringify(NumberOfWarns))

            info123();

            return;

        }



        else

                         
        if(grund === "Werbung_Erwärnung") {
            NumberOfWarns[mPlayer.id] += 70;
            Werbung_Erwärnung[mPlayer.id]++;
    
            message.channel.send(`Der Spieler ${mPlayer} hat eine Strafe erhalten wegen ${grund} erhalten!`);
            fs.writeFileSync("data/werbung_erwärnung.json",JSON.stringify(Werbung_Erwärnung))
            fs.writeFileSync("warns.json",JSON.stringify(NumberOfWarns))

            info123();

            return;

        }



        else

                         
        if(grund === "Werbung_Öffentlich") {
            NumberOfWarns[mPlayer.id] += 30;
            Werbung_Öffentlich[mPlayer.id]++;
    
            message.channel.send(`Der Spieler ${mPlayer} hat eine Strafe erhalten wegen ${grund} erhalten!`);
            fs.writeFileSync("data/werbung_öffentlich.json",JSON.stringify(Werbung_Öffentlich))
            fs.writeFileSync("warns.json",JSON.stringify(NumberOfWarns))

            info123();

            return;

        }



        else

                         
        if(grund === "Werbung_PN") {
            NumberOfWarns[mPlayer.id] += 30;
            Werbung_PN[mPlayer.id]++;
    
            message.channel.send(`Der Spieler ${mPlayer} hat eine Strafe erhalten wegen ${grund} erhalten!`);
            fs.writeFileSync("data/werbung_pn.json",JSON.stringify(Werbung_PN))
            fs.writeFileSync("warns.json",JSON.stringify(NumberOfWarns))

            info123();

            return;

        } 
        
        else {

            message.channel.send("Falscher Grund! Nutze:" + Gründe)
        }

    } else {

        message.channel.send(Rechte)

    }

    }








    if(cmd === `${prefix}delwarn` || cmd === `${prefix}dwarn` || cmd === `${prefix}dw`) {

        
        if(message.member.hasPermission("ADMINISTRATOR")) {
        

        let mPlayer = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]))
        if(!mPlayer) return message.channel.send("Nutze: `+delwarn [Name] [Punkte] [Grund]` --> Hiermit kannst Verwarnungspunkte entfernen");


        if(message.member=== mPlayer) {

        message.channel.send("Dies funktioniert im Moment noch, da es ein Beta-Test ist. Jedoch wird das bald deaktiviert")
        }

        let punkte = args[1]
        let grund = args.slice(2);
        grund.join();


         if(!NumberOfWarns[mPlayer.id]) {
            NumberOfWarns[mPlayer.id] = 0;
        }

        NumberOfWarns[mPlayer.id] -= punkte;

        message.channel.send(`Dem Spieler ${mPlayer} wurden ${punkte} entfernt, da ${grund}`);
        fs.writeFileSync("warns.json",JSON.stringify(NumberOfWarns))


    } else {

        message.channel.send(Rechte)

    }

    }

    



    if(cmd === `${prefix}winfo` || cmd === `${prefix}warns` || cmd === `${prefix}wi`) {


        let RoleBeta = message.guild.roles.find(`name`, "Beta-Test")
        let RoleSup = message.guild.roles.find(`name`, "Supporter")
        let RoleMod = message.guild.roles.find(`name`, "Moderator")
  if(!RoleBeta) return message.reply("Rolle nicht gefunden!")
  if(!RoleSup) return message.reply("Rolle nicht gefunden!")
  if(!RoleMod) return message.reply("Rolle nicht gefunden!")

        if(message.member.roles.has(RoleBeta.id) && message.member.roles.has(RoleSup.id) || message.member.roles.has(RoleMod.id) && message.member.roles.has(RoleBeta.id) || message.member.hasPermission("ADMINISTRATOR")) {

        let mPlayer = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]))
        if(!mPlayer) return message.channel.send("Nutze `+winfo [Name]` --> Hiermit erhältest du alle Infos über deinen Spieler");


            NullCounter();


            let bicom1 = mPlayer.user.displayAvatarURL;
            let bicom = bot.user.displayAvatarURL;
            

        let infoem = new Discord.RichEmbed()
        .addField("Spieler:", `${mPlayer}(${mPlayer.id})`)
        .addField("Verwarnungspunkte:", NumberOfWarns[mPlayer.id])
        .setDescription(` \n
        Banumgehung: ${Banumgehung[mPlayer.id]}
        Beleidigung_leicht: ${Beleidigung_leicht[mPlayer.id]}
        Beleidigung_schwer: ${Beleidigung_schwer[mPlayer.id]}
        Caps: ${Caps[mPlayer.id]}
        Erwähnung: ${Erwähnung[mPlayer.id]}
        Hasserfüllte_Inhalte: ${Hasserfüllte_Inhalte[mPlayer.id]}
        Pornografische_Inhalte: ${Pornografische_Inhalte[mPlayer.id]}
        Rassismus: ${Rassismus[mPlayer.id]}
        Rufschädigung: ${Rufschädigung[mPlayer.id]}
        Spamming: ${Spamming[mPlayer.id]}
        Unangemessenes_Verhalten: ${Unangemessenes_Verhalten[mPlayer.id]}
        Unerlaubtes_Aufnehmen: ${Unerlaubtes_Aufnehmen[mPlayer.id]}
        Werbung-Erwärnung: ${Werbung_Erwärnung[mPlayer.id]}
        Werbung-Öffentlich: ${Werbung_Öffentlich[mPlayer.id]}
        Werbung-PN: ${Werbung_PN[mPlayer.id]}`)
        .setAuthor("Moderation-Bot by Mineklex", bicom)
        .setColor("#0055ff")
        .setThumbnail(bicom1)
        .setFooter(`${datetime}, © Mineklex`)



    return message.channel.send(infoem);
    

    } else {
        message.channel.send(Rechte)
    }

}







                            //Functions




function info123(){

    let grund = args[1]
    let mPlayer = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]))

    if (NumberOfWarns[mPlayer.id] > 0) {
        if(NumberOfWarns[mPlayer.id] <= 20) {

            
    let bicom = bot.user.displayAvatarURL;

    fs.writeFileSync("warns.json",JSON.stringify(NumberOfWarns))

    let em = new Discord.RichEmbed()
    .setAuthor("Moderation-Bot", bicom)
    .setColor("#ff0000")
    .setFooter(`${datetime}, © Mineklex`)
    .setDescription(`Guten Tag,
    wir müssen Ihnen leider mitteilen, dass sie gegen unsere Regeln verstoßen haben: \n
    Sie haben __ein Verwarnung__ wegen **${grund}** erhalten!\n
    *Sollte dies ein Fehler sein, melden Sie sich bitte beim Support.* (Nutze **-new**)
    Verwarnungspunkte: **${NumberOfWarns[mPlayer.id]}**\n\n
    Mit freundlichen Grüßen \n
    **Ihr Support- und Moderationsteam**`)

    mPlayer.send(em)

    let userP = mPlayer.user.displayAvatarURL;
    let warnem = new Discord.RichEmbed()
    .setDescription("**__Verwarnung wegen " + grund + "!__**")
    .addField("Moderator:", message.author)
    .addField("User:", mPlayer)
    .addField("Channel:", message.channel)
    .addField("Bestrafung:", "**Verwarnung**")
    .addField("Grund:", grund)
    .addField("Verwarnungspunkte:", NumberOfWarns[mPlayer.id])
    .setThumbnail(userP)
    .setAuthor("Moderation-Bot by Mineklex", bicom)
    .setColor("#ff0000")
    .setFooter(`${datetime}, © Mineklex`)


    let warnchannel = message.guild.channels.find(`name`, "bestrafung");
    if(!warnchannel) return message.channel.send("ERROR 404!")

    return warnchannel.send(warnem);

        }
    }

    if (NumberOfWarns[mPlayer.id] > 20) {
    if(NumberOfWarns[mPlayer.id] <= 40) {


        let bicom = bot.user.displayAvatarURL;

        fs.writeFileSync("warns.json",JSON.stringify(NumberOfWarns))
        
        //P-massage
        let em = new Discord.RichEmbed()
        .setAuthor("Moderation-Bot", bicom)
        .setColor("#ff0000")
        .setFooter(`${datetime}, © Mineklex`)
        .setDescription(`Guten Tag,
        wir müssen Ihnen leider mitteilen, dass sie gegen unsere Regeln verstoßen haben: \n
        Sie haben __einen Mute(15 Minuten)__ wegen **${grund}** erhalten!\n
        *Sollte dies ein Fehler sein, melden Sie sich bitte beim Support.* (Nutze **-new**)
        Verwarnungspunkte: **${NumberOfWarns[mPlayer.id]}**\n\n
        Mit freundlichen Grüßen \n
        **Ihr Support- und Moderationsteam**`)

        mPlayer.send(em)

        //Mute-System




        let mutedRole = message.guild.roles.find(`name`, "Muted")
        if(!mutedRole) return message.reply("Rolle nicht gefunden!")

       mPlayer.addRole(mutedRole.id);

       mPlayer.send("```Sie wurde für 15 Minuten gemutet!```")



       let time = "15m";

       setTimeout(function() {
           mPlayer.removeRole(mutedRole.id);
           mPlayer.send("```Sie sind nun wieder entmutet! :)```")
       }, ms(time));




        //message
        let userP = mPlayer.user.displayAvatarURL;
        let warnem = new Discord.RichEmbed()
        .setDescription("**__15m-Mute wegen " + grund + "!__**")
        .addField("Moderator:", message.author)
        .addField("User:", mPlayer)
        .addField("Channel:", message.channel)
        .addField("Bestrafung:", "**Mute(15 Minuten)**")
        .addField("Grund:", grund)
        .addField("Verwarnungspunkte:", NumberOfWarns[mPlayer.id])
        .setThumbnail(userP)
        .setAuthor("Moderation-Bot by Mineklex", bicom)
        .setColor("#ff0000")
        .setFooter(`${datetime}, © Mineklex`)


        let warnchannel = message.guild.channels.find(`name`, "bestrafung");
        if(!warnchannel) return message.channel.send("ERROR 404!")

        return warnchannel.send(warnem);




    }
}


if (NumberOfWarns[mPlayer.id] > 40) {
if(NumberOfWarns[mPlayer.id] <= 55) {


    let bicom = bot.user.displayAvatarURL;

    fs.writeFileSync("warns.json",JSON.stringify(NumberOfWarns))

    let em = new Discord.RichEmbed()
    .setAuthor("Moderation-Bot", bicom)
    .setColor("#ff0000")
    .setFooter(`${datetime}, © Mineklex`)
    .setDescription(`Guten Tag,
    wir müssen Ihnen leider mitteilen, dass sie gegen unsere Regeln verstoßen haben: \n
    Sie haben __Mute(2 Stunden)__ wegen **${grund}** erhalten!\n
    *Sollte dies ein Fehler sein, melden Sie sich bitte beim Support.* (Nutze **-new**)
    Verwarnungspunkte: **${NumberOfWarns[mPlayer.id]}**\n\n
    Mit freundlichen Grüßen \n
    **Ihr Support- und Moderationsteam**`)

     mPlayer.send(em)


     
        //Mute-System

         let mutedRole = message.guild.roles.find(`name`, "Muted")
         if(!mutedRole) return message.reply("Rolle nicht gefunden!")

        mPlayer.addRole(mutedRole.id);

        mPlayer.send("```Sie wurde für 2 Stunden gemutet!```")



        let time = "2h";

        setTimeout(function() {
            mPlayer.removeRole(mutedRole.id);
            mPlayer.send("```Sie sind nun wieder entmutet! :)```")
        }, ms(time));


        //message
        let userP = mPlayer.user.displayAvatarURL;
        let warnem = new Discord.RichEmbed()
        .setDescription("**__2h-Mute wegen " + grund + "!__**")
        .addField("Moderator:", message.author)
        .addField("User:", mPlayer)
        .addField("Channel:", message.channel)
        .addField("Bestrafung:", "**Mute(2 Stunden)**")
        .addField("Grund:", grund)
        .addField("Verwarnungspunkte:", NumberOfWarns[mPlayer.id])
        .setThumbnail(userP)
        .setAuthor("Moderation-Bot by Mineklex", bicom)
        .setColor("#ff0000")
        .setFooter(`${datetime}, © Mineklex`)


        let warnchannel = message.guild.channels.find(`name`, "bestrafung");
        if(!warnchannel) return message.channel.send("ERROR 404!")

        return warnchannel.send(warnem);
    }

}



if (NumberOfWarns[mPlayer.id] > 55) {
    if(NumberOfWarns[mPlayer.id] <= 70) {
    
    
        let bicom = bot.user.displayAvatarURL;
    
        fs.writeFileSync("warns.json",JSON.stringify(NumberOfWarns))
    
        let em = new Discord.RichEmbed()
        .setAuthor("Moderation-Bot", bicom)
        .setColor("#ff0000")
        .setFooter(`${datetime}, © Mineklex`)
        .setDescription(`Guten Tag,
        wir müssen Ihnen leider mitteilen, dass sie gegen unsere Regeln verstoßen haben: \n
        Sie haben __Mute(4 Stunden)__ wegen **${grund}** erhalten!\n
        *Sollte dies ein Fehler sein, melden Sie sich bitte beim Support.* (Nutze **-new**)
        Verwarnungspunkte: **${NumberOfWarns[mPlayer.id]}**\n\n
        Mit freundlichen Grüßen \n
        **Ihr Support- und Moderationsteam**`)
    
         mPlayer.send(em)
    
    
         
            //Mute-System
    
             let mutedRole = message.guild.roles.find(`name`, "Muted")
             if(!mutedRole) return message.reply("Rolle nicht gefunden!")
    
            mPlayer.addRole(mutedRole.id);
    
            mPlayer.send("```Sie wurde für 15 Minuten gemutet!```")
    
    
    
            let time = "4h";
    
            setTimeout(function() {
                mPlayer.removeRole(mutedRole.id);
                mPlayer.send("```Sie sind nun wieder entmutet! :)```")
            }, ms(time));
    
    
            //message
            let userP = mPlayer.user.displayAvatarURL;
            let warnem = new Discord.RichEmbed()
            .setDescription("**__4h-Mute wegen " + grund + "!__**")
            .addField("Moderator:", message.author)
            .addField("User:", mPlayer)
            .addField("Channel:", message.channel)
            .addField("Bestrafung:", "**Mute(4 Stunden)**")
            .addField("Grund:", grund)
            .addField("Verwarnungspunkte:", NumberOfWarns[mPlayer.id])
            .setThumbnail(userP)
            .setAuthor("Moderation-Bot by Mineklex", bicom)
            .setColor("#ff0000")
            .setFooter(`${datetime}, © Mineklex`)
    
    
            let warnchannel = message.guild.channels.find(`name`, "bestrafung");
            if(!warnchannel) return message.channel.send("ERROR 404!")
    
            return warnchannel.send(warnem);
        }
    
    }




    if (NumberOfWarns[mPlayer.id] > 70) {
        if(NumberOfWarns[mPlayer.id] <= 84) {
        
        
            let bicom = bot.user.displayAvatarURL;
        
            fs.writeFileSync("warns.json",JSON.stringify(NumberOfWarns))
        
            let em = new Discord.RichEmbed()
            .setAuthor("Moderation-Bot", bicom)
            .setColor("#ff0000")
            .setFooter(`${datetime}, © Mineklex`)
            .setDescription(`Guten Tag,
            wir müssen Ihnen leider mitteilen, dass sie gegen unsere Regeln verstoßen haben: \n
            Sie haben __Mute(1 Tag)__ wegen **${grund}** erhalten!\n
            *Sollte dies ein Fehler sein, melden Sie sich bitte beim Support.* (Nutze **-new**)
            Verwarnungspunkte: **${NumberOfWarns[mPlayer.id]}**\n\n
            Mit freundlichen Grüßen \n
            **Ihr Support- und Moderationsteam**`)
        
             mPlayer.send(em)
        
        
             
                //Mute-System
        
                 let mutedRole = message.guild.roles.find(`name`, "Muted")
                 if(!mutedRole) return message.reply("Rolle nicht gefunden!")
        
                mPlayer.addRole(mutedRole.id);
        
                mPlayer.send("```Sie wurde für 1 Tag gemutet!```")
        
        
        
                let time = "1d";
        
                setTimeout(function() {
                    mPlayer.removeRole(mutedRole.id);
                    mPlayer.send("```Sie sind nun wieder entmutet! :)```")
                }, ms(time));
        
        
                //message
                let userP = mPlayer.user.displayAvatarURL;
                let warnem = new Discord.RichEmbed()
                .setDescription("**__1d-Mute wegen " + grund + "!__**")
                .addField("Moderator:", message.author)
                .addField("User:", mPlayer)
                .addField("Channel:", message.channel)
                .addField("Bestrafung:", "**Mute(1 Tag)**")
                .addField("Grund:", grund)
                .addField("Verwarnungspunkte:", NumberOfWarns[mPlayer.id])
                .setThumbnail(userP)
                .setAuthor("Moderation-Bot by Mineklex", bicom)
                .setColor("#ff0000")
                .setFooter(`${datetime}, © Mineklex`)
        
        
                let warnchannel = message.guild.channels.find(`name`, "bestrafung");
                if(!warnchannel) return message.channel.send("ERROR 404!")
        
                return warnchannel.send(warnem);
            }
        
        }




        if (NumberOfWarns[mPlayer.id] > 84) {
            if(NumberOfWarns[mPlayer.id] <= 95) {
            
            
                let bicom = bot.user.displayAvatarURL;
            
                fs.writeFileSync("warns.json",JSON.stringify(NumberOfWarns))
            
                let em = new Discord.RichEmbed()
                .setAuthor("Moderation-Bot", bicom)
                .setColor("#ff0000")
                .setFooter(`${datetime}, © Mineklex`)
                .setDescription(`Guten Tag,
                wir müssen Ihnen leider mitteilen, dass sie gegen unsere Regeln verstoßen haben: \n
                Sie haben __Mute(2 Tage)__ wegen **${grund}** erhalten!\n
                *Sollte dies ein Fehler sein, melden Sie sich bitte beim Support.* (Nutze **-new**)
                Verwarnungspunkte: **${NumberOfWarns[mPlayer.id]}**\n\n
                Mit freundlichen Grüßen \n
                **Ihr Support- und Moderationsteam**`)
            
                 mPlayer.send(em)
            
            
                 
                    //Mute-System
            
                     let mutedRole = message.guild.roles.find(`name`, "Muted")
                     if(!mutedRole) return message.reply("Rolle nicht gefunden!")
            
                    mPlayer.addRole(mutedRole.id);
            
                    mPlayer.send("```Sie wurde für 2 Tage gemutet!```")
            
            
            
                    let time = "2d";
            
                    setTimeout(function() {
                        mPlayer.removeRole(mutedRole.id);
                        mPlayer.send("```Sie sind nun wieder entmutet! :)```")
                    }, ms(time));
            
            
                    //message
                    let userP = mPlayer.user.displayAvatarURL;
                    let warnem = new Discord.RichEmbed()
                    .setDescription("**__2 Tage wegen " + grund + "!__**")
                    .addField("Moderator:", message.author)
                    .addField("User:", mPlayer)
                    .addField("Channel:", message.channel)
                    .addField("Bestrafung:", "**Mute(2 Tage)**")
                    .addField("Grund:", grund)
                    .addField("Verwarnungspunkte:", NumberOfWarns[mPlayer.id])
                    .setThumbnail(userP)
                    .setAuthor("Moderation-Bot by Mineklex", bicom)
                    .setColor("#ff0000")
                    .setFooter(`${datetime}, © Mineklex`)
            
            
                    let warnchannel = message.guild.channels.find(`name`, "bestrafung");
                    if(!warnchannel) return message.channel.send("ERROR 404!")
            
                    return warnchannel.send(warnem);
                }
            
            }




            if (NumberOfWarns[mPlayer.id] > 95) {
                if(NumberOfWarns[mPlayer.id] <= 140) {
                
                
                    let bicom = bot.user.displayAvatarURL;
                
                    fs.writeFileSync("warns.json",JSON.stringify(NumberOfWarns))
                
                    let em = new Discord.RichEmbed()
                    .setAuthor("Moderation-Bot", bicom)
                    .setColor("#ff0000")
                    .setFooter(`${datetime}, © Mineklex`)
                    .setDescription(`Guten Tag,
                    wir müssen Ihnen leider mitteilen, dass sie gegen unsere Regeln verstoßen haben: \n
                    Sie haben __Mute(3 Tage)__ wegen **${grund}** erhalten!\n
                    *Sollte dies ein Fehler sein, melden Sie sich bitte beim Support.* (Nutze **-new**)
                    Verwarnungspunkte: **${NumberOfWarns[mPlayer.id]}**\n\n
                    Mit freundlichen Grüßen \n
                    **Ihr Support- und Moderationsteam**`)
                
                     mPlayer.send(em)
                
                
                     
                        //Mute-System
                
                         let mutedRole = message.guild.roles.find(`name`, "Muted")
                         if(!mutedRole) return message.reply("Rolle nicht gefunden!")
                
                        mPlayer.addRole(mutedRole.id);
                
                        mPlayer.send("```Sie wurde für 3 Tage gemutet!```")
                
                
                
                        let time = "3d";
                
                        setTimeout(function() {
                            mPlayer.removeRole(mutedRole.id);
                            mPlayer.send("```Sie sind nun wieder entmutet! :)```")
                        }, ms(time));
                
                
                        //message
                        let userP = mPlayer.user.displayAvatarURL;
                        let warnem = new Discord.RichEmbed()
                        .setDescription("**__3d-Mute wegen " + grund + "!__**")
                        .addField("Moderator:", message.author)
                        .addField("User:", mPlayer)
                        .addField("Channel:", message.channel)
                        .addField("Bestrafung:", "**Mute(3 Tage)**")
                        .addField("Grund:", grund)
                        .addField("Verwarnungspunkte:", NumberOfWarns[mPlayer.id])
                        .setThumbnail(userP)
                        .setAuthor("Moderation-Bot by Mineklex", bicom)
                        .setColor("#ff0000")
                        .setFooter(`${datetime}, © Mineklex`)
                
                
                        let warnchannel = message.guild.channels.find(`name`, "bestrafung");
                        if(!warnchannel) return message.channel.send("ERROR 404!")
                
                        return warnchannel.send(warnem);
                    }
                
                }


                if (NumberOfWarns[mPlayer.id] > 140) {
                    if(NumberOfWarns[mPlayer.id] <= 190) {
                    
                    
                        let bicom = bot.user.displayAvatarURL;
                    
                        fs.writeFileSync("warns.json",JSON.stringify(NumberOfWarns))
                    
                        let em = new Discord.RichEmbed()
                        .setAuthor("Moderation-Bot", bicom)
                        .setColor("#ff0000")
                        .setFooter(`${datetime}, © Mineklex`)
                        .setDescription(`Guten Tag,
                        wir müssen Ihnen leider mitteilen, dass sie gegen unsere Regeln verstoßen haben: \n
                        Sie haben __Kick__ wegen **${grund}** erhalten!\n
                        *Sollte dies ein Fehler sein, melden Sie sich bitte beim Support.* (Nutze **-new**)
                        Verwarnungspunkte: **${NumberOfWarns[mPlayer.id]}**\n\n
                        Mit freundlichen Grüßen \n
                        **Ihr Support- und Moderationsteam**`)
                    
                         mPlayer.send(em)
                    
                    
                         
                            //Kick-System!!!

                            message.channel.send("Das Kick-System ist zur Zeit deaktiviert!")
                    
                    
                            //message
                            let userP = mPlayer.user.displayAvatarURL;
                            let warnem = new Discord.RichEmbed()
                            .setDescription("**__Kick wegen " + grund + "!__**")
                            .addField("Moderator:", message.author)
                            .addField("User:", mPlayer)
                            .addField("Channel:", message.channel)
                            .addField("Bestrafung:", "**Kick**")
                            .addField("Grund:", grund)
                            .addField("Verwarnungspunkte:", NumberOfWarns[mPlayer.id])
                            .setThumbnail(userP)
                            .setAuthor("Moderation-Bot by Mineklex", bicom)
                            .setColor("#ff0000")
                            .setFooter(`${datetime}, © Mineklex`)
                    
                    
                            let warnchannel = message.guild.channels.find(`name`, "bestrafung");
                            if(!warnchannel) return message.channel.send("ERROR 404!")
                    
                            return warnchannel.send(warnem);
                        }
                    
                    }


                    if (NumberOfWarns[mPlayer.id] > 191) {
                        
                        
                            let bicom = bot.user.displayAvatarURL;
                        
                            fs.writeFileSync("warns.json",JSON.stringify(NumberOfWarns))
                        
                            let em = new Discord.RichEmbed()
                            .setAuthor("Moderation-Bot", bicom)
                            .setColor("#ff0000")
                            .setFooter(`${datetime}, © Mineklex`)
                            .setDescription(`Guten Tag,
                            wir müssen Ihnen leider mitteilen, dass sie gegen unsere Regeln verstoßen haben: \n
                            Sie haben __Ausschluss von unseren Server__ wegen **${grund}** erhalten!\n
                            *Sollte dies ein Fehler sein, melden Sie sich bitte beim Support.* (Nutze **-new**)
                            Verwarnungspunkte: **${NumberOfWarns[mPlayer.id]}**\n\n
                            Mit freundlichen Grüßen \n
                            **Ihr Support- und Moderationsteam**`)
                        
                             mPlayer.send(em)
                        
                        
                             
                                //Mute-System
                        
                                message.channel.send("Das Ban-System ist zur Zeit deaktiviert!")
                               
                        
                                //message
                                let userP = mPlayer.user.displayAvatarURL;
                                let warnem = new Discord.RichEmbed()
                                .setDescription("**__Ban wegen " + grund + "!__**")
                                .addField("Moderator:", message.author)
                                .addField("User:", mPlayer)
                                .addField("Channel:", message.channel)
                                .addField("Bestrafung:", "**Ban**")
                                .addField("Grund:", grund)
                                .addField("Verwarnungspunkte:", NumberOfWarns[mPlayer.id])
                                .setThumbnail(userP)
                                .setAuthor("Moderation-Bot by Mineklex", bicom)
                                .setColor("#ff0000")
                                .setFooter(`${datetime}, © Mineklex`)
                        
                        
                                let warnchannel = message.guild.channels.find(`name`, "bestrafung");
                                if(!warnchannel) return message.channel.send("ERROR 404!")
                        
                                return warnchannel.send(warnem);
                        
                        }




}



        function NullCounter() {

            let mPlayer = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]))
            
        if(!Banumgehung[mPlayer.id]) {
            Banumgehung[mPlayer.id] = 0;
        }

        if(!Beleidigung_leicht[mPlayer.id]) {
            Beleidigung_leicht[mPlayer.id] = 0;
        }
        

        if(!Beleidigung_leicht[mPlayer.id]) {
            Beleidigung_schwer[mPlayer.id] = 0;
        }


        if(!Caps[mPlayer.id]) {
            Caps[mPlayer.id] = 0;
        }


        if(!Erwähnung[mPlayer.id]) {
            Erwähnung[mPlayer.id] = 0;
        }


        if(!Hasserfüllte_Inhalte[mPlayer.id]) {
            Hasserfüllte_Inhalte[mPlayer.id] = 0;
        }


        if(!Pornografische_Inhalte[mPlayer.id]) {
            Pornografische_Inhalte[mPlayer.id] = 0;
        }


        if(!Rassismus[mPlayer.id]) {
            Rassismus[mPlayer.id] = 0;
        }


        if(!Rufschädigung[mPlayer.id]) {
            Rufschädigung[mPlayer.id] = 0;
        }


        if(!Spamming[mPlayer.id]) {
            Spamming[mPlayer.id] = 0;
        }


        if(!Unangemessenes_Verhalten[mPlayer.id]) {
            Unangemessenes_Verhalten[mPlayer.id] = 0;
        }


        if(!Unerlaubtes_Aufnehmen[mPlayer.id]) {
            Unerlaubtes_Aufnehmen[mPlayer.id] = 0;
        }

        if(!Werbung_Erwärnung[mPlayer.id]) {
            Werbung_Erwärnung[mPlayer.id] = 0;
        }


        if(!Werbung_Öffentlich[mPlayer.id]) {
            Werbung_Öffentlich[mPlayer.id] = 0;
        }


        if(!Werbung_PN[mPlayer.id]) {
            Werbung_PN[mPlayer.id] = 0;
        }


        if(!NumberOfWarns[mPlayer.id]) {
            NumberOfWarns[mPlayer.id] = 0;
        }

    }



});




