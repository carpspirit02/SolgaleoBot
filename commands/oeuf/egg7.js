const { Command } = require('discord.js-commando');
const Discord = require('discord.js');

module.exports = class EmbedCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'oeuf7',
            memberName: 'oeuf7',
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
            .setTitle(`**__Oeufs Pokémon 7Km__**`)

            // .setAuthor(`Nom de l'auteur`, `https://mtxserv.com/build/img/favicon/favicon.ico`, `https://discord.gg/VAzByRU8W9`)
            .setAuthor(`${this.client.user.tag}`, `${this.client.user.displayAvatarURL()}`, 'https://discord.gg/VAzByRU8W9')

            .setDescription(`_Updated on February 09, 2021_`)
            .setFooter(`Powered By Solgaleo | Official BOT created since January 2021 by SolgaleoUnivers#6533`, `${this.client.user.displayAvatarURL()}`)

            .setImage(`https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/87134d8e-aac4-420f-aee4-6c63851bb166/dagj260-e6d9c7d5-8926-48d2-9e27-864504e09a25.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvODcxMzRkOGUtYWFjNC00MjBmLWFlZTQtNmM2Mzg1MWJiMTY2XC9kYWdqMjYwLWU2ZDljN2Q1LTg5MjYtNDhkMi05ZTI3LTg2NDUwNGUwOWEyNS5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.jpma_WGRaj_uQnJ0ZCvoP5p0Fcte-YOiWkHLozrIT2M`)
            .setThumbnail(`https://static.wikia.nocookie.net/pokemongo/images/f/f5/Egg_7k.png`)

            .setTimestamp() // Vous pouvez passer un objet Date() en argument

            // Fields

            // Sur une ligne complète :

            .addField(`:flag_fr: Miaouss d'Alola / :flag_us: Alolan Meowth`,`*:sparkles:__CP Min:__ 416  __CP Max:__ 455* ` ) 

            .addField(`:flag_fr: Sabelette d'Alola / :flag_us: Alolan Sandshrew`,`*:sparkles:__CP Min:__ 688  __CP Max:__ 739* `)

            .addField(`:flag_fr: Goupix d'Alola / :flag_us: Alolan Vulpix`,`*:sparkles:__CP Min:__ 463  __CP Max:__ 504*`)
            
            .addField(`:flag_fr: Taupiqueur d'Alola / :flag_us: Alolan Diglett`,`*:sparkles:__CP Min:__ 352  __CP Max:__ 389*`)
            
            .addField(`:flag_fr: Miaouss de Galar / :flag_us: Galarian Meowth`,`*__CP Min:__ 456  __CP Max:__ 591*`)
            
            .addField(`:flag_fr: Racaillou d'Alola / :flag_us: Alolan Geodude`,`*:sparkles:__CP Min:__ 688  __CP Max:__ 739*`)
            
            .addField(`:flag_fr: Ponyta d'Alola / :flag_us: Alolan Ponyta`,`*__CP Min:__ 911  __CP Max:__ 969*`)
            
            .addField(`:flag_fr: Canarticho d'Alola / :flag_us: Alolan Farfetch'd`,`*__CP Min:__ 898  __CP Max:__ 956*`)
            
            .addField(`:flag_fr: Tadmorv d'Alola / :flag_us: Alolan Grimer`,`*:sparkles:__CP Min:__ 731  __CP Max:__ 785*`)
            
            .addField(`:flag_fr: Zigzaton de Galar / :flag_us: Galarian Zigzagoon`,`*__CP Min:__ 258  __CP Max:__ 290 *`)
            
            .addField(`:flag_fr: Darumacho de Galar / :flag_us: Galarian Darumaka`,`*__CP Min:__ 768  __CP Max:__ 823 *`)
            
            .addField(`:flag_fr: Limonde de Galar / :flag_us: Galarian Stunfisk`,`*__CP Min:__ 1169  __CP Max:__ 1235*`)
            
            
            // Plusieurs sur une même ligne :
            // <= a supprimer si utiliser .addField(`Titre 1`,`Votre texte 1`, true)
            // <= a supprimer si utiliser .addField(`Titre 2`,`Text avec un [lien](https://mtxserv.com/fr/)`, true)
        ;

        msg.say(embed)
    }
};