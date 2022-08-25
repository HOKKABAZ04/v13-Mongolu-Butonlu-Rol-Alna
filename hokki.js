const { Client, Intents , Collection, MessageActionRow, MessageSelectMenu, Discord} = require('discord.js');
const client = new Client({ 
    intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MEMBERS,
    Intents.FLAGS.GUILD_BANS,
    Intents.FLAGS.GUILD_EMOJIS_AND_STICKERS,
    Intents.FLAGS.GUILD_INTEGRATIONS,
    Intents.FLAGS.GUILD_WEBHOOKS,
    Intents.FLAGS.GUILD_INVITES,
    Intents.FLAGS.GUILD_VOICE_STATES,
    Intents.FLAGS.GUILD_PRESENCES,
    Intents.FLAGS.GUILD_MESSAGES,
    Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
    Intents.FLAGS.GUILD_MESSAGE_TYPING,
    Intents.FLAGS.DIRECT_MESSAGES,
    Intents.FLAGS.DIRECT_MESSAGE_REACTIONS,
    Intents.FLAGS.DIRECT_MESSAGE_TYPING
] 
});
const { joinVoiceChannel } = require('@discordjs/voice');
const hokkabazbro = require("././src/config/HOKKABAZ.json");
const moment = require("moment")
const {  Bot_Token, Bot_Durum, Bot_Status } = hokkabazbro.Bot

moment.locale("tr");


require('./src/handlers/functions.js')(client);
require('./src/handlers/mongoHandler.js');
require('./src/handlers/eventHandler.js');


const prefix = hokkabazbro.Bot.Bot_Prefix;

client.annen = new Collection(); 
client.aliases = new Collection();

["command"].forEach(handler => {
  require(`./src/events/commandsLoad`)(client);
}); 



client.on("messageCreate", async message => {
  
  

  if (message.author.bot) return; 
  if (!message.guild) return; 

  if (!message.content.startsWith(prefix)) return; 

  const args = message.content.slice(prefix.length).trim().split(/ +/g); 
  const cmd = args.shift().toLowerCase(); 

  if (cmd.length === 0) return; 

  var command = client.annen.get(cmd); 
  if (!command) command = client.annen.get(client.aliases.get(cmd));


  if (command) 
  {
    try {
      command.çalıştır(client, message, args, message.author, args.join(" "), prefix)
    } catch (error) {
      console.log(error)
    }
  } else 
  return 
    
});





client.on('ready', () => { 
    joinVoiceChannel({
  channelId: hokkabazbro.Bot.Bot_VoiceChannel,
  guildId: hokkabazbro.Server.GuildID,
  adapterCreator: client.guilds.cache.get(hokkabazbro.Server.GuildID).voiceAdapterCreator
 
});
  });

client.on('ready', () => {
  client.user.setActivity(Bot_Durum)
  client.user.setStatus(Bot_Status)
}); 
 

 client.on("interactionCreate",async (interaction, message) => {

  if(interaction.isButton()) {
    
  if(interaction.customId === "Lovers") {
      let member = interaction.member
      if(member.roles.cache.has(hokkabazbro.iliski.Lovers)) {
        await member.roles.remove(hokkabazbro.iliski.Lovers);
        await interaction.reply({ content: `<@&${hokkabazbro.iliski.Lovers}> rolü üzerinizden alındı`, ephemeral: true });
      } else {
        await member.roles.add(hokkabazbro.iliski.Lovers);
        await interaction.reply({ content: `<@&${hokkabazbro.iliski.Lovers}> üzerinize verildi`, ephemeral: true });
      };
    };
  
  
  if(interaction.customId === "Alone") {
      let member = interaction.member
      if(member.roles.cache.has(hokkabazbro.iliski.Alone)) {
        await member.roles.remove(hokkabazbro.iliski.Alone);
        await interaction.reply({ content: `<@&${hokkabazbro.iliski.Alone}> rolü üzerinizden alındı`, ephemeral: true });
      } else {
        await member.roles.add(hokkabazbro.iliski.Alone);
        await interaction.reply({ content: `<@&${hokkabazbro.iliski.Alone}> üzerinize verildi`, ephemeral: true });
      };
    };
  
if(interaction.customId === "LGBT") {
      let member = interaction.member
      if(member.roles.cache.has(hokkabazbro.iliski.LGBT)) {
        await member.roles.remove(hokkabazbro.iliski.LGBT);
        await interaction.reply({ content: `<@&${hokkabazbro.iliski.LGBT}> rolü üzerinizden alındı`, ephemeral: true });
      } else {
        await member.roles.add(sramtandayı.iliski.LGBT);
        await interaction.reply({ content: `<@&${hokkabazbro.iliski.LGBT}> üzerinize verildi`, ephemeral: true });
      };
    };
   
   if(interaction.customId === "anyone") {
      let member = interaction.member
      if(member.roles.cache.has(hokkabazbro.iliski.anyone)) {
        await member.roles.remove(hokkabazbro.iliski.anyone);
        await interaction.reply({ content: `<@&${hokkabazbro.iliski.anyone}> rolü üzerinizden alındı`, ephemeral: true });
      } else {
        await member.roles.add(hokkabazbro.iliski.anyone);
        await interaction.reply({ content: `<@&${hokkabazbro.iliski.anyone}> üzerinize verildi`, ephemeral: true });
      };
    };
   
   
     if(interaction.customId === "etkinlik") {
      let member = interaction.member
      if(member.roles.cache.has(hokkabazbro.katilim.etkinlik)) {
        await member.roles.remove(hokkabazbro.katilim.etkinlik);
        await interaction.reply({ content: `<@&${hokkabazbro.katilim.etkinlik}> rolü üzerinizden alındı`, ephemeral: true });
      } else {
        await member.roles.add(hokkabazbro.katilim.etkinlik);
        await interaction.reply({ content: `<@&${hokkabazbro.katilim.etkinlik}> üzerinize verildi`, ephemeral: true });
      };
    };
    
    
    if(interaction.customId === "cekilis") {
      let member = interaction.member
      if(member.roles.cache.has(hokkabazbro.katilim.cekilis)) {
        await member.roles.remove(hokkabazbro.katilim.cekilis);
        await interaction.reply({ content: `<@&${hokkabazbro.katilim.cekilis}> rolü üzerinizden alındı`, ephemeral: true });
      } else {
        await member.roles.add(hokkabazbro.katilim.cekilis);
        await interaction.reply({ content: `<@&${hokkabazbro.katilim.cekilis}> üzerinize verildi`, ephemeral: true });
      };
    };
  
    if(interaction.customId === "vk") {
        let member = interaction.member
        if(member.roles.cache.has(hokkabazbro.game.vk)) {
          await member.roles.remove(hokkabazbro.game.vk);
          await interaction.reply({ content: `<@&${hokkabazbro.game.vk}> rolü üzerinizden alındı`, ephemeral: true });
        } else {hokkabazbro
          await member.roles.add(hokkabazbro.game.vk);
          await interaction.reply({ content: `<@&${hokkabazbro.game.vk}> üzerinize verildi`, ephemeral: true });
        };
      };


      if(interaction.customId === "dc") {
        let member = interaction.member
        if(member.roles.cache.has(hokkabazbro.game.dc)) {
          await member.roles.remove(hokkabazbro.game.dc);
          await interaction.reply({ content: `<@&${hokkabazbro.game.dc}> rolü üzerinizden alındı`, ephemeral: true });
        } else {
          await member.roles.add(hokkabazbro.game.dc);
          await interaction.reply({ content: `<@&${hokkabazbro.game.dc}> üzerinize verildi`, ephemeral: true });
        };
      };



      if(interaction.customId === "gartic") {
        let member = interaction.member
        if(member.roles.cache.has(hokkabazbro.game.gartic)) {
          await member.roles.remove(hokkabazbro.game.gartic);
          await interaction.reply({ content: `<@&${hokkabazbro.game.gartic}> rolü üzerinizden alındı`, ephemeral: true });
        } else {
          await member.roles.add(hokkabazbro.game.gartic);
          await interaction.reply({ content: `<@&${hokkabazbro.game.gartic}> üzerinize verildi`, ephemeral: true });
        };
      };

 if(interaction.customId === 'boga') {
 let member = interaction.member
if(member.roles.cache.has(hokkabazbro.burç.boga)) {
await member.roles.remove(hokkabazbro.burç.boga);
await interaction.reply({ content: `<@&${hokkabazbro.burç.boga}> rolü üzerinizden alındı`, ephemeral: true });
} else {
await member.roles.add(hokkabazbro.burç.boga);
await interaction.reply({ content: `<@&${hokkabazbro.burç.boga}> üzerinize verildi`, ephemeral: true });


}; 
};

if(interaction.customId === "ikizler") {
let member = interaction.member
if(member.roles.cache.has(hokkabazbro.burç.ikizler)) {
await member.roles.remove(hokkabazbro.burç.ikizler);
await interaction.reply({ content: `<@&${hokkabazbro.burç.ikizler}> rolü üzerinizden alındı`, ephemeral: true });
} else {
await member.roles.add(hokkabazbro.burç.ikizler);
await interaction.reply({ content: `<@&${hokkabazbro.burç.ikizler}> üzerinize verildi`, ephemeral: true });





};


};


if(interaction.customId === 'yengec') {
let member = interaction.member
if(member.roles.cache.has(hokkabazbro.burç.yengec)) {
await member.roles.remove(hokkabazbro.burç.yengec);
await interaction.reply({ content: `<@&${hokkabazbro.burç.yengec}> rolü üzerinizden alındı`, ephemeral: true });
} else {
await member.roles.add(hokkabazbro.burç.yengec);
await interaction.reply({ content: `<@&${hokkabazbro.burç.yengec}> üzerinize verildi`, ephemeral: true });



}; 
};

if(interaction.customId === "aslan") {
let member = interaction.member
if(member.roles.cache.has(hokkabazbro.burç.aslan)) {
await member.roles.remove(hokkabazbro.burç.aslan);
await interaction.reply({ content: `<@&${hokkabazbro.burç.aslan}> rolü üzerinizden alındı`, ephemeral: true });
} else {
await member.roles.add(hokkabazbro.burç.aslan);
await interaction.reply({ content: `<@&${hokkabazbro.burç.aslan}> üzerinize verildi`, ephemeral: true });



};
};



if(interaction.customId === 'basak') {
let member = interaction.member
if(member.roles.cache.has(hokkabazbro.burç.basak)) {
await member.roles.remove(hokkabazbro.burç.basak);
await interaction.reply({ content: `<@&${hokkabazbro.burç.basak}> rolü üzerinizden alındı`, ephemeral: true });
} else {
await member.roles.add(hokkabazbro.burç.basak);
await interaction.reply({ content: `<@&${hokkabazbro.burç.basak}> üzerinize verildi`, ephemeral: true });


}; 
};

if(interaction.customId === "terazi") {
let member = interaction.member
if(member.roles.cache.has(hokkabazbro.burç.terazi)) {
await member.roles.remove(hokkabazbro.burç.terazi);
await interaction.reply({ content: `<@&${hokkabazbro.burç.terazi}> rolü üzerinizden alındı`, ephemeral: true });
} else {
await member.roles.add(hokkabazbro.burç.terazi);
await interaction.reply({ content: `<@&${hokkabazbro.burç.terazi}> üzerinize verildi`, ephemeral: true });


};
};


if(interaction.customId === 'koc') {
let member = interaction.member
if(member.roles.cache.has(hokkabazbro.burç.koc)) {
await member.roles.remove(hokkabazbro.burç.koc);
await interaction.reply({ content: `<@&${hokkabazbro.burç.koc}> rolü üzerinizden alındı`, ephemeral: true });
} else {
await member.roles.add(hokkabazbro.burç.koc);
await interaction.reply({ content: `<@&${hokkabazbro.burç.koc}> üzerinize verildi`, ephemeral: true });

}; 
};

if(interaction.customId === "akrep") {
let member = interaction.member
if(member.roles.cache.has(hokkabazbro.burç.akrep)) {
await member.roles.remove(hokkabazbro.burç.akrep);
await interaction.reply({ content: `<@&${hokkabazbro.burç.akrep}> rolü üzerinizden alındı`, ephemeral: true });
} else {
await member.roles.add(hokkabazbro.burç.akrep);
await interaction.reply({ content: `<@&${hokkabazbro.burç.akrep}> üzerinize verildi`, ephemeral: true });

};
};

if(interaction.customId === "yay") {
let member = interaction.member
if(member.roles.cache.has(hokkabazbro.burç.yay)) {
await member.roles.remove(hokkabazbro.burç.yay);
await interaction.reply({ content: `<@&${hokkabazbro.burç.yay}> rolü üzerinizden alındı`, ephemeral: true });
} else {
await member.roles.add(hokkabazbro.burç.yay);
await interaction.reply({ content: `<@&${hokkabazbro.burç.yay}> üzerinize verildi`, ephemeral: true });


};
};

if(interaction.customId === "oglak") {
let member = interaction.member
if(member.roles.cache.has(hokkabazbro.burç.oglak)) {
await member.roles.remove(hokkabazbro.burç.oglak);
await interaction.reply({ content: `<@&${hokkabazbro.burç.oglak}> rolü üzerinizden alındı`, ephemeral: true });
} else {
await member.roles.add(hokkabazbro.burç.oglak);
await interaction.reply({ content: `<@&${hokkabazbro.burç.oglak}> üzerinize verildi`, ephemeral: true });


};
};

if(interaction.customId === "kova") {
let member = interaction.member
if(member.roles.cache.has(hokkabazbro.burç.kova)) {
await member.roles.remove(hokkabazbro.burç.kova);
await interaction.reply({ content: `<@&${hokkabazbro.burç.kova}> rolü üzerinizden alındı`, ephemeral: true });
} else {
await member.roles.add(hokkabazbro.burç.kova);
await interaction.reply({ content: `<@&${hokkabazbro.burç.kova}> üzerinize verildi`, ephemeral: true });


};
};

if(interaction.customId === "balık") {
let member = interaction.member
if(member.roles.cache.has(hokkabazbro.burç.balık)) {
await member.roles.remove(hokkabazbro.burç.balık);
await interaction.reply({ content: `<@&${hokkabazbro.burç.balık}> rolü üzerinizden alındı`, ephemeral: true });
} else {
await member.roles.add(hokkabazbro.burç.balık);
await interaction.reply({ content: `<@&${hokkabazbro.burç.balık}> üzerinize verildi`, ephemeral: true });


};
}; // balık //////////////////////




if(interaction.customId === "siyah") {
  let member = interaction.member
  if(member.roles.cache.has(hokkabazbro.color.siyah)) {
    await member.roles.remove(hokkabazbro.color.siyah);
    await interaction.reply({ content: `<@&${hokkabazbro.color.siyah}> rolü üzerinizden alındı`, ephemeral: true });
  } else {
    await member.roles.add(hokkabazbro.color.siyah);
    await interaction.reply({ content: `<@&${hokkabazbro.color.siyah}> üzerinize verildi`, ephemeral: true });
  };
};


if(interaction.customId === "beyaz") {
  let member = interaction.member
  if(member.roles.cache.has(hokkabazbro.color.beyaz)) {
    await member.roles.remove(hokkabazbro.color.beyaz);
    await interaction.reply({ content: `<@&${hokkabazbro.color.beyaz}> rolü üzerinizden alındı`, ephemeral: true });
  } else {
    await member.roles.add(hokkabazbro.color.beyaz);
    await interaction.reply({ content: `<@&${hokkabazbro.color.beyaz}> üzerinize verildi`, ephemeral: true });
  };
};

if(interaction.customId === "sarı") {
  let member = interaction.member
  if(member.roles.cache.has(hokkabazbro.color.sarı)) {
    await member.roles.remove(hokkabazbro.color.sarı);
    await interaction.reply({ content: `<@&${hokkabazbro.color.sarı}> rolü üzerinizden alındı`, ephemeral: true });
  } else {
    await member.roles.add(hokkabazbro.color.sarı);
    await interaction.reply({ content: `<@&${hokkabazbro.color.sarı}> üzerinize verildi`, ephemeral: true });
  };
};

if(interaction.customId === "mor") {
  let member = interaction.member
  if(member.roles.cache.has(hokkabazbro.color.mor)) {
    await member.roles.remove(hokkabazbro.color.mor);
    await interaction.reply({ content: `<@&${hokkabazbro.color.mor}> rolü üzerinizden alındı`, ephemeral: true });
  } else {
    await member.roles.add(hokkabazbro.color.mor);
    await interaction.reply({ content: `<@&${hokkabazbro.color.mor}> üzerinize verildi`, ephemeral: true });
  };
};

if(interaction.customId === "turuncu") {
  let member = interaction.member
  if(member.roles.cache.has(hokkabazbro.color.turuncu)) {
    await member.roles.remove(hokkabazbro.color.turuncu);
    await interaction.reply({ content: `<@&${hokkabazbro.color.turuncu}> rolü üzerinizden alındı`, ephemeral: true });
  } else {
    await member.roles.add(hokkabazbro.color.turuncu);
    await interaction.reply({ content: `<@&${hokkabazbro.color.turuncu}> üzerinize verildi`, ephemeral: true });
  };
};


 if(interaction.customId === "yesil") {
  let member = interaction.member
  if(member.roles.cache.has(hokkabazbro.color.yesil)) {
    await member.roles.remove(hokkabazbro.color.yesil);
    await interaction.reply({ content: `<@&${hokkabazbro.color.yesil}> rolü üzerinizden alındı`, ephemeral: true });
  } else {
    await member.roles.add(hokkabazbro.color.yesil);
    await interaction.reply({ content: `<@&${hokkabazbro.color.yesil}> üzerinize verildi`, ephemeral: true });
  };
};



if(interaction.customId === "mavi") {
    let member = interaction.member
    if(member.roles.cache.has(hokkabazbro.color.mavi)) {
      await member.roles.remove(hokkabazbro.color.mavi);
      await interaction.reply({ content: `<@&${hokkabazbro.color.mavi}> rolü üzerinizden alındı`, ephemeral: true });
    } else {
      await member.roles.add(hokkabazbro.color.mavi);
      await interaction.reply({ content: `<@&${hokkabazbro.color.mavi}> üzerinize verildi`, ephemeral: true });
    };
  };


  if(interaction.customId === "pembe") {
    let member = interaction.member
    if(member.roles.cache.has(hokkabazbro.color.pembe)) {
      await member.roles.remove(hokkabazbro.color.pembe);
      await interaction.reply({ content: `<@&${hokkabazbro.color.pembe}> rolü üzerinizden alındı`, ephemeral: true });
    } else {
      await member.roles.add(hokkabazbro.color.pembe);
      await interaction.reply({ content: `<@&${hokkabazbro.color.pembe}> üzerinize verildi`, ephemeral: true });
    };
  };


  if(interaction.customId === "kırmızı") {
    let member = interaction.member
    if(member.roles.cache.has(hokkabazbro.color.kırmızı)) {
      await member.roles.remove(hokkabazbro.color.kırmızı);
      await interaction.reply({ content: `<@&${hokkabazbro.color.kırmızı}> rolü üzerinizden alındı`, ephemeral: true });
    } else {
      await member.roles.add(hokkabazbro.color.kırmızı);
      await interaction.reply({ content: `<@&${hokkabazbro.color.kırmızı}> üzerinize verildi`, ephemeral: true });
    };
  };


}})

client.login(Bot_Token).then(() => console.log('[BOT] Connection Started')).catch(() => {
	console.log('[BOT] Failed To Start Connection, Trying Again');
	process.exit();
});

const { MessageButton} = require('discord.js');
client.on("message", async message => {
    if (message.content === "!control1" && message.author.id === "716327849979805736") {

      
	          const row1 = new MessageActionRow()
            .addComponents(
                new MessageButton()
                    .setCustomId('one')
                    .setLabel('1')
                    .setStyle('SUCCESS'),
                new MessageButton()
                    .setCustomId('two')
                    .setLabel('2')
                    .setStyle('SUCCESS'),
				new MessageButton()
                    .setCustomId('three')
                    .setLabel('3')
                    .setStyle('SUCCESS'),
				new MessageButton()
                    .setCustomId('four')
                    .setLabel('4')
                    .setStyle('SUCCESS'),
				new MessageButton()
                    .setCustomId('five')
                    .setLabel('5')
                    .setStyle('SUCCESS'),
					
            );
	  
	  
        message.channel.send({ content: `**Merhaba!** \n\n Aşşağıdaki butonlarla tıklayarak **sunucumuz hakkında bilgi alabilirsiniz** \n\n **1 ** \`Sunucumuzda kaç kişi tagımızı aldığını kontrol edersin.\` \n **2 ** \`Sunucumuzda kaç kişinin seslide olduğunu kontrol edersin.\` \n **3 ** \`Sunucumuzda kaç kişi olduğunu kontrol edersin\` \n **4** \`Sunucumuzdaki rollerinizi kontrol edersiniz.\` \n **5 ** \`Sunucumuza ne zaman katıldığınızı kontrol edersiniz.\``, components: [row1] });
    
	}
})
client.on("interactionCreate", async interaction => {
if(!interaction.isButton()) return;
      
if(interaction.customId == "one") {
        const taglı = interaction.guild.members.cache.filter(r => r.roles.cache.has("1010973438829154384")).size

		await interaction.reply({ content: `Sunucumuzda Toplam **${taglı}** kişi tagımızı alarak bizi desteklemiş!`, ephemeral: true })
    };

if(interaction.customId ==  "two") {
    const ses = interaction.guild.channels.cache.filter(channel => channel.type == 'GUILD_VOICE').map(channel => channel.members.size).reduce((a,b) => a + b)

		await interaction.reply({ content: `Sunucumuzda Şu an toplam **${ses}** kişi seslide!`, ephemeral: true })
    };

if(interaction.customId == "three") {
     const toplam = interaction.guild.memberCount

		await interaction.reply({ content: `Sunucumuzda **${toplam}** adet üye var!`, ephemeral: true })
    };

if(interaction.customId == "four") {

    await interaction.reply({ content: `${interaction.member.roles.cache.size <= 15 ? interaction.member.roles.cache.filter(x => x.name !== "@everyone").map(x => x).join(`, `) : `Roller Çok Fazla...!`}`, ephemeral: true })
	};
if(interaction.customId ==  "five") {
      const member = interaction.guild.joinedAt

		await interaction.reply({ content: `Sunucumuza ${moment(member).format("DD/MM/YYYY")} tarihinde katılmışsınız.`, ephemeral: true })
    }

});







client.on("message", async message => {
    if (message.content === "!control2" && message.author.id === "716327849979805736") {


	          const row2 = new MessageActionRow()
            .addComponents(
                new MessageButton()
                    .setCustomId('bir')
                    .setLabel('1')
                    .setStyle('SUCCESS'),
                new MessageButton()
                    .setCustomId('iki')
                    .setLabel('2')
                    .setStyle('SUCCESS'),
				new MessageButton()
                    .setCustomId('üç')
                    .setLabel('3')
                    .setStyle('SUCCESS'),
				new MessageButton()
                    .setCustomId('dört')
                    .setLabel('4')
                    .setStyle('SUCCESS'),
				new MessageButton()
                    .setCustomId('beş')
                    .setLabel('5')
                    .setStyle('SUCCESS'),
					
            );
        message.channel.send({ content: `**Merhaba!** \n\n Aşşağıdaki butonlarla tıklayarak **sunucumuz hakkında bilgi alabilirsiniz** \n\n **1 ** \`Sunucumuzda kaç bot olduğunu kontrol edersiniz.\` \n **2 ** \`Sunucumuzda kaç tane yazılı kanal olduğunu kontrol edersiniz.\` \n **3 ** \`Sunucumuzda kaç tane sesli kanal olduğunu kontrol edersiniz.\` \n **4** \`Sunucumuzda kaç tane katagori olduğunu kontrol edersiniz\` \n **5 ** \`Sunucunun sahibi kim olduğunu kontrol edersiniz.\``, components: [row2] });
    

    }
})
client.on("interactionCreate", async interaction => {
if(!interaction.isButton()) return;
      
if(interaction.customId == "bir") {
         let botCount = interaction.guild.members.cache.filter(m => m.user.bot).size;

		await interaction.reply({ content: `Sunucumuzda Toplam **${botCount}** Bot Bulunmakta!`, ephemeral: true })
    };
if(interaction.customId == "iki") {

await interaction.reply({ content: `Sunucumuzda Toplam **${interaction.guild.channels.cache.filter(c => c.type === 'GUILD_TEXT').size}** Yazılı Kanal Bulunmakta!`, ephemeral: true })  
  };
if(interaction.customId == "üç") {

await interaction.reply({ content: `Sunucumuzda Toplam **${interaction.guild.channels.cache.filter(c => c.type === 'GUILD_VOICE').size}** Sesli Kanal Bulunmakta!`, ephemeral: true })  
  };
if(interaction.customId == "dört") {

await interaction.reply({ content: `Sunucumuzda Toplam **${interaction.guild.channels.cache.filter(c => c.type === 'GUILD_CATEGORY').size}** Katagori Bulunmakta!`, ephemeral: true })  
  };
if(interaction.customId == "beş") {

await interaction.reply({ content: `Sunucu sahibi: **<@698416575627264001>** `, ephemeral: true })  
  };

  
      });