const { Command } = require('discord.js-commando');
const Discord = require('discord.js');

module.exports = class EmbedCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'oeuf2',
            memberName: 'oeuf2',
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
            .setTitle(`**__Oeufs Pokémon 2Km__**`)

            // .setAuthor(`Nom de l'auteur`, `https://mtxserv.com/build/img/favicon/favicon.ico`, `https://discord.gg/VAzByRU8W9`)
            .setAuthor(`${this.client.user.tag}`, `${this.client.user.displayAvatarURL()}`, 'https://discord.gg/VAzByRU8W9')

            .setDescription(`_Updated on February 09, 2021_`)
            .setFooter(`Powered By Solgaleo | Official BOT created since January 2021 by SolgaleoUnivers#6533`, `${this.client.user.displayAvatarURL()}`)

            .setImage(`https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/87134d8e-aac4-420f-aee4-6c63851bb166/dagj260-e6d9c7d5-8926-48d2-9e27-864504e09a25.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvODcxMzRkOGUtYWFjNC00MjBmLWFlZTQtNmM2Mzg1MWJiMTY2XC9kYWdqMjYwLWU2ZDljN2Q1LTg5MjYtNDhkMi05ZTI3LTg2NDUwNGUwOWEyNS5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.jpma_WGRaj_uQnJ0ZCvoP5p0Fcte-YOiWkHLozrIT2M`)
            .setThumbnail(`https://pkmngotrading.com/mediawiki/images/5/52/Egg1.png`)

            .setTimestamp() // Vous pouvez passer un objet Date() en argument

            // Fields

            // Sur une ligne complète :

            .addField(`:flag_fr: Nosferapti / :flag_us: Zubat`,`*:sparkles:__CP Min:__ 344  __CP Max:__ 381* :e1: ` ) 

            .addField(`:flag_fr: Caninos / :flag_us: Grownlithe`,`*:sparkles:__CP Min:__ **660**  __CP Max:__ 710* `)

            .addField(`:flag_fr: Ptitard / :flag_us: Poliwag`,`*:sparkles:__CP Min:__ **433**  __CP Max:__ 473*`)
            
            .addField(`:flag_fr: Osselait / :flag_us: Cubone`,`*:sparkles:__CP Min:__ **536**  __CP Max:__ 582*`)
            
            .addField(`:flag_fr: Magicarpe / :flag_us: Magikarp`,`*:sparkles:__CP Min:__ 132  __CP Max:__ 157*`)
            
            .addField(`:flag_fr: Wattouat / :flag_us: Mareep`,`*:sparkles:__CP Min:__ 521  __CP Max:__ 566*`)
            
            .addField(`:flag_fr: Axoloto / :flag_us: Wooper`,`*:sparkles:__CP Min:__ 330  __CP Max:__ 366*`)
            
            .addField(`:flag_fr: Snubull / :flag_us: Snubull`,`*:sparkles:__CP Min:__ 565  __CP Max:__ 707*`)
            
            .addField(`:flag_fr: Goélise / :flag_us: Wingull`,`*:sparkles:__CP Min:__ 397  __CP Max:__ 437*`)
            
            .addField(`:flag_fr: Muciole / :flag_us: Volbeat`,`*:sparkles:__CP Min:__ 952  __CP Max:__ 1012 :globe_with_meridians:*`)
            
            .addField(`:flag_fr: Lumivole / :flag_us: Illumise`,`*:sparkles:__CP Min:__ 952  __CP Max:__ 1012 :globe_with_meridians:*`)
            
            .addField(`:flag_fr: Wailmer / :flag_us: Wailmer`,`*:sparkles:__CP Min:__ 779  __CP Max:__ 838*`)
            
            .addField(`:flag_fr: Tylton / :flag_us: Swablu`,`*:sparkles:__CP Min:__ 429  __CP Max:__ 470*`)
            
            .addField(`:flag_fr: Laporeille / :flag_us: Buneary`,`*:sparkles:__CP Min:__ 669  __CP Max:__ 719*`)
            
            .addField(`:flag_fr: Mustébouée / :flag_us: Buizel`,`*:sparkles:__CP Min:__ 555  __CP Max:__ 602*`)
            
            .addField(`:flag_fr: Vipélierre / :flag_us: Snivy`,`*:sparkles:__CP Min:__ 444  __CP Max:__ 485*`)
            
            .addField(`:flag_fr: Gruikui / :flag_us: Tepig`,`*__CP Min:__ 571  __CP Max:__ 618*`)
            
            .addField(`:flag_fr: Moustillon / :flag_us: Oshawott`,`*__CP Min:__ 551  __CP Max:__ 597*`)
            
            .addField(`:flag_fr: Chinchidou / :flag_us: Minccino`,`*:sparkles:__CP Min:__ 456  __CP Max:__ 498*`)
            
            .addField(`:flag_fr: Sapereau / :flag_us: Bunnelby`,`*__CP Min:__ 282  __CP Max:__ 316*`)
            
            .addField(`:flag_fr: Passerouge / :flag_us: Fletchling`,`*__CP Min:__ 417  __CP Max:__ 457*`)
            
            .addField(`:flag_fr: Hélionceau / :flag_us: Litleo`,`*__CP Min:__ 761  __CP Max:__ 814*`)

            // Plusieurs sur une même ligne :
            // <= a supprimer si utiliser .addField(`Titre 1`,`Votre texte 1`, true)
            // <= a supprimer si utiliser .addField(`Titre 2`,`Text avec un [lien](https://mtxserv.com/fr/)`, true)
        ;

        msg.say(embed)
    }
};