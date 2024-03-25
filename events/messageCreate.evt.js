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

    const linkCheck = linkify.find(message.content);
    if(linkCheck.length > 0) {
        if (message.member.permissions.has("Administrator")) return;
        if (message.channel.id === "1221572103485259906") return; 
        // check if the link has a roblox.com domain
        console.log(linkCheck.length)
        if (linkCheck[0].value.includes("roblox.com") && linkCheck.length === 1) return;
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