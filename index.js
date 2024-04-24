const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');
const moment = require('moment');
const ms = require("ms");
const db = require('quick.db');
require("events").EventEmitter.defaultMaxListeners = 50000;
const inlinereply = require('discord-reply');
const disbut = require('discord-buttons');
const probot = require("probot-tax");
////Bot Status
client.on('ready', () => {
  console.log(`🤠 : ${client.user.username}`);
  client.user.setStatus('idle');///dnd/online/idle
  let status = [`Athletes System`,`${prefix}help`];
  setInterval(()=>{
  client.user.setActivity(status[Math.floor(Math.random()*status.length)]);
  },5000)
})
///Definitions 
const prefix = "+";///your prefix
const owner = ["780906998962061343","780906998962061343"]///owner id
const supportServer = "https://discord.gg/athletes"///server support
const help_info_color = "#1e90ff"///color in help
const color = "#1e90ff"//main color
const moreInfo = `Need more info? use ${prefix}help`
const line = "https://media.discordapp.net/attachments/1230198062165790841/1230281575053393941/Design_sans_titre_8.png?ex=6628dcc1&is=66278b41&hm=a48908fa4bf82c9e080528d21d4e44514039c97bbe84044f5c5395c9860a6a8f&=&format=webp&quality=lossless&width=1125&height=56"///url line link
const صح = "<:Designsanstitre15:1231596307177799761>";//react
const غلط = "<:Designsanstitre15:1231596307177799761>";//react

///auto react


client.on("message", async black => {
   ///replace 83838388 with id channel

  if (black.channel.id !=83838388) return;
  if(black.author.id === client.user.id) return;
      black.react("<:Designsanstitre15:1231596307177799761>")//react
      black.react("<:Designsanstitre15:1231596307177799761>")//2



  }

)

//tax channel




client.on("message", message => {
  if (message.content == ("السلام عليكم") || message.content === "سلام عليكم") 
  {

message.lineReply(`
> \`-\`    **وعليكم السلام يا برو** 
> \`/\`    **Welcome To : \`${message.guild.name}\`  **

 `)

  }
})

client.on("message", message => {
  if (message.content == (".") || message.content === "..") 
  {

message.lineReply(`
<:Designsanstitre15:1231596307177799761>`)

  }
})
///line
client.on("message", message => {
  if (message.content == ("خط") || message.content === "line") 
  {

message.channel.send(
  new Discord.MessageEmbed()

  .setColor(color)
  .setImage(line)
)
message.delete()

  }
})



///link
client.on("message", message => {
  if (message.content == ("لينك") || message.content === "link") {

message.lineReply(`
> \`-\` **My Link :** https://discord.gg/good-people-1142476088472248320
                         https://discord.gg/Sa3KQDFy4t

> \`/\` **𝖧𝖺𝗏𝖾 𝖥𝗎𝗇 𝖶𝗂𝗍𝗁 𝖴𝗌**   
`)

  }
})






//avatar 

client.on("message", async message => {
    let command = message.content.toLowerCase().split(" ")[0]
    command = command.slice(prefix.length)
    if (command == "avatar") {
        let args = message.content.split(" ")
        let user = message.mentions.users.first() || client.users.cache.find(u => u.id === args[1]) || message.author
        if (args[1] !== "server") {
            message.lineReply(
                new Discord.MessageEmbed()
                .setColor(color)
                .setAuthor(user.username, user.avatarURL({dynamic: true}))
                .setDescription(`**[Avatar Link](${user.avatarURL()})**`)
                .setImage(user.avatarURL({
                    dynamic: true,
                    format: 'png',
                    size: 1024
                }))
                .setFooter(user.username, user.avatarURL({ dynamic: true }))
                .setTimestamp()
            );
        } else if (args[1] === "server") {
            message.lineReply(
                new Discord.MessageEmbed()
                .setColor(color)
                .setAuthor(message.guild.name, message.guild.iconURL({ dynamic: true }))
                .setDescription(`**__[Avatar Link]__(${message.guild.iconURL({ dynamic: true })})**`)
                .setImage(message.guild.iconURL({
                    dynamic: true,
                    format: 'png',
                    size: 1024
                }))
                .setFooter(client.user.username, client.user.avatarURL({ dynamic: true }))
            );
        }
    }
});

//user
client.on('message',message => {
    if(message.content.startsWith(prefix + 'user')){
if(!message.guild)return;
const args = message.content.split(" ")[1];
let mID = message.guild.members.cache.get(args);
    let member;
    let user;
    if(args && !message.mentions.members.first() && !mID)return message.lineReplyNoMention({embed:{description:`😒 - **${message.author.username}**, **I can't find \`${args}\` in the server Please Join Your Id a Server**`,color:color}});
    if(message.mentions.members.first()||mID){
        member = message.mentions.members.first()||mID;
        user = member.user;
    }else{member = message.member;
    user = message.author;}
    let em = new Discord.MessageEmbed()
    .setColor(color)
    .setThumbnail(user.displayAvatarURL({dynamic:true}))
    .addField(`Joined Discord :`,`\n\`\`${moment(user.createdAt).format('YYYY/M/D h:mm:ss')}\`\`\n**${moment(user.createdAt).fromNow()}**`,true)
    .addField(`Joined Server :`,`\`\`${moment(member.joinedAt).format('YYYY/M/D h:mm:ss')}\`\`\n**${moment(member.joinedAt).fromNow()}**`,true)
    .setFooter(user.tag,user.avatarURL({dynamic:true}))

    .setAuthor(user.tag,user.avatarURL({dynaimc:true}))
    message.lineReply(em);
}
})

//ban
client.on('message', async normal => {
  if (normal.content.startsWith(prefix + "ban")){
        if(!normal.member.hasPermission('BAN_MEMBERS'))
       return normal.lineReply(
          new Discord.MessageEmbed()
           .setAuthor(normal.author.tag, normal.author.avatarURL({ dynamic: true }))
          .setColor(color)
          .setTitle("**You are not addicted**")
          .setFooter(client.user.username, client.user.avatarURL({ dynamic: true }))
            .setTimestamp()
        )

           if(!normal.guild.me.hasPermission('BAN_MEMBERS'))
         return  normal.lineReply(
             new Discord.MessageEmbed()
             .setAuthor(normal.author.tag, normal.author.avatarURL({ dynamic: true }))
             .setColor(color)
             .setTitle("** I Dont Have a Permissions **")
             .setFooter(client.user.username, client.user.avatarURL({ dynamic: true }))
            .setTimestamp()
           )
         const args = normal.content.slice(prefix.length).trim().split(/ +/g);
        var member = normal.mentions.members.first()||normal.guild.members.cache.get(args[1])||normal.guild.members.cache.find(m => m.user.username === args.slice(1).join(' '));
      if(!member) return  normal.lineReply(
          new Discord.MessageEmbed()
          .setAuthor(normal.author.tag, normal.author.avatarURL({ dynamic: true }))
          .setColor(color)
          .setDescription(`\`\`\`Please Mention user or Type the user ID/Username ${args.slice(1).join(' ')}\`\`\` `)
          .setFooter(client.user.username, client.user.avatarURL({ dynamic: true }))
            .setTimestamp()
        )
                if (member.id === normal.author.id)return normal.reply(`\`\`\`You can't ban Yourself\`\`\` `)
      if (member.id === normal.guild.me.id)return normal.reply(`**You can't ban me dumbass**`)
     if(!member.bannable) return normal.lineReply(
        new Discord.MessageEmbed()
        .setAuthor(normal.author.tag, normal.author.avatarURL({ dynamic: true }))
        .setColor(color)
        .setTitle("```The Member Role Is Higher Than Me```")
        .setFooter(client.user.username, client.user.avatarURL({ dynamic: true }))
            .setTimestamp()
      )


         await member.ban({reason:`He/She just got bannned`})
        normal.lineReply(`**${member.user.username} Has been BANNNED ✈**`)
    } 
})






/// hide/show

client.on('message', message =>{
if(message.content === prefix +"hide"){
if(message.author.bot || !message.guild) return;
if(!message.member.hasPermission('MANAGE_CHANNELS'))
 return message.lineReply(
  new Discord.MessageEmbed()
  .setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true }))
  .setColor(color)
  .setTitle("``` You Dont Have a Permissions```")
  .setFooter(client.user.username, client.user.avatarURL({ dynamic: true }))
  .setTimestamp()
);

let everyone = message.guild.roles.cache.find(hyper => hyper.name === '@everyone');
        message.channel.createOverwrite(everyone, {
              VIEW_CHANNEL : false
            }).then(() => {
                                const embed = new Discord.MessageEmbed()
                                .setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true }))         
                .setColor(color)
                .setDescription(`> **Done Hide This Room  ${message.channel}**`)
                .setFooter(client.user.username, client.user.avatarURL({ dynamic: true }))
            .setTimestamp()
                message.lineReply(embed)
                })
}
});

client.on('message', message =>{
if(message.content === prefix +"show"){
if(message.author.bot || !message.guild) return;
if(!message.member.hasPermission('MANAGE_CHANNELS'))
return message.lineReply(
  new Discord.MessageEmbed()
  .setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true }))
  .setColor(color)
  .setTitle("``` You Dont Have a Permissions```")
  .setFooter(client.user.username, client.user.avatarURL({ dynamic: true }))
            .setTimestamp()
);

let everyone = message.guild.roles.cache.find(hyper => hyper.name === '@everyone');
        message.channel.createOverwrite(everyone, {
               VIEW_CHANNEL: true
            }).then(() => {
                const embed = new Discord.MessageEmbed()
                .setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true }))
                .setColor(color)
                .setDescription(`> **Done Show This Room  ${message.channel}** `)
                .setFooter(client.user.username, client.user.avatarURL({ dynamic: true }))
            .setTimestamp()
                message.lineReply(embed)
                })
}
});


/// nick name 
client.on("message",message=>{
    if(message.content.startsWith(prefix+"nick-name")){
      if(!message.member.hasPermission("CHANGE_NICKNAME")) return message.lineReply("```❌You Dont Have a permissions ```")
      const args = message.content.slice(prefix.length).trim().split(/ +/g);
      let member = message.mentions.users.first() || message.guild.members.cache.get(args[1])||message.guild.members.cache.find(r => r.user.username === args[1])
      if(!member) return message.lineReply("nick-name @Mention (nickname)")
      let nick = message.content.split(" ").slice(2).join(" ")
      let g = message.guild.members.cache.get(member.id)
      if(!nick){
g.setNickname(member.username)
      }
g.setNickname(nick)
const l = g.nickname|| member.username
let embed = new Discord.MessageEmbed()
.setAuthor(message.member.user.username,message.member.user.avatarURL({dynamic:true}))
.setThumbnail(message.member.user.avatarURL({dynamic:true}))
.setColor(color)
.setTitle("**__Done NickName__**")
.addField(`**(User Nick Change)**`,`${member}`,true)
.addField(`**(Befor)**`,`**${l}**`,true)
.addField(`**(After)**`,`**${nick}**`,true)
.addField(`**(from)**`,`**${message.author}**`,true)

.setFooter(message.member.user.username,message.member.user.avatarURL({dynamic:true}))
.setTimestamp()
message.lineReply(embed)
    }
  })

///ping
client.on("message", async(black) => {

    if (black.content.startsWith(prefix + "ping")) {

        black.lineReplyNoMention(
          new Discord.MessageEmbed()

          .setColor(color)
          .setDescription(`> **Please Wait...**`)

        ).then((m) => {
            setTimeout(() => {
                m.edit((
                  new Discord.MessageEmbed()
                  .setColor(color)
                  .setDescription(`> \`-\` **My Ping Is :** \`${client.ws.ping}\` `)
                    .setAuthor(black.author.tag, black.author.avatarURL({ dynamic: true }))
    .setTimestamp()


                )
                )
            }, 5000)
        })
    }
})



// Sevrer 
client.on('message', async message => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

        const args = message.content.slice(prefix.length).trim().split(/ +/);
        const command = args.shift().toLowerCase();
        if(command === 'server' || command === 'معلومات') {

        const onlinemembers = message.guild.members.cache.filter(m => m.presence.status === 'online'||'dnd'||'afk').size
          const textch = message.guild.channels.cache.filter(ch => ch.type === "text").size
          const voicech = message.guild.channels.cache.filter(ch => ch.type === "voice").size
          let customembed = new Discord.MessageEmbed()


    .setTimestamp()

          .setAuthor(message.guild.name,message.guild.iconURL({dynamic: true}
          ))

             .setFooter(message.guild.name,message.guild.iconURL({dynamic: true}
          ))

          .addField(`🆔 Server ID:`, message.guild.id, true)
          .addField(`📆 Created On`, message.guild.createdAt, true)
          .addField(`👑 Owned by`, message.guild.owner, true)
          .addFields({name:`👥  Members (${message.guild.members.cache.size})`, value: `${onlinemembers} online\n${message.guild.premiumSubscriptionCount} boosts ✨`, inline: true})
          .addField(`:speech_balloon: Channels (${message.guild.channels.cache.size})`, `${textch} Text | ${voicech} voice`, true)
          .addFields({name:`🌍 Others`, value: `**region:** ${message.guild.region}\n **Verification Level:** ${message.guild.verificationLevel}`, inline: true})
          .addField(`🔐  Roles (${message.guild.roles.cache.size})`, `To see a list with all roles use `)
          .setThumbnail(message.guild.iconURL({ dynamic: true }))
          .setColor(color)

          message.lineReplyNoMention(customembed)


        }
});


//Channel FeedBack 


client.on("message", message => {
  let embed = new Discord.MessageEmbed()
    .setTitle(`> **Thanks for FeedBack**    

`)

  .setImage(line)
  .setThumbnail(message.author.avatarURL({dynamic: true}))
        .setAuthor(message.author.username,message.author.avatarURL({dynaimc: true}))
           .setTimestamp()
       .setColor(color)
  if (message.channel.id != "id channel") return;


  if (message.author.id === client.user.id) return;
  if (message.author.send) {


    message.channel.send(embed);
  }

})
///auto line

client.on("message", message => {
  let embed = new Discord.MessageEmbed()


  .setImage(line)


       .setColor(color)
  if (message.channel.id != "id channel") return;


  if (message.author.id === client.user.id) return;
  if (message.author.send) {


    message.channel.send(embed);
  }

})

//2
client.on("message", message => {
  let embed = new Discord.MessageEmbed()


  .setImage(line)


       .setColor(color)
  if (message.channel.id != "id channel") return;


  if (message.author.id === client.user.id) return;
  if (message.author.send) {


    message.channel.send(embed);
  }

})
////mute

client.on('message', async normal => {
  if (normal.content.startsWith(prefix + "mute")){
        if(!normal.member.hasPermission('MANAGE_ROLES')) return normal.lineReply(
          new Discord.MessageEmbed()
          .setAuthor(normal.author.tag, normal.author.avatarURL({ dynamic: true }))
          .setColor(color)
          .setTitle(` \`\`\` You Dont Have a Permissions\`\`\``)
          .setFooter(client.user.username, client.user.avatarURL({ dynamic: true }))
            .setTimestamp()
        )
         const args = normal.content.slice(prefix.length).trim().split(/ +/g);
        var member = normal.mentions.members.first()||normal.guild.members.cache.get(args[1])||normal.guild.members.cache.find(m => m.user.username === args.slice(1).join(' '));
                if(!member) return normal.lineReply(
                  new Discord.MessageEmbed()
                  .setAuthor(normal.author.tag, normal.author.avatarURL({ dynamic: true }))
            .setColor(color)
            .setTitle(` \`\`\`Please Mention/ID Same One! ${args.slice(1).join(' ')}\`\`\``)
            .setFooter(client.user.username, client.user.avatarURL({ dynamic: true }))
  .setTimestamp()
                )
                if (member.id === normal.author.id)return normal.reply(`**You can't mute yourself**`)
      if (member.id === normal.guild.me.id)return normal.reply(`**You can't mute me dumbass**`)
        let mutedrole = normal.guild.roles.cache.find(ro => ro.name === 'muted')
        if(!mutedrole) {
        try {
        var createdrole = await normal.guild.roles.create({
                      data : {
                        name : 'muted',
                        permissions: [],
                    }});
                        normal.guild.channels.cache.forEach(async (channel, id) => {
                            await channel.createOverwrite(createdrole, {
                                SEND_MESSAGES: false,
                                ADD_REACTIONS : false
                            })
                        })
                } catch (err) {
                console.log(err)
            }};
let muterole = normal.guild.roles.cache.find(r => r.name === 'muted')
         member.roles.add(muterole)
        normal.lineReply(
          new Discord.MessageEmbed()
          .setAuthor(normal.author.tag, normal.author.avatarURL({ dynamic: true }))
          .setColor(color)
          .setDescription(` **Done Has Been Muted
BY : \`${member.user.username}\`**`)
.setFooter(client.user.username, client.user.avatarURL({ dynamic: true }))
            .setTimestamp()

        )
    } 
})

client.on('message', async normal => {
  if (normal.content.startsWith(prefix + "unmute")){
    var args = normal.content.slice(prefix.length).trim().split(/ +/g);
        if(!normal.member.hasPermission('MANAGE_ROLES')) return normal.lineReply(
          new Discord.MessageEmbed()
          .setAuthor(normal.author.tag, normal.author.avatarURL({ dynamic: true }))
          .setColor(color)
          .setTitle(`\`\`\` You Dont Have a Permissions\`\`\``)
          .setFooter(client.user.username, client.user.avatarURL({ dynamic: true }))
            .setTimestamp()
        );
        var member = normal.mentions.members.first()||normal.guild.members.cache.get(args[1])||normal.guild.members.cache.find(m => m.user.username === args.slice(1).join(' '));
                     if(!member) return normal.lineReply(
                       new Discord.MessageEmbed()
                       .setAuthor(normal.author.tag, normal.author.avatarURL({ dynamic: true }))
            .setColor(color)
            .setTitle(`\`\`\`Please Mention/ID Same One! ${args.slice(1).join(' ')}\`\`\``)
            .setFooter(client.user.username, client.user.avatarURL({ dynamic: true }))
  .setTimestamp()
                     )
                let muterole = normal.guild.roles.cache.find(r => r.name === 'muted')
        if(!member.roles.cache.has(muterole.id))return normal.lineReply(`**${member.user.username} is not muted**`)
        await member.roles.remove(muterole);
        normal.lineReply(
          new Discord.MessageEmbed()
          .setAuthor(normal.author.tag, normal.author.avatarURL({ dynamic: true }))
          .setColor(color)
          .setDescription(`**Done Has remove Muted

BY : \`${member.user.username}\`**`)
.setFooter(client.user.username, client.user.avatarURL({ dynamic: true }))
  .setTimestamp()
        )
  }})

///lock

client.on('message', async message => {
    if (message.content.startsWith(prefix + 'lock')) {
        if (!message.member.hasPermission("MANAGE_CHANNELS"))
        return message.lineReply(
          new Discord.MessageEmbed()
          .setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true }))
          .setColor(color)
          .setTitle("```❌ You Dont Have a Permissions```")
          .setFooter(client.user.username, client.user.avatarURL({ dynamic: true }))
            .setTimestamp()
        );

        let channel = message.mentions.channels.first();
        let channel_find = message.guild.channels.cache.find(ch => ch.id == channel);
        if (!channel) channel_find = message.channel
        if (!channel_find) return;
        channel_find.updateOverwrite(message.guild.id, {
            SEND_MESSAGES: false
        });
        message.lineReply(
            new Discord.MessageEmbed()
            .setColor(color)
                  .setFooter(message.guild.name,message.guild.iconURL({dynamic: true}))
            .setDescription(` Done Locked This Channel  ${channel_find.name}`)
        );
    }
});
client.on('message', async message => {
    if (message.content.startsWith(prefix + 'unlock')) {
        if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.lineReply(
          new Discord.MessageEmbed()
          .setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true }))
          .setColor(color)
          .setTitle("```❌ You Dont Have a Permissions```")
          .setFooter(client.user.username, client.user.avatarURL({ dynamic: true }))
            .setTimestamp()
        );
        let channel = message.mentions.channels.first();
        let channel_find = message.guild.channels.cache.find(ch => ch.id == channel);
        if (!channel) channel_find = message.channel;
        if (!channel_find) return;
        channel_find.updateOverwrite(message.guild.id, {
            SEND_MESSAGES: true
        });
        message.lineReply(
            new Discord.MessageEmbed()
            .setColor(color)
            .setFooter(message.guild.name,message.guild.iconURL({dynamic: true}))
            .setDescription(` Done Unlocked This Channel  ${channel_find.name}`)
        );
    }
});

///////tickets

client.on("channelCreate", wanted => {
  if(wanted.parentID == "id category") {
    setTimeout(() => {
      wanted.send(`||@everyone||`,
        new Discord.MessageEmbed()
           .setColor(color)

 .setImage(line)
        .setTimestamp()
                 .setThumbnail(wanted.guild.iconURL({dynamic: true}))
  .setFooter(client.user.username, client.user.avatarURL({ dynamic: true }))

 .setDescription(`
 soon

 `)
      )
    }, 2000);
  }
}); 


///////////////dm
client.on('message', message => {
 if(message.content.startsWith(prefix+ "dm")) {
   if (!message.guild.member(message.author).hasPermission('ADMINISTRATOR'))
            return message.channel.send(
            new Discord.MessageEmbed()
            .setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true }))
            .setColor(color)
            .setTitle(`**You do not have the ADMINISTRATOR script in your roll*`)

            .setFooter(client.user.username, client.user.avatarURL({ dynamic: true }))
            .setTimestamp()
        );
if (!message.guild.me.hasPermission('ADMINISTRATOR'))
            return message.channel.send(
            new Discord.MessageEmbed()
            .setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true }))
            .setColor(color)
            .setTitle(`**You do not have the ADMINISTRATOR script in your roll**`)
            .setFooter(client.user.username, client.user.avatarURL({ dynamic: true }))
            .setTimestamp()
        );
  const args = message.content.split(" ").slice(1).join(" ");
if (!args) return message.channel.send(`Please write the message you will send to him`)
const user = message.mentions.users.first();
if(!user) return message.channel.send (`Please tag the person`)
 user.send(
   new Discord.MessageEmbed()
   .setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true }))
   .setColor(color)
   .setDescription(`> **From :** ${message.author}**


   > **Message :** ${args}
`)
.setFooter(client.user.username, client.user.avatarURL({ dynamic: true }))
            .setTimestamp()
 ).catch(error => message.channel.send(
   new Discord.MessaegEmbed()
   .setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true }))
   .setColor(color)
   .setDescription(`**Especially for the person whose tent you posted is locked**
> \`#\` **Erorr User : <@${user.id}>**
> \`!\` **User Message : ${message.author}**`)
.setFooter(client.user.username, client.user.avatarURL({ dynamic: true }))
            .setTimestamp()
    ))
    message.delete({timeout : 2000})
 message.channel.send(
   new Discord.MessageEmbed()
   .setColor(color)
   .setDescription(`> \`#\` **تم ارسال الرساله بنجاح** 
>  \`#\` **العضو المرسل اليه : <@${user.id}>**
> \`#\` **الشخص الي بعت الرساله : ${message.author}**`)
 )

 }
});

//unban

client.on("message", message => {
  let command = message.content.split(" ")[0];
  if (command == prefix + "unban") {
    if (!message.member.hasPermission("BAN_MEMBERS")) return;
    let args = message.content
      .split(" ")
      .slice(1)
      .join(" ");
    if (args == "all") {
      message.guild.fetchBans().then(zg => {
        zg.cache.forEach(NoNo => {
          message.guild.members.unban(NoNo);
        });
      });
      return message.channel.send("**✅ Unbanned all members **");
    }
    if (!args)
      return message.channel.send("**Please Type the member ID / all**");
    message.guild
    .members.unban(args)
      .then(m => {
        message.channel.send(`**✅ Unbanned ${m.username}**`);
      })
      .catch(stry => {
        message.channel.send(
          `**🙄 - I can't find \`${args}\` in the ban list**`
        );
      });
  }
});

///come

client.on("message" , wanted => { if(wanted.content.startsWith(prefix + "come")) {


    const user = wanted.mentions.users.first()
    if(!user) return wanted.channel.send("**Mention a user**")
    const args = wanted.content.split(" ").slice(2).join(" ");

    user.send(`> ${user} { <#${wanted.channel.id}> } **تم طلبك هنا من فضلك come to Ticket**`)
    wanted.lineReplyNoMention(
      new Discord.MessageEmbed()
      .setColor(color)
      .setAuthor(wanted.author.username,wanted.author.avatarURL({dynamic: true}))

       .setAuthor(wanted.guild.name,wanted.guild.iconURL({dynamic: true}))

      .setDescription(`

      > **Done Send Privet to Seller ${user}**

      > **Please Wait Come Seller**
      `)
      .setTimestamp()
      .setThumbnail(wanted.guild.iconURL({dynamic: true}))
    )
  }
}); 

//profile

client.on('message', message => {
    if (message.content.startsWith(prefix + "profile")) {
      var args = message.content.split(" ").slice(1);
      let user = message.mentions.users.first();
      var men = message.mentions.users.first();
      let uus = message.mentions.users.first() || message.author;

      message.guild.fetchInvites().then(invites => {

        let personalInvites = invites.filter(
          i => i.inviter.id === message.mentions.users.first() || message.author.id
        );

        let inviteCount = personalInvites.reduce((p, v) => v.uses + p, 0);

        var heg;
        if (men) {
          heg = men
        } else {
          heg = message.author
        }
        var mentionned = message.mentions.members.first();
        var h;
        if (mentionned) {
          h = mentionned
        } else {
          h = message.member
        }


        var id = `https://api.probot.io/profile/${uus.id}`
        message.lineReplyNoMention(id)
      }
      );
    }
    });
//server banner
client.on('message', message => {
  if(message.content.startsWith(prefix + 's-banner')) {
     message.lineReply(
      new Discord.MessageEmbed()
      .setThumbnail(message.guild.iconURL({ dynamic: true }))
      .setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true }))
      .setColor(color)
     .setTitle(message.guild.banner ? '**__Done Send Banner__** |' : 'السيرفر ليس لديه اي بانر | The server does not have any banner')
     .setImage(message.guild.bannerURL({ size: 1024 }) || null)
     .setFooter(client.user.username, client.user.avatarURL({ dynamic: true }))
            .setTimestamp()

     )

  }
})
///clear

client.on("message", async message => {
    let command = message.content.toLowerCase().split(" ")[0];
    command = command.slice(prefix.length);
    if (command == "clear") {

        if (!message.channel.guild) return message.reply(`** This Command For Servers Only**`);
        if (!message.member.hasPermission('MANAGE_GUILD'))
        return message.lineReply(
          new Discord.MessageEmbed()
          .setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true }))
          .setColor(color)
          .setTitle("```❌ Dont Have a Permissions```")
          .setFooter(client.user.username, client.user.avatarURL({ dynamic: true }))
  .setTimestamp()
        )

        if (!message.guild.member(client.user).hasPermission('MANAGE_GUILD')) return message.lineReply(`> ** I don't have perms :x:**`);
        let args = message.content.split(" ").slice(1)
        let messagecount = parseInt(args);
        if (args > 100) return message.lineReply(
            new Discord.MessageEmbed()
            .setDescription(`\`\`\`js
i cant delete more than 100 messages 
\`\`\``)
        ).then(messages => messages.delete({ timeout: 5000 }))
        if (!messagecount) messagecount = '100';
        message.channel.messages.fetch({ limit: 100 }).then(messages => message.channel.bulkDelete(messagecount)).then(msgs => {
            message.lineReply(
                new Discord.MessageEmbed()
                .setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true }))
                .setColor(color)
                .setDescription(`\`\`\`js
${msgs.size} messages cleared
\`\`\``)
            ).then(messages =>
                messages.delete({ timeout: 5000 }));
        })
    }
});


///say
client.on("message", msg => {
    let say1 = msg.content.split(" ").slice('1').join(" ")

    if (msg.author.bot) return;
    if (msg.content.startsWith(prefix + 'say')) {
      if (!msg.member.hasPermission('ADMINISTRATOR'))
        return msg.channel.send('Permission required!"ADMINISTRATOR"')
      msg.delete()
      msg.channel.send(say1)

    }
});



client.on("message", function(message){
  if(message.content.includes(client.user.id)){
   const embed = new Discord.MessageEmbed()
   .setColor(color)
     .setDescription(`> **Please Wait..**`)

message.lineReply(embed).then(m=>{
       setTimeout(function(){
         m.edit(
           new Discord.MessageEmbed()
           .setColor(color)
           .setImage(line)
           .setDescription(`**Welcome To __Server Name__** <a:j6:933169852145860638> 

**My Prefix Is : \`${prefix}\`** 

**Dev By : \`PS store\`** `)
           .setThumbnail(message.guild.iconURL({ dynamic: true }))
.setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true }))
            .setFooter(client.user.username, client.user.avatarURL({ dynamic: true }))
            .setTimestamp()
         )
       }, 6000)
     })
  }
})

////say embed
client.on("message", msg => {
    let moonlight = msg.content.split(" ").slice('1').join(" ")
    if (msg.author.bot) return;
    if (msg.content.startsWith(prefix + 's-embed')) {
      if (!msg.member.hasPermission('ADMINISTRATOR'))
        return msg.channel.send('Permission required! "ADMINISTRATOR"')
      msg.delete()
msg.channel.send(
  new Discord.MessageEmbed()      
            .setColor(color)
            .setFooter(msg.guild.name,msg.guild.iconURL({dynamic: true}))

            .setDescription(moonlight)

              .setThumbnail(msg.guild.iconURL({ dynamic: true }))

            .setImage(line)

)

    }
});

// help // 

const but = require("discord-buttons")
but(client)
client.on("message", async msg => {
  if (msg.content === prefix + 'help') {
let argss = msg.content.split(" ").slice('').join(" ");
    const disbut = require('discord-buttons')

    let button = new disbut.MessageButton()
    .setStyle('blurple')
    .setLabel("ADMIN COMMANDS")
    .setID("ADMIN")
    .setEmoji(`🤖`)
    let button2 = new disbut.MessageButton()
    .setStyle('blurple')
    .setLabel("PUBLIC COMMANDS")
    .setID("PUBLIC")
        .setEmoji(`🌍`)
   let button3 = new disbut.MessageButton()
    .setStyle('blurple')
    .setLabel("STORE COMMANDS")
    .setID('BOT')
        .setEmoji(`🛒`)

   let button5 = new disbut.MessageButton()
 .setStyle('blurple')
    .setLabel("MUSIC COMMANDS")
    .setID('PROTECTION')
    .setEmoji(`🎵`)
    let button6 = new disbut.MessageButton()
 .setStyle('red')
    .setLabel("DELETE MESSAGE")
    .setID('DELETE')
    .setEmoji(`❌`)
let nn = await msg.reply({embed :new Discord.MessageEmbed()
.setDescription(`> \`#*\` **\`Hey  : \` ** ${msg.author.username}

> \`*1\` **\`Please Click  Button to Show a Help\`** 

> \`*2\` **\`Thanks as Using Our Bot\`**

`)
.setThumbnail(msg.guild.iconURL({dynamic:true}))

.setAuthor(msg.guild.name,msg.guild.iconURL({dynamic:true}))

.setColor(color)
.setFooter(msg.guild.name,msg.guild.iconURL({dynamic:true}))
.setImage(line)

, buttons : [button,button2,button5,button3,button6]})

let collector = nn.createButtonCollector((button) => button.clicker.user.id === msg.author.id)

collector.on('collect', (b)=> {
  if (b.id === 'ADMIN') {
    nn.edit({embed: new Discord.MessageEmbed().setThumbnail(msg.guild.iconURL({dynamic:true}))


.setColor(color)
.setFooter(msg.guild.name,msg.guild.iconURL({dynamic:true}))
.setImage(line)


.setTitle(`> **( __Admin  Commands__ )**`)

 .setDescription(`


> **${prefix}ban  : ( __ لتبنيد العضو __ )**


> **${prefix}unban  : ( __  لفك التبنيد عن عضو __ )**


> **${prefix}mute  : ( __ لعمل ميوت لي شخص __ )**


> **${prefix}unmute  : ( __ لفك الميوت __ )**


> **${prefix}lock  : ( __ لقفل الاتشنل__ )**


> **${prefix}unlock  : ( __ لفتح الاتشنل __ )**


> **${prefix}role  : ( __ لأعطاء شخص رول __ )**


> **${prefix}re-role  : ( __لأزاله الرول من شخص __ )**



> **${prefix}hide  : ( __ لاخفاء الاتشنل__ )**


> **${prefix}show  : ( __ لاظهار الاتشنل __ )**


> **${prefix}add-emoji : ( __ لاضافة ايموجي لي السرفر__ )**


> **${prefix}nick-name  : ( __ لتغير النيك نيم__ )**


> **${prefix}dm  : ( __ لبعت رساله لشخص ف البرايفت__ )**


> **${prefix}warn : ( __ لارسال ورن__ )**


> **${prefix}clear : ( __ لمسح الشات__ )**


> **${prefix}s-embed : ( __لعمل ساي في ايمبد__ )**


> **${prefix}say : ( __ لعمل ساي بدون ايمبد__ )**



> **${prefix}set-welcome : ( __لتحديد اتشنل الويلكم__ )**








 `),



  buttons : [button,button2,button5,button3,button6]})

  } else if (b.id === 'BOT') {
    nn.edit({embed :new Discord.MessageEmbed()
    .setThumbnail(msg.guild.iconURL({dynamic:true}))


.setColor(color)
.setFooter(msg.guild.name,msg.guild.iconURL({dynamic:true}))
.setImage(line)
.setTitle(`> **( __Store  Commands__ )**`)
.setDescription(`
> **${prefix}come : (__لطلب شخص ال التيكت__)**



   **==========Important===========**


>  \`-/\` **\`جميع الاشياء بداخل التيكت\` ** 


**==========Finshied===========**


`)    

     , buttons : [button,button2,button5,button3,button6]})
} else if (b.id === 'PUBLIC') {
    nn.edit({embed :new Discord.MessageEmbed()
        .setThumbnail(msg.guild.iconURL({dynamic:true}))


.setColor(color)
.setFooter(msg.guild.name,msg.guild.iconURL({dynamic:true}))
.setImage(line)
    .setTitle(`> **( __Public  Commands__ )**`)
    .setDescription(`
> **${prefix}avatar  : ( __لاظهار الافتار الخاص بيك__ )**


> **${prefix}user  : ( __لاظهار معلومات عنك__ )**


> **${prefix}server  : ( __لاظهار معلومات عن السرفر__ )**


> **${prefix}tax  : ( __لاظهار الضريبه __ )**


> **${prefix}s-banner  : ( __لاظهار بنر السرفر __ )**


> **${prefix}ping  : ( __ لاظهار بنج البوت __ )**


> **${prefix}profile  : ( __لاظهار البروفايل الخاص بك __ )**


> **${prefix}boost  : ( __لاظهار بوستات السيرفر __ )**


> **${prefix}allbans   : ( __لاظهار كام واحد متبند في السيرفر __ )**
    `)

    .setColor(color)

     , buttons : [button,button2,button5,button3,button6]})
  } else if (b.id === 'PROTECTION') {
    nn.edit({embed :new Discord.MessageEmbed()


    .setThumbnail(msg.guild.iconURL({dynamic:true}))


.setColor(color)
.setFooter(msg.guild.name,msg.guild.iconURL({dynamic:true}))
.setImage(line)
    .setDescription(`


> **${prefix}play : ( __ Play a song or add it to the queue.__ )**


> **${prefix}stop : ( __ Pause the current song.__ )**


> **${prefix}pause : ( __ Pause the current song.__ )**


> **${prefix}resume : ( __ Resume music if it was paused.__ )**


> **${prefix}np : ( __ Display the currently played song.__ )**


> **${prefix}queue : ( __ Display each song title in queue.__ )**


    `)
    .setTitle(`> **( __Music  Commands__ )**`)

    ///لم يتم اضافه اوامر موسيقي !


    ,
      buttons : [button,button2,button5,button3,button6]}) 
} else if (b.id === 'DELETE') {
    nn.delete({timeout : 1000})
     s.react("❌");
}
})
  }
  })

//boost and level

client.on('message', mor3eb => {
  if(mor3eb.content.startsWith(prefix + "boost")){

 if(mor3eb.author.bot || !mor3eb.guild) return mor3eb.reply("this command for server only")


    let level = mor3eb.guild.premiumTier === 0 ? "No Level" : `${mor3eb.guild.premiumTier}`;

    let boost = mor3eb.guild.premiumSubscriptionCount;



    let embed = new Discord.MessageEmbed()
    .setTitle(`Boost of ${mor3eb.guild.name}`)

.addField("Boost", `${boost}`)
.addField("Level", `${level}`)
 .setColor(color)

 mor3eb.channel.send(embed)

  }
});





//bans

client.on('message', message => {
  if (message.content.startsWith(prefix + "allbans")) {
    if (!message.channel.guild) return;
    message.channel
    message.guild.fetchBans()
      .then(bans => message.channel.send(`<a:ss_3:942445534034141255> **Server Ban List :** ${bans.size} `))
      .catch(console.error);
  }
});






///الامر فارغ للتعديل عليه علي حسب الرغبه
///rules
      client.on('message', function(message) {
    if(message.content.startsWith(prefix + "rules")){
      if (!message.guild.member(message.author).hasPermission('ADMINISTRATOR'))
            return message.channel.send(
            new Discord.MessageEmbed()
            .setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true }))

            .setColor(color)
            .setTitle(`> \`#\` **انت لا تملك برمشن __\`ADMINISTRATOR\`__ في الرول الخاصه بيك**`)
            .setFooter(client.user.username, client.user.avatarURL({ dynamic: true }))
            .setTimestamp()
        );
if (!message.guild.me.hasPermission('ADMINISTRATOR'))
            return message.channel.send(
            new Discord.MessageEmbed()
.setThumbnail(message.guild.iconURL({dynamic: true}))  
            .setColor(color)
            .setTitle(`> \`#\` **انت لا تملك برمشن __\`ADMINISTRATOR\`__ في الرول الخاصه بيك**`)
            .setFooter(client.user.username, client.user.avatarURL({ dynamic: true }))
            .setTimestamp()
        );
      message.delete({timeout: 100});
message.channel.send(
  new Discord.MessageEmbed()
  .setColor(color)
.setThumbnail(message.guild.iconURL({dynamic: true}))  
        .setImage(line)

.setDescription(`1 عدم سب وشتم
2 احترام الناس 
3 لايك واشتراك`)
        .setFooter(client.user.username, client.user.avatarURL({ dynamic: true }))
.setTimestamp()

).then(r=>{
   r.react("اي ريأكت عايزو")
 })
 }})




///role
require('discord-reply')
client.on('message', async(message) => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;
  const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();
if(command === 'role') {
      if(message.channel.type === 'dm') return;
      if (!message.guild.member(message.author).hasPermission('ADMINISTRATOR'))
            return message.channel.send(
            new Discord.MessageEmbed()
            .setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true }))
            .setColor(color)
            .setTitle('> \`#\` **انت لا تملك برمشن __\`ADMINISTRATOR\`__ في الرول الخاصه بيك**')
            .setFooter(client.user.username, client.user.avatarURL({ dynamic: true }))
            .setTimestamp()
        );
    let user = message.mentions.members.first() || message.guild.members.cache.get(args[0])
        let member = message.guild.member(user)
        let role = message.mentions.roles.first() || message.guild.roles.cache.find(r => r.name.toLocaleLowerCase().includes(args[1]))|| message.guild.roles.cache.get(args[1])
        if(!args[0]) return message.channel.send(new Discord.MessageEmbed()
        .setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true }))
        .setColor(color)
        .setDescription(`> **${prefix}role __(@user|user id)__ || __(role name |id)__**`))
        if(!role) return message.channel.send(new Discord.MessageEmbed()
        .setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true }))
        .setColor(color)
        .setDescription(`> \`\`\`Role Not Found!\`\`\` `))

         if(!member.roles.cache.has(role.id)) {
        member.roles.add(role.id)
        message.channel.send(new Discord.MessageEmbed()
        .setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true }))
        .setColor(color)
        .setDescription(`> **The Role** **(${role.name})** **__Was Added To__** **(${member.user.tag})**`))


         }
    }
});

///re-role
require('discord-reply')
client.on('message', async(message) => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;
  const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();
if(command === 're-role') {
      if(message.channel.type === 'dm') return;
      if (!message.guild.member(message.author).hasPermission('ADMINISTRATOR'))
            return message.channel.send(
            new Discord.MessageEmbed()
            .setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true }))
            .setColor(color)
            .setTitle('> \`#\` **انت لا تملك برمشن __\`ADMINISTRATOR\`__ في الرول الخاصه بيك**')
            .setFooter(client.user.username, client.user.avatarURL({ dynamic: true }))
            .setTimestamp()
        );
    let user = message.mentions.members.first() || message.guild.members.cache.get(args[0])
        let member = message.guild.member(user)
        let role = message.mentions.roles.first() || message.guild.roles.cache.find(r => r.name.toLocaleLowerCase().includes(args[1]))|| message.guild.roles.cache.get(args[1])
        if(!args[0]) return message.channel.send(new Discord.MessageEmbed()
        .setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true }))
        .setColor(color)
        .setDescription(`> **${prefix}role __(@user|user id)__ || __(role name |id)__**`))
        if(!role) return message.channel.send(new Discord.MessageEmbed()
        .setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true }))
        .setColor(color)
        .setDescription(`> \`\`\`Role Not Found!\`\`\` `))
        if(member.roles.cache.has(role.id)) {
         member.roles.remove(role.id)
        message.channel.send(new Discord.MessageEmbed()
        .setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true }))
        .setColor(color)
        .setDescription(`> **The Role** **(${role.name})** **__Was Removed From__** **(${member.user.tag})**`))




         }
    }
});







///warn

client.on("message", message => {
  if (message.content.startsWith(prefix + "warn")) {
    if (!message.guild.member(message.author).hasPermission("ADMINISTRATOR"))
      return message.lineReply(
        new Discord.MessageEmbed()
        .setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true }))
        .setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true }))
        .setColor(color)
        .setTitle("```You are not addicted```")
        .setFooter(client.user.username, client.user.avatarURL({ dynamic: true }))
            .setTimestamp()
      );
    if (!message.guild.member(client.user).hasPermission("ADMINISTRATOR"))
      return message.lineReply(
        new Discord.MessageEmbed()
        .setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true }))
        .setColor(color)
        .setTitle("``` ❌ I Dont Have a Permissions```")
        .setFooter(client.user.username, client.user.avatarURL({ dynamic: true }))
            .setTimestamp()
      )
    var user = message.mentions.users.first();

    if (!user)
      return message.lineReply(
        new Discord.MessageEmbed()
        .setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true }))
        .setColor(color)
        .setTitle("```برجاء المنشن علي الشخص مع ذكر السبب | Please tag the person with the reason``` => warn (Mention) : (Reason) ")
        .setFooter(client.user.username, client.user.avatarURL({ dynamic: true }))
            .setTimestamp()
      )
    var args = message.content
      .split(" ")
      .slice(2)
      .join(" ");
    if (!args) return message.lineReply(
      new Discord.MessageEmbed()
      .setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true }))
      .setColor(color)
      .setTitle("```Please write the reason```")
      .setFooter(client.user.username, client.user.avatarURL({ dynamic: true }))
            .setTimestamp()
    )
message.lineReply(
  new Discord.MessageEmbed()
  .setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true }))
  .setColor(color)
  .setDescription(`**From : ${user.username}**

**Reason : ${args}**`)
)
let embed = new Discord.MessageEmbed() 
 .setTitle(`>️ You have Warned
 ${args}`)  

 .setColor(color)  
 .setFooter(client.user.username, client.user.avatarURL({ dynamic: true }))
 .setTimestamp()
 user.send(embed)    
 .then(m => {
  var owners = message.guild.owner
  let embed = new Discord.MessageEmbed() 
  .setThumbnail(message.guild.iconURL({ dynamic: true }))
 .setTitle('**__New warn __**')  
 .addField("`From`",`**The person who made the warning : ${message.author}**`)
 .addField("`To Me`",`**I took the warning : ${user}**`,true)
 .addField("`Message`",`**The message is : ${args}**`)
 .addField("`Time`",`**Time Message : ${message.createdAt.toLocaleString()}**`)

 .setColor(color)    
 .setFooter(client.user.username, client.user.avatarURL({ dynamic: true }))
 .setTimestamp()


owners.send(embed);     
 }) 
  }
});
////remove warn
client.on("message" , message => {
  if(message.content.startsWith(prefix + "remove-warn")) {
    if(!message.member.hasPermission("ADMINISTRATOR")) return;
    let user = message.mentions.users.first()
    if(!user) return message.lineReply("❌ | **Mention a user**")
    if(user.bot) return message.lineReply("🙄 | **Bots don't have warns**")
    if(user.id == message.member.id) return message.lineReply("🙄 | **You can't remove from yourself**")
    if(!db.has(`warns_${user.id}`)) return message.lineReply("❌ | **This user doesn't have any warns**")
    db.subtract(`warns_${user.id}` , 1)
    message.lineReply(`> **Done removing 1 warn for ${user}**`)
  }
});


//////////tag


client.on('message', async message => {
  if(!message.content.startsWith(prefix) || message.author.bot) return;
  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const command = args.shift().toLowerCase();

  if(command === 'tag') {
if(!message.member.hasPermission("MANAGE_NICKNAME")) {
return message.channel.send(`not enought perms`)
}

    let user = await message.mentions.members.first() || await message.guild.members.cache.get(args[0]);
    if(!user) return await message.lineReplyNoMention('__**User?**__');

    await user.setNickname(`tag ${user.user.username}`,'idk').then(async () => {
      await message.lineReplyNoMention('__**Done**__');
    }).catch(err => message.channel.send(`Erorr :${err}`));
  }
});

///suggestions
let sug = ['id channel'];//channel sug

client.on('message', function(message) {
        let args = message.content.split(",");
  if (message.author.bot) return;
if(sug.includes(message.channel.id)) {
    message.delete()
    const embed = new Discord.MessageEmbed()     .setAuthor(`${message.author.tag}`, message.author.avatarURL({ dynamic: true }))
.setColor(color)      .setThumbnail(message.author.avatarURL({ dynamic: true }))
.setDescription(`> **${args}**`)
.setTimestamp()
let attachm = message.attachments.first()
if (attachm) {
    embed.setImage(attachm.proxyURL)
}  
message.channel.send(embed).then(msg => {
 msg.react(`1 react`).then(() => {
 msg.react('2 react')
      })
    message.channel.send({files: [line]});
})
      }
});

////welcome


client.on("message", mor3eb => {
  let wprefix = prefix
    if (mor3eb.content.startsWith(wprefix + "set-welcome")) {
       if (!mor3eb.guild.member(mor3eb.author).hasPermission('ADMINISTRATOR'))
            return mor3eb.lineReply(
            new Discord.MessageEmbed()
            .setAuthor(mor3eb.author.tag, mor3eb.author.avatarURL({ dynamic: true }))
            .setColor(color)
            .setTitle('```انت لست من الادمن-❌```')
            .setFooter(client.user.username, client.user.avatarURL({ dynamic: true }))
  .setTimestamp()

        );
if (!mor3eb.guild.me.hasPermission('ADMINISTRATOR'))
            return mor3eb.lineReply(
            new Discord.MessageEmbed()
            .setAuthor(mor3eb.author.tag, mor3eb.author.avatarURL({ dynamic: true }))
            .setColor(color)
            .setTitle('```ليس معاك رول الادمن-❌```')
            .setFooter(client.user.username, client.user.avatarURL({ dynamic: true }))
  .setTimestamp()
        ); {
        let wmochakis = mor3eb.mentions.channels.first()

    if(!wmochakis) { return mor3eb.lineReply(
      new Discord.MessageEmbed()
      .setAuthor(mor3eb.author.tag, mor3eb.author.avatarURL({ dynamic: true }))
      .setColor(color)
      .setDescription(`**برجاء المنشن علي الاتشنل الخاصه بترحيب**`)
      .setFooter(client.user.username, client.user.avatarURL({ dynamic: true }))
  .setTimestamp()
    ).then(r=> {
      r.react("")///react here
    })
    }


    db.set(`welcomechannel_${mor3eb.guild.id}`, wmochakis.id)

    mor3eb.lineReply(
      new Discord.MessageEmbed()
      .setAuthor(mor3eb.author.tag, mor3eb.author.avatarURL({ dynamic: true }))
      .setColor(color)
      .setDescription(`> **The channel has been set successfully**
> **Channels : ${wmochakis}**`)
.setFooter(client.user.username, client.user.avatarURL({ dynamic: true }))
  .setTimestamp()
    ).then(r=> {
      r.react("")////react here
    })
    }
    }
  })

client.on("guildMemberAdd", (memberadd,type, invite) => {
  let channelget = db.get(`welcomechannel_${memberadd.guild.id}`);
  let messagechannel = client.channels.cache.get(channelget);
  if(channelget === null) { 
    return;
  }
  messagechannel.send(
    new Discord.MessageEmbed()
    .setColor(color)
  .setThumbnail(memberadd.user.avatarURL({ dynamic: true }))

    .setFooter(memberadd.user.username, memberadd.user.avatarURL({ dynamic: true }))

 .setAuthor(memberadd.user.username, memberadd.user.avatarURL({ dynamic: true }))
  .setTimestamp()

    .setDescription(`**Welcome ** 


> **Welcome To Server : \`${memberadd.guild.name}\`**


> **User : ${memberadd.user}**


> **Member ID : \`${memberadd.id}\`**


> **MemberCount : \`${memberadd.guild.memberCount}\`**`)
.setImage(line)
  ).then(s=>{
  s.react("");///react here

  })
})

///token

client.login(process.env.TOKEN)
