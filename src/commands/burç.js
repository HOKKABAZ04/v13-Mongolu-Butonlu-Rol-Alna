module.exports = {
    
    name: 'burç',
  çalıştır: async (client, message, args,prefix ) => {
    
    const { MessageActionRow, MessageButton } = require('discord.js');
    const hokka = require('../config/HOKKABAZ.json')

    let hokkiii1 = new MessageButton()
        .setStyle('PRIMARY')
        .setLabel('I')
        .setCustomId('boga')

    let hokkiii2 = new MessageButton()
        .setStyle('PRIMARY')
        .setLabel('II')
        .setCustomId('ikizler')

    let hokkiii3 = new MessageButton()
        .setStyle('PRIMARY')
        .setLabel('III')
        .setCustomId('yengec')

    let hokkiii4 = new MessageButton()
        .setStyle('PRIMARY')
        .setLabel('IV')
        .setCustomId('aslan')

    let hokkiii5 = new MessageButton()
        .setStyle('PRIMARY')
        .setLabel('V')
        .setCustomId(`basak`)

    let hokkiii6 = new MessageButton()
        .setStyle('PRIMARY')
        .setLabel('VI')
        .setCustomId('terazi')


    let hokkiii7 = new MessageButton()
        .setStyle('PRIMARY')
        .setLabel('VII')
        .setCustomId('koc')


    let hokkiii8 = new MessageButton()
        .setStyle('PRIMARY')
        .setLabel('VIII')
        .setCustomId('akrep')
    
    let hokkiii9 = new MessageButton()
        .setStyle('PRIMARY')
        .setLabel('IX')
        .setCustomId('yay')
    
    let hokkiii10 = new MessageButton()
        .setStyle('PRIMARY')
        .setLabel('X')
        .setCustomId('oglak')
    
    let hokkiii11 = new MessageButton()
        .setStyle('PRIMARY')
        .setLabel('XI')
        .setCustomId('kova')
    
    let hokkiii12 = new MessageButton()
        .setStyle('PRIMARY')
        .setLabel('XII')
        .setCustomId('balık')

        
    

    let golgehokkishadow = new MessageActionRow()
        .addComponents(hokkiii1, hokkiii2, hokkiii3, hokkiii4)
    
    let golgehokkishadow2 = new MessageActionRow()
        .addComponents(hokkiii5, hokkiii6, hokkiii7, hokkiii8)

     let golgehokkishadow3 = new MessageActionRow()
        .addComponents(hokkiii9, hokkiii10, hokkiii11, hokkiii12)
    
    message.channel.send({ content:`** Merhabalar arkadaşlar, burç rollerinizi seçmek için aşağıdaki butonlardan herhangi birine basabilirsiniz.  **

    ** I : <@&${hokka.burç.boga}> **
    ** II : <@&${hokka.burç.ikizler}> ** 
   **  III : <@&${hokka.burç.yengec}> **
   **  IV : <@&${hokka.burç.aslan}> **
  **   V : <@&${hokka.burç.basak}> **
  **   VI : <@&${hokka.burç.terazi}> ** 
   **  VII : <@&${hokka.burç.koc}> **
   **  VIII : <@&${hokka.burç.akrep}> **
   **  IX : <@&${hokka.burç.yay}> **
   **  X : <@&${hokka.burç.oglak}> **
   **  XI : <@&${hokka.burç.kova}> **
   **  XII : <@&${hokka.burç.balık}> **
    
    
    
     
    
    
    
    `, components: [golgehokkishadow, golgehokkishadow2, golgehokkishadow3]  }) ;




      }

}
