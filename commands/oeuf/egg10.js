const { Command } = require('discord.js-commando');
const Discord = require('discord.js');

module.exports = class EmbedCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'oeuf10',
            memberName: 'oeuf10',
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
            .setTitle(`**__Oeufs Pokémon 10Km__**`)

            // .setAuthor(`Nom de l'auteur`, `https://mtxserv.com/build/img/favicon/favicon.ico`, `https://discord.gg/VAzByRU8W9`)
            .setAuthor(`${this.client.user.tag}`, `${this.client.user.displayAvatarURL()}`, 'https://discord.gg/VAzByRU8W9')

            .setDescription(`_Updated on February 09, 2021_`)
            .setFooter(`Powered By Solgaleo | Official BOT created since January 2021 by SolgaleoUnivers#6533`, `${this.client.user.displayAvatarURL()}`)

            .setImage(`https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/87134d8e-aac4-420f-aee4-6c63851bb166/dagj260-e6d9c7d5-8926-48d2-9e27-864504e09a25.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvODcxMzRkOGUtYWFjNC00MjBmLWFlZTQtNmM2Mzg1MWJiMTY2XC9kYWdqMjYwLWU2ZDljN2Q1LTg5MjYtNDhkMi05ZTI3LTg2NDUwNGUwOWEyNS5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.jpma_WGRaj_uQnJ0ZCvoP5p0Fcte-YOiWkHLozrIT2M`)
            .setThumbnail(`https://nsm09.casimages.com/img/2021/02/14//21021402225225847417261335.png`)

            .setTimestamp() // Vous pouvez passer un objet Date() en argument

            // Fields

            // Sur une ligne complète :

            .addField(`:flag_fr: Lixy / :flag_us: Shinx`,`*:sparkles:__CP Min:__ 458  __CP Max:__ 500*  ` ) 

            .addField(`:flag_fr: Griknot / :flag_us: Gible`,`*:sparkles:__CP Min:__ 588  __CP Max:__ 635* `)

            .addField(`:flag_fr: Riolu / :flag_us: Riolu`,`*:sparkles:__CP Min:__ 522  __CP Max:__ 567*`)
            
            .addField(`:flag_fr: Nanméouïe / :flag_us: Audino`,`*__CP Min:__ 901  __CP Max:__ 961*`)
            
            .addField(`:flag_fr: Charpenti / :flag_us: Timburr`,`*:sparkles:__CP Min:__ 699  __CP Max:__ 751*`)
            
            .addField(`:flag_fr: Darumarond / :flag_us: Darumaka`,`*__CP Min:__ 768  __CP Max:__ 823*`)
            
            .addField(`:flag_fr: Cryptéro / :flag_us: Sigilyph`,`*__CP Min:__ 1385  __CP Max:__ 1457*:globe_with_meridians:`)
            
            .addField(`:flag_fr: Emolga / :flag_us: Emolga`,`*__CP Min:__ 876  __CP Max:__ 933*`)
            
            .addField(`:flag_fr: Lewsor / :flag_us: Elgyem`,`*__CP Min:__ 738  __CP Max:__ 791*`)
            
            .addField(`:flag_fr: Funécire / :flag_us: Litwick`,`*__CP Min:__ 530  __CP Max:__ 575 *`)
            
            .addField(`:flag_fr: Coupenotte / :flag_us: Axew`,`*__CP Min:__ 729  __CP Max:__ 782 *`)
            
            .addField(`:flag_fr: Gringolem / :flag_us: Golett`,`*__CP Min:__ 630  __CP Max:__ 679*`)
            
            .addField(`:flag_fr: Furaiglon / :flag_us: Rufflet`,`*:sparkles:__CP Min:__ 796  __CP Max:__ 852*`)
            
            .addField(`:flag_fr: Psystigri / :flag_us: Espurr`,`*__CP Min:__ 669  __CP Max:__ 719*`)
            
            .addField(`:flag_fr: Sonistrelle / :flag_us: Noibat`,`*__CP Min:__ 344  __CP Max:__ 381*:globe_with_meridians:`)
            
            .addField(`:flag_fr: Grindur / :flag_us: Ferroseed`,`*:sparkles:__CP Min:__ 493  __CP Max:__ 537*`)
            
            
            // Plusieurs sur une même ligne :
            // <= a supprimer si utiliser .addField(`Titre 1`,`Votre texte 1`, true)
            // <= a supprimer si utiliser .addField(`Titre 2`,`Text avec un [lien](https://mtxserv.com/fr/)`, true)
        ;

        msg.say(embed)
    }
};