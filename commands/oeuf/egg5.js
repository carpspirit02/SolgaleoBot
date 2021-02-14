const { Command } = require('discord.js-commando');
const Discord = require('discord.js');

module.exports = class EmbedCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'oeuf5',
            memberName: 'oeuf5',
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
            .setTitle(`**__Oeufs Pokémon 5Km__**`)

            // .setAuthor(`Nom de l'auteur`, `https://mtxserv.com/build/img/favicon/favicon.ico`, `https://discord.gg/VAzByRU8W9`)
            .setAuthor(`${this.client.user.tag}`, `${this.client.user.displayAvatarURL()}`, 'https://discord.gg/VAzByRU8W9')

            .setDescription(`_Updated on February 09, 2021_`)
            .setFooter(`Powered By Solgaleo | Official BOT created since January 2021 by SolgaleoUnivers#6533`, `${this.client.user.displayAvatarURL()}`)

            .setImage(`https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/87134d8e-aac4-420f-aee4-6c63851bb166/dagj260-e6d9c7d5-8926-48d2-9e27-864504e09a25.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvODcxMzRkOGUtYWFjNC00MjBmLWFlZTQtNmM2Mzg1MWJiMTY2XC9kYWdqMjYwLWU2ZDljN2Q1LTg5MjYtNDhkMi05ZTI3LTg2NDUwNGUwOWEyNS5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.jpma_WGRaj_uQnJ0ZCvoP5p0Fcte-YOiWkHLozrIT2M`)
            .setThumbnail(`https://nsa40.casimages.com/img/2021/02/13/210213112302255520.png`)

            .setTimestamp() // Vous pouvez passer un objet Date() en argument

            // Fields

            // Sur une ligne complète :
            .addField(`:flag_fr: Machoc / :flag_us: Machop`,`*:sparkles:__CP Min:__ 678  __CP Max:__ 730*`) 
            
            .addField(`:flag_fr: Canarticho / :flag_us: Farfetch'd`,`*:sparkles:__CP Min:__ **657**  __CP Max:__ 706* :globe_with_meridians:`)
            
            .addField(`:flag_fr: Voltorbe / :flag_us: Voltorb`,`*:sparkles:__CP Min:__ **532**  __CP Max:__ 577*`)
            
            .addField(`:flag_fr: Excelangue / :flag_us: Lickitung`,`*:sparkles:__CP Min:__ **752**  __CP Max:__ 806*`)
            
            .addField(`:flag_fr: Kangourex / :flag_us: Kangaskhan`,`*:sparkles:__CP Min:__ 1405  __CP Max:__ 1477* :globe_with_meridians:`)
            
            .addField(`:flag_fr: Tauros / :flag_us: Tauros`,`*:sparkles:__CP Min:__ 1425  __CP Max:__ 1497* :globe_with_meridians:`)
            
            .addField(`:flag_fr: Evoli / :flag_us: Eevee`,`*:sparkles:__CP Min:__ 565  __CP Max:__ 612*`)
            
            .addField(`:flag_fr: Pomdepik / :flag_us: Pineco`,`*:sparkles:__CP Min:__ 586  __CP Max:__ 633*`)
            
            .addField(`:flag_fr: Scarhino / :flag_us: Heracross`,`*__CP Min:__ 1693  __CP Max:__ 1772* :globe_with_meridians:`)
            
            .addField(`:flag_fr: Corsola  / :flag_us: Corsola`,`*__CP Min:__ 952  __CP Max:__ 1012 :globe_with_meridians:*`)
            
            .addField(`:flag_fr: Chartor / :flag_us: Torkoal`,`*__CP Min:__ 1131  __CP Max:__ 1196 :globe_with_meridians:*`)
            
            .addField(`:flag_fr: Tarsal  / :flag_us: Ralts`,`*:sparkles:__CP Min:__ 275  __CP Max:__ 308*`)
            
            .addField(`:flag_fr: Balbuto / :flag_us: Baltoy`,`*:sparkles:__CP Min:__ 409  __CP Max:__ 449*`)
            
            .addField(`:flag_fr: Barpau / :flag_us: Feebas`,`*:sparkles:__CP Min:__ 132  __CP Max:__ 157*`)
            
            .addField(`:flag_fr: Tropius / :flag_us: Tropius`,`*__CP Min:__ 1046  __CP Max:__ 1109* :globe_with_meridians:`)
            
            .addField(`:flag_fr: Coquiperl / :flag_us: Clamperl`,`*:sparkles:__CP Min:__ 675  __CP Max:__ 726*`)
            
            .addField(`:flag_fr: Relicanth / :flag_us: Relicanth`,`*__CP Min:__ 1373  __CP Max:__ 1444* :globe_with_meridians:`)
            
            .addField(`:flag_fr: Pachirisu / :flag_us: Pachirisu`,`*__CP Min:__ 643  __CP Max:__ 693* :globe_with_meridians:`)
            
            .addField(`:flag_fr: Mime Jr. / :flag_us: Mime Jr.`,`*:sparkles:__CP Min:__ 578  __CP Max:__ 626* :globe_with_meridians:`)
            
            .addField(`:flag_fr: Pijako / :flag_us: Chatot`,`*__CP Min:__ 961  __CP Max:__ 1023* :globe_with_meridians:`)
            
            .addField(`:flag_fr: Hippopotas / :flag_us: Hippopotas`,`*:sparkles:__CP Min:__ 723  __CP Max:__ 776*`)
            
            .addField(`:flag_fr: Vortente / :flag_us: Carnivine`,`*__CP Min:__ 1167  __CP Max:__ 1233* :globe_with_meridians:`)

            .addField(`:flag_fr: Feuillajou / :flag_us: Pansage`,`*__CP Min:__ 503  __CP Max:__ 546* :globe_with_meridians:`)

            .addField(`:flag_fr: Flamajou / :flag_us: Pansear`,`*__CP Min:__ 503  __CP Max:__ 546* :globe_with_meridians:`)

            .addField(`:flag_fr: Flotajou / :flag_us: Panpour`,`*__CP Min:__ 503  __CP Max:__ 546* :globe_with_meridians:`)

            .addField(`:flag_fr: Zébibron / :flag_us: Blitzle`,`*__CP Min:__ 461  __CP Max:__ 504* `)

            .addField(`:flag_fr: Nodulithe / :flag_us: Roggenrola`,`*:sparkles:__CP Min:__ 639  __CP Max:__ 688* `)

            .addField(`:flag_fr: Maracachi / :flag_us: Maractus`,`*__CP Min:__ 1231  __CP Max:__ 1299* :globe_with_meridians:`)

            .addField(`:flag_fr: Scrutella / :flag_us: Gothita`,`*__CP Min:__ 500  __CP Max:__ 543* `)

            .addField(`:flag_fr: Nucléos / :flag_us: Solosis`,`*__CP Min:__ 727  __CP Max:__ 781* `)

            .addField(`:flag_fr: Couaneton / :flag_us: Ducklett`,`*__CP Min:__ 447  __CP Max:__ 489* `)

            .addField(`:flag_fr: Frison / :flag_us: Bouffalant`,`*__CP Min:__ 1524  __CP Max:__ 1598* :globe_with_meridians:`)

            .addField(`:flag_fr: Marisson / :flag_us: Chespin`,`*__CP Min:__ 579  __CP Max:__ 626* `)

            .addField(`:flag_fr: Feunnec / :flag_us: Fennekin`,`*__CP Min:__ 542  __CP Max:__ 587* `)

            .addField(`:flag_fr: Grenousse / :flag_us: Froakie`,`*__CP Min:__ 522  __CP Max:__ 567* `)



            // Plusieurs sur une même ligne :
            // <= a supprimer si utiliser .addField(`Titre 1`,`Votre texte 1`, true)
            // <= a supprimer si utiliser .addField(`Titre 2`,`Text avec un [lien](https://mtxserv.com/fr/)`, true)
        ;

        msg.say(embed)
    }
};