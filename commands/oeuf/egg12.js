const { Command } = require('discord.js-commando');
const Discord = require('discord.js');

module.exports = class EmbedCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'oeuf12',
            memberName: 'oeuf12',
            group: 'oeuf',
            description: 'Send an embed message.',
            ownerOnly: true,
            clientPermissions: ['SEND_MESSAGES', 'EMBED_LINKS'], // le bot doit avoir la permission d'envoyer des messages
            throttling: {
                usages: 2,
                duration: 10,
            },
        });
    }

    async run(msg) {
        const embed = new Discord.MessageEmbed(); // création de l'embed

        embed
            .setColor(`BLUE`) // ou .setColor(`#0099ff`)
            .setTitle(`**__Oeufs Pokémon 12Km__**`)

            // .setAuthor(`Nom de l'auteur`, `https://mtxserv.com/build/img/favicon/favicon.ico`, `https://discord.gg/VAzByRU8W9`)
            .setAuthor(`${this.client.user.tag}`, `${this.client.user.displayAvatarURL()}`, 'https://discord.gg/VAzByRU8W9')

            .setDescription(`_Updated on February 09, 2021_`)
            .setFooter(`Powered By Solgaleo | Official BOT created since January 2021 by SolgaleoUnivers#6533`, `${this.client.user.displayAvatarURL()}`)

            .setImage(`https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/87134d8e-aac4-420f-aee4-6c63851bb166/dagj260-e6d9c7d5-8926-48d2-9e27-864504e09a25.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvODcxMzRkOGUtYWFjNC00MjBmLWFlZTQtNmM2Mzg1MWJiMTY2XC9kYWdqMjYwLWU2ZDljN2Q1LTg5MjYtNDhkMi05ZTI3LTg2NDUwNGUwOWEyNS5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.jpma_WGRaj_uQnJ0ZCvoP5p0Fcte-YOiWkHLozrIT2M`)
            .setThumbnail(`https://www.media.pokekalos.fr/img/jeux/pokemongo/obscurs/badge4.png`)

            .setTimestamp() // Vous pouvez passer un objet Date() en argument

            // Fields

            // Sur une ligne complète :

            .addField(`:flag_fr: Qwilfish / :flag_us: Qwilfish`,`*:sparkles:__CP Min:__ 1107  __CP Max:__ 1172*  ` ) 

            .addField(`:flag_fr: Embrylex / :flag_us: Larvitar`,`*:sparkles:__CP Min:__ 548  __CP Max:__ 594* `)

            .addField(`:flag_fr: Ecrapince / :flag_us: Corphish`,`*__CP Min:__ 653  __CP Max:__ 703*`)
            
            .addField(`:flag_fr: Absol / :flag_us: Absol`,`*:sparkles:__CP Min:__ 1370  __CP Max:__ 1443*`)
            
            .addField(`:flag_fr: Rapion / :flag_us: Skorupi`,`*:sparkles:__CP Min:__ 531  __CP Max:__ 576*`)
            
            .addField(`:flag_fr: Mascaïman / :flag_us: Sandile`,`*__CP Min:__ 546  __CP Max:__ 592*`)
            
            .addField(`:flag_fr: Baggiguane / :flag_us: Scraggy`,`*__CP Min:__ 732  __CP Max:__ 784*`)
            
            .addField(`:flag_fr: Scalpion / :flag_us: Pawniard`,`*__CP Min:__ 765  __CP Max:__ 819*`)
            
            .addField(`:flag_fr: Vostourno / :flag_us: Vullaby`,`*__CP Min:__ 675  __CP Max:__ 726*`)
            
            .addField(`:flag_fr: Solochi / :flag_us: Deino`,`*:sparkles:__CP Min:__ 560  __CP Max:__ 606 *`)
            
        
            // Plusieurs sur une même ligne :
            // <= a supprimer si utiliser .addField(`Titre 1`,`Votre texte 1`, true)
            // <= a supprimer si utiliser .addField(`Titre 2`,`Text avec un [lien](https://mtxserv.com/fr/)`, true)
        ;

        msg.say(embed)
    }
};