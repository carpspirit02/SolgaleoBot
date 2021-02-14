const { Command } = require('discord.js-commando');

module.exports = class HelloCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'hello',
            memberName: 'hello',
            group: 'divers',
            aliases: ['bonjour', 'hi'],
            description: 'Replies with a hello message.',
            ownerOnly: true,
            clientPermissions: ['SEND_MESSAGES'], // le bot doit avoir la permission d'envoyer des messages
			userPermissions: ['ADMINISTRATOR'],
            guildOnly: true,
            throttling: {
                usages: 2,
                duration: 10,
            }
        });
    }

    async run(msg) {
        msg.say(`Bonjour, je suis ${this.client.user.tag} (\`${this.client.user.id}\`)`);
    }
};