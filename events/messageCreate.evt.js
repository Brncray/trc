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

    const regex = "https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()!@:%_\+.~#?&\/\/=]*)"
    if (message.content.match(regex)) {
        message.delete();
        message.channel.send({
            content: `${message.author} you cannot send links in this server.`
        }).then(m => {
            setTimeout(() => {
                m.delete();
            }, 5000);
        });
    }
}