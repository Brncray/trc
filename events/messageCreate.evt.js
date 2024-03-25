import * as linkify from 'linkifyjs';
export const data = {
    name: "messageCreate"
};
/**
 * 
 * @param {import("discord.js").Message} message
 * @param {import("../bot.js").Bot} client
 */
export async function execute(message, client) {
    if (!message.inGuild()) return;

    if(linkify.find(message.content).length > 0) {
        if (message.member.permissions.has("Administrator")) return;
        message.delete();
        message.channel.send({
            content: `${message.author} you cannot send links.`
        }).then(m => {
            setTimeout(() => {
                m.delete();
            }, 5000);
        });
    }
}