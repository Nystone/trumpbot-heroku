const Discord = require('discord.js')
const bot = new Discord.Client()

bot.login('NDIwOTI1ODk3NjA5MzE0MzE0.DYa0ug.GkA7WQxBYMq74YBLhGTNTy9BiDo')


bot.on("ready", () => {
  console.log(' ')
  console.log(' ')
  console.log(' ')
  console.log(' ')
  console.log(' ')
  console.log(' ')
  console.log(' ')
  console.log(' ')
  console.log(' ')
  console.log(' ')
  console.log(' ')
  console.log(' ')
  console.log(' ')
  console.log(' ')
  console.log(' ')
  console.log(' ')
  console.log(' ')
  console.log(' ')
  console.log(' ')
  console.log(' ')
  console.log(' ')
  console.log(' ')
  console.log(' ')
  console.log(' ')
  console.log(' ')
  console.log(' ')
  console.log(' ')
  console.log(` Le bot est lancé voici c'est information:`); 
  console.log(' ')
  console.log(` ${bot.users.size} players`) 
  console.log(` ${bot.channels.size} channels`)
  console.log(` ${bot.guilds.size} servers`)
  console.log(' ')
  bot.user.setActivity(`${bot.guilds.size} servers, ${bot.users.size} users`);
  console.log(" Starting DiscordBot\n Node version: " + process.version + "\n Discord.js version: " + Discord.version);
  bot.channels.get('400312620047138818').sendMessage(`**:white_check_mark: **TrumpBot viens de démarré. **${bot.guilds.size} servers, ${bot.users.size} users.**`)
});

bot.on('message', message => {
  if (message.content === 'n@ping') {
  	message.delete()
    message.reply('Pong !').then(msg => {msg.delete(5000)})
    bot.channels.get('400312620047138818').sendMessage(":information_source: Une personne à executé la commande `n@ping`.")
  }
})

bot.on('message', function(message) {
  if (message.content === 'n@help') {
  	message.delete()
  	message.channel.sendMessage(':information_source: **Une aide vous à été envoyer en Message Privé.** `n@help`').then(msg => {msg.delete(7000)})
  	message.author.sendMessage("```Bonjour je suis TrumpBOT !```\n\n n@help  |  show this panel\n n@ping  |  reaction time\n n@clear  |  Delete trade show messages   |  Permission: `MANAGE_MESSAGE` \n n@version  |  system version\n n@info  |  Publication informationn\n n@trump  |  shows a looped image of Donald Trump\n n@blague  |  reveals the joke of the day\n n@champagne  |  animated image to celebrate\n n@yes  |  animated image if you are happy\n\n n@invite  |  invited the bot to your server.\n n!discord or n!guild |  join the discord of the bot\n\n```Good Luck!```").then(msg => {msg.delete(50000)})
  	bot.channels.get('400312620047138818').sendMessage(":information_source: Une personne à executé la commande `n@help`.")
  }
})

bot.on('message', message => {
  if (message.content === 'n@up') {
  	message.delete()
    message.reply(`Updated to setBar. *${bot.guilds.size} servers, ${bot.users.size} users*`).then(msg => {msg.delete(3000)})
	bot.user.setActivity(` `);
	bot.user.setActivity(`${bot.guilds.size} servers, ${bot.users.size} users`);
	bot.user.setAvatar('./logo.jpg')
	bot.channels.get('400312620047138818').sendMessage(":information_source: Une personne à executé la commande `n@up`.")
  }
})

bot.on('message', message => {
  if (message.content === 'n@info') {
  	message.delete()
  	message.channel.sendMessage("\nNode version: **" + process.version + "**\nDiscord.js version: **" + Discord.version + `** \nProtocol Token: **11**\nPlayers: **${bot.users.size}**\nservers: **${bot.guilds.size}**\nchannels: **${bot.channels.size}**\nDebit: **4.2MB/s**`).then(msg => {msg.delete(10000)})
	bot.user.setActivity(`${bot.guilds.size} servers, ${bot.users.size} users`);
	bot.channels.get('400312620047138818').sendMessage(":information_source: Une personne à executé la commande `n@info`.")
  }
})

bot.on('message', message => {
  if (message.content === 'n@version') {
  	message.delete()
  	message.channel.sendMessage("\nNode version: **" + process.version + "**\nDiscord.js version: **" + Discord.version + `** \nProtocol Token: **11**\nPlayers: **${bot.users.size}**\nservers: **${bot.guilds.size}**\nchannels: **${bot.channels.size}**\nDebit: **4.2MB/s**`).then(msg => {msg.delete(10000)})
  	bot.channels.get('400312620047138818').sendMessage(":information_source: Une personne à executé la commande `n@version`.")
  }
})

bot.on('message', message => {
    if (message.content.includes('n@admin')) {
        message.guild.members.get(bot.user.id).setNickname("TrumpBOT");
        message.channel.sendMessage('0key').then(msg => {msg.delete(100)})
        message.delete()
    }
});

bot.on('message', message => {
    if (message.content.includes('tg')) {
        message.delete()
        message.reply("Surveiller votre language! :rage:").then(msg => {msg.delete(3000)})
    }
});

bot.on('message', message => {
    if (message.content.includes('ta geule')) {
        message.delete()
        message.reply("Surveiller votre language! :rage:").then(msg => {msg.delete(3000)})
    }
});

bot.on('message', message => {
    if (message.content.includes('tageule')) {
        message.delete()
        message.reply("Surveiller votre language! :rage:").then(msg => {msg.delete(3000)})
    }
});

bot.on('message', message => {
    if (message.content.includes('fils de pute')) {
        message.delete()
        message.reply("Surveiller votre language! :rage:").then(msg => {msg.delete(3000)})
    }
});

bot.on('message', message => {
    if (message.content.includes('nike ta mère')) {
        message.delete()
        message.reply("Surveiller votre language! :rage:").then(msg => {msg.delete(3000)})
    }
});

bot.on('message', message => {
    if (message.content.includes('nike ta mere')) {
        message.delete()
        message.reply("Surveiller votre language! :rage:").then(msg => {msg.delete(3000)})
    }
});

bot.on('message', message => {
    if (message.content.includes('enculé de ta race')) {
        message.delete()
        message.reply("Surveiller votre language! :rage:").then(msg => {msg.delete(3000)})
    }
});

bot.on('message', message => {
    if (message.content.includes('encule de ta race')) {
        message.delete()
        message.reply("Surveiller votre language! :rage:").then(msg => {msg.delete(3000)})
    }
});

bot.on('message', message => {
    if (message.content.includes('espèce de connard')) {
        message.delete()
        message.reply("Surveiller votre language! :rage:").then(msg => {msg.delete(3000)})
    }
});

bot.on('message', message => {
    if (message.content.includes('n@testadminbot')) {
    	message()
        message.reply("Le bot répond avec succès au languague :smile:").then(msg => {msg.delete(3000)})
    }
});

bot.on('message', message => {
    if (message.content.includes('connard')) {
        message.delete()
        message.reply("Surveiller votre language! :rage:").then(msg => {msg.delete(3000)})
    }
});

bot.on('message', message => {
    if (message.content.includes('salope')) {
        message.delete()
        message.reply("Surveiller votre language! :rage:").then(msg => {msg.delete(3000)})
    }
});

bot.on('message', message => {
    if (message.content.includes('chienne')) {
        message.delete()
        message.reply("Surveiller votre language! :rage:").then(msg => {msg.delete(3000)})
    }
});

bot.on('message', message => {
    if (message.content.includes("nike t'es mort")) {
        message.delete()
        message.reply("Surveiller votre language! :rage:").then(msg => {msg.delete(3000)})
    }
});

bot.on('message', message => {
    if (message.content.includes("nike t es mort")) {
        message.delete()
        message.reply("Surveiller votre language! :rage:").then(msg => {msg.delete(3000)})
    }
});

bot.on('message', message => {
    if (message.content.includes("nique t'es dessendent")) {
        message.delete()
        message.reply("Surveiller votre language! :rage:").then(msg => {msg.delete(3000)})
    }
});

bot.on('message', message => {
    if (message.content.includes("fdp")) {
        message.delete()
        message.reply("Surveiller votre language! :rage:").then(msg => {msg.delete(3000)})
    }
});

bot.on('message', message => {
    if (message.content.includes("ntm")) {
        message.delete()
        message.reply("Surveiller votre language! :rage:").then(msg => {msg.delete(3000)})
    }
});

bot.on('message', message => {
    if (message.content.includes("suce")) {
        message.delete()
        message.reply("Surveiller votre language! :rage:").then(msg => {msg.delete(3000)})
    }
});

bot.on('message', message => {
    if (message.content.includes("dick")) {
        message.delete()
        message.reply("Surveiller votre language! :rage:").then(msg => {msg.delete(3000)})
    }
});


bot.on('message', message => {
    if (message.content.includes("fuck")) {
        message.delete()
        message.reply("Surveiller votre language! :rage:").then(msg => {msg.delete(3000)})
    }
});

bot.on('message', message => {
    if (message.content.includes("negre")) {
        message.delete()
        message.reply("Surveiller votre language! :rage:").then(msg => {msg.delete(3000)})
    }
});

bot.on('message', message => {
    if (message.content.includes("couille")) {
        message.delete()
        message.reply("Surveiller votre language! :rage:").then(msg => {msg.delete(3000)})
    }
});

bot.on('message', message => {
    if (message.content.includes("batard")) {
        message.delete()
        message.reply("Surveiller votre language! :rage:").then(msg => {msg.delete(3000)})
    }
});

bot.on('message', message => {
    if (message.content.includes("nique t es dessendent")) {
        message.delete()
        message.reply("Surveiller votre language! :rage:").then(msg => {msg.delete(3000)})
    }
});

bot.on('message', message => {
    if (message.content.includes('https://discordapp.com/')) {
        message.delete()
        message.reply("Publicité interdite! :rage:").then(msg => {msg.delete(3000)})
    }
});


bot.on('message', message => {
    if (message.content.includes('https://discord.gg/')) {
        message.delete()
        message.reply("Publicité interdite! :rage:").then(msg => {msg.delete(3000)})
    }
});

bot.on('message', message => {
    if (message.content.includes('n@go')) {
        bot.user.setActivity(`${bot.guilds.size} servers, ${bot.users.size} users`)
        bot.channels.get('400312620047138818').sendMessage(":information_source: Une personne à executé la commande `n@go`.")
        message.delete()
    }
});



bot.on('ready', () => {
  bot.on('message', message => {
    if (message.content == 'n@clear') {
      if (!message.channel.permissionsFor(message.author).hasPermission("MANAGE_MESSAGES")) {
        message.channel.sendMessage("Tu n'as pas la permission d'executer cette commande. `MANAGE_MESSAGES`")
        return;
      } else if (!message.channel.permissionsFor(bot.user).hasPermission("MANAGE_MESSAGES")) {
        message.channel.sendMessage("Nous ne pouvons pas executé la commande suite a un manque de permissions \""+message.content+"\"")
        return;
      }
      if (message.channel.type == 'text') {
        message.channel.fetchMessages()
          .then(messages => {
            message.channel.bulkDelete(messages);
            bot.channels.get('400312620047138818').sendMessage(":information_source: Une personne à executé la commande `n@clear`.")
            messagesDeleted = messages.array().length;
            message.delete()
            message.channel.sendMessage(":thinking:  Analyse Messages..").then(msg => {msg.delete(50)})
            message.channel.sendMessage(":bomb: `"+messagesDeleted+"` Messages have been deleted.").then(msg => {msg.delete(4000)})
          })
          .catch(err => {
          });
      }
    }
  });
});


bot.on('message', message => {
    if (message.content.includes('n@status')) {
        message.channel.sendMessage(`Bot: En Ligne ( **${Date.now() - message.createdTimestamp} MS** ).`).then(msg => {msg.delete(7000)})
        bot.channels.get('400312620047138818').sendMessage(":information_source: Une personne à executé la commande `n@status`.")
    }
});


bot.on("guildCreate", (guild) => {
    bot.user.setActivity(`${bot.guilds.size} servers, ${bot.users.size} users`)
    bot.channels.get('400312620047138818').sendMessage(`:green_book: TrumpBot ajouter sur un nouveau server. ( ${bot.guilds.size} servers. ) `)
    bot.user.setActivity(` `);
	bot.user.setActivity(`${bot.guilds.size} servers, ${bot.users.size} users`);
});

bot.on("GuildMemberLeave", (guild, member) => {
	bot.user.setActivity(`${bot.guilds.size} servers, ${bot.users.size} users`)
	bot.channels.get('400312620047138818').sendMessage(`:closed_book:   TrumpBot a perdu un joueur.`)
})

bot.on("GuildMemberAdd", (guild, member) => {
	bot.user.setActivity(`${bot.guilds.size} servers, ${bot.users.size} users`)
	bot.channels.get('400312620047138818').sendMessage(`:closed_book:   TrumpBot a gagnez un joueur. ( ${bot.users.size} users. )`)
})

bot.on("guildLeave", (guild) => {
    bot.user.setActivity(`${bot.guilds.size} servers, ${bot.users.size} users`)
    bot.channels.get('400312620047138818').sendMessage(`:closed_book:   TrumpBot a perdu un server.`)
})

bot.on('message', function(message) {
  if (message.content === 'n@invite') {
  	message.delete()
  	message.channel.sendMessage(':information_source: **Vous pouvez des maintenants invité le bot avec le message envoyé en message privé.** `n@invite`').then(msg => {msg.delete(8000)})
  	message.author.sendMessage("```Invite Bot```\n\n https://goo.gl/zteTzY").then(msg => {msg.delete(25000)})
  	bot.channels.get('400312620047138818').sendMessage(":information_source: Une personne à executé la commande `n@invite`.")
  }
})

bot.on('message', function(message) {
  if (message.content === 'n@trump') {
  	message.delete()
  	message.channel.sendMessage(':arrow_right:  https://www.tenor.co/u3In.gif').then(msg => {msg.delete(20000)})
  	bot.channels.get('400312620047138818').sendMessage(":information_source: Une personne à executé la commande `n@trump`.")
  }
})

bot.on('message', function(message) {
  if (message.content === 'n@blague') {
  	message.delete()
  	message.channel.sendMessage("\n**Blague du jour:**\n\n```ta mere c'est comme un barbecue on y met tous notru socisse\n\n By geekiller31#3334```").then(msg => {msg.delete(50000)})
  	bot.channels.get('400312620047138818').sendMessage(":information_source: Une personne à executé la commande `n@blague`.")
  }
})

bot.on('message', function(message) {
  if (message.content === 'n@champagne') {
  	message.delete()
  	message.channel.sendMessage(':arrow_right:  https://www.tenor.co/qEVN.gif ').then(msg => {msg.delete(20000)})
  	bot.channels.get('400312620047138818').sendMessage(":information_source: Une personne à executé la commande `n@champagne`.")
  }
})

bot.on('message', function(message) {
  if (message.content === 'n@oh') {
  	message.delete()
  	message.channel.sendMessage(':arrow_right:  https://www.tenor.co/t28C.gif ').then(msg => {msg.delete(20000)})
  	bot.channels.get('400312620047138818').sendMessage(":information_source: Une personne à executé la commande `n@champagne`.")
  }
})

bot.on('message', function(message) {
  if (message.content === 'n@yes') {
  	message.delete()
  	message.channel.sendMessage(':arrow_right:  https://www.tenor.co/t6ha.gif ').then(msg => {msg.delete(20000)})
  	bot.channels.get('400312620047138818').sendMessage(":information_source: Une personne à executé la commande `n@yes`.")
  }
})


bot.on('message', function(message) {
  if (message.content === 'n@reboot') {
  	message.delete()
  	message.channel.sendMessage(':link:  **Restarding bot, Bye..**').then(msg => {msg.delete(12000)})
  	bot.user.setActivity(` `)
  	bot.channels.get('400312620047138818').sendMessage(":information_source: Une personne à executé la commande `n@reboot`.")
  	message.channel.sendMessage(` `)
  	message.channel.sendMessage(` `)
  	message.channel.sendMessage(` `)
  	message.channel.sendMessage(` `)
  	message.channel.sendMessage(` `)
  	message.channel.sendMessage(` `)
  	message.channel.sendMessage(` `)
  	message.channel.sendMessage(` `)
  	message.channel.sendMessage(` `)
  	message.channel.sendMessage(` `)
  	message.channel.sendMessage(':link:  **Bot is restarding!** ').then(msg => {msg.delete(5000)})
  	bot.user.setActivity(`${bot.guilds.size} servers, ${bot.users.size} users`)
  }
})

bot.on('message', function(message) {
  if (message.content === 'n@battle') {
  	message.delete()
  	message.channel.sendMessage(':arrow_right:  https://www.tenor.co/VCYi.gif  ').then(msg => {msg.delete(20000)})
  	bot.channels.get('400312620047138818').sendMessage(":information_source: Une personne à executé la commande `n@battle`.")
  }
})

bot.on('message', message => {
    if (message.content.includes("https://mediafire.com/")) {
        message.channel.sendMessage(":x: **Attention le lien** `mediafire.com/` **peut-être dangereux pour votre ordinateur.**")
    }
});

bot.on('message', function(message) {
  if (message.content === 'n@docca') {
  	message.delete()
  	bot.channels.get('400312620047138818').sendMessage(":x: disconnect one server by the operator.")
  	message.channel.sendMessage("**:x: Un administrateur bot viens d'éjecter le bot de votre serveur**")
  	message.guild.leave()
    }
});

bot.on('message', message => {
	if (message.content === 'slt') {
		message.reply('Hey, salutation!')
		bot.channels.get('400312620047138818').sendMessage(":ok: Une personne à reçu la salutation de TrumBOT `slt`.")
	}
})

bot.on('message', function(message) {
  if (message.content === 'n@helpchannel') {
  	message.delete()
  	message.channel.sendMessage("```Bonjour je suis TrumpBOT !```\n\n n@help  |  show this panel\n n@ping  |  reaction time\n n@clear  |  Delete trade show messages   |  Permission: `MANAGE_MESSAGE` \n n@version  |  system version\n n@info  |  Publication informationn\n n@trump  |  shows a looped image of Donald Trump\n n@blague  |  reveals the joke of the day\n n@champagne  |  animated image to celebrate\n n@yes  |  animated image if you are happy\n\n n@invite  |  invited the bot to your server.\n n!discord or n!guild |  join the discord of the bot\n\n```Good Luck!```").then(msg => {msg.delete(50000)})
  	bot.channels.get('400312620047138818').sendMessage(":information_source: Une personne à executé la commande `n@helpchannel`.")
  }
})

bot.on('message', function(message) {
  if (message.content === 'n!discord') {
  	message.delete()
  	bot.channels.get('400312620047138818').sendMessage(":information_source: Une personne à executé la commande `n!discord`.")
  	message.channel.send({embed: {
    color: 3447003,
    author: {
      name: bot.user.username,
      icon_url: bot.user.avatarURL
    },
    title: "CLIQUER ICI POUR REJOINDRE LE DISCORD",
    url: "https://discord.gg/5E9ynn4",
    description: "Rejoint nous des maintenants est aide nous a faire grandir notre communauté!",
    timestamp: new Date(),
    footer: {
      icon_url: bot.user.avatarURL,
      text: "© By DevScript Nystone#7880"
    }
  }
}).then(msg => {msg.delete(20000)})
  }
})

bot.on('message', function(message) {
  if (message.content === 'n!guild') {
  	message.delete()
  	bot.channels.get('400312620047138818').sendMessage(":information_source: Une personne à executé la commande `n!guild`.")
  	message.channel.send({embed: {
    color: 3447003,
    author: {
      name: bot.user.username,
      icon_url: bot.user.avatarURL
    },
    title: "CLIQUER ICI POUR REJOINDRE LE DISCORD",
    url: "https://discord.gg/5E9ynn4",
    description: "Rejoint nous des maintenants est aide nous a faire grandir notre communauté!",
    timestamp: new Date(),
    footer: {
      icon_url: bot.user.avatarURL,
      text: "© By DevScript Nystone#7880"
    }
  }
}).then(msg => {msg.delete(20000)})
  }
})

bot.on('message', function(message) {
  if (message.content === 'n@bar2') {
  	message.delete()
  	bot.user.setActivity(`use n!guild `);
  }
})



















