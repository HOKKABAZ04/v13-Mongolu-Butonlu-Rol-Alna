module.exports = {
    
    name: 'color',
  çalıştır: async (client, message, args,prefix ) => {
    
    const { MessageActionRow, MessageButton } = require('discord.js');
    const hokka = require('../config/HOKKABAZ.json')

    let hokkiii1 = new MessageButton()
        .setStyle('DANGER')
        .setLabel('Siyah')
        .setCustomId('siyah')

    let hokkiii2 = new MessageButton()
        .setStyle('DANGER')
        .setLabel('Beyaz')
        .setCustomId('beyaz')

        let hokkiii3 = new MessageButton()
        .setStyle('DANGER')
        .setLabel('Kırmızı')
        .setCustomId('kırmızı')
        
        let hokkiii4 = new MessageButton()
        .setStyle('DANGER')
        .setLabel('Yeşil')
        .setCustomId(`yesil`)


        let hokkiii5 = new MessageButton()
        .setStyle('DANGER')
        .setLabel('Mor')
        .setCustomId('mor') 

        let hokkiii6 = new MessageButton()
        .setStyle('DANGER')
        .setLabel('Sarı')
        .setCustomId('sarı')
   
        let hokkiii7 = new MessageButton()
        .setStyle('DANGER')
        .setLabel('Turncu')
        .setCustomId('turuncu')


    let hokkiii8 = new MessageButton()
        .setStyle('DANGER')
        .setLabel('Mavi')
        .setCustomId('mavi')

    let hokkiii9 = new MessageButton()
       .setStyle("DANGER")
       .setLabel("Pembe")
       .setCustomId("pembe")

 
   

    let golgehokkishadow = new MessageActionRow()
        .addComponents(hokkiii1, hokkiii2, hokkiii3, hokkiii4)
    
    let golgehokkishadow2 = new MessageActionRow()
        .addComponents(hokkiii5, hokkiii6, hokkiii7, hokkiii8, hokkiii9)
    
    message.channel.send({ content:`** Merhaba, Aşağıdaki Renklerden İstediğini Almak için Butona Tıklaman Yeterlidir.  **

    ** Siyah : <@&${hokka.color.siyah}> **
    ** Beyaz : <@&${hokka.color.beyaz}> ** 
    ** Kırmızı: <@&${hokka.color.kırmızı}> **
   **  Yeşil : <@&${hokka.color.yesil}> **
  **   Mor : <@&${hokka.color.mor}> **
  **   Sarı : <@&${hokka.color.sarı}> ** 
   **  Turuncu : <@&${hokka.color.turuncu}> **
   **  Mavi : <@&${hokka.color.mavi}> **
   **  Pembe : <@&${hokka.color.pembe}> **

    
    
    
     
    
    
    
    `, components: [golgehokkishadow, golgehokkishadow2]  }) ;




      }

}
