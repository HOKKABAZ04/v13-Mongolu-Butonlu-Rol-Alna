module.exports = {
    
    name: "game", 
    çalıştır: async (client, message, args, prefix ) => {
      const { MessageActionRow, MessageButton } = require('discord.js');

  
  
      let hokkabazbabba1 = new MessageButton()
          .setStyle('DANGER')
          .setLabel('Vampir Köylü!')
          .setCustomId('vk')
  
      let hokkabazbabba2 = new MessageButton()
          .setStyle('SUCCESS')
          .setLabel('Doğruluk / Cesaretlik!')
          .setCustomId('dc')
  
      let hokkabazbabba3 = new MessageButton()
          .setStyle('PRIMARY')
          .setLabel('Gartic!')
          .setCustomId('gartic')
  
  
  
      let HOKKABAZ = new MessageActionRow()
          .addComponents(hokkabazbabba1, hokkabazbabba2, hokkabazbabba3 )
      
    
  
      message.channel.send({ content:`** Aşağıdaki menüden kendinize oyun seçebilirsiniz. Bir oyunun rolünü almak için o butona tıklayın. **
  


`, components: [HOKKABAZ]  }) ;
  
  
  
  
        }
  
  }
  