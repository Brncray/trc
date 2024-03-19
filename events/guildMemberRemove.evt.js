export const data = {
    name: "guildMemberRemove"
};

/**
 * @param {import("discord.js").GuildMember} oldGuildMember
 * @param {import("../bot").Bot} client
 */
export async function execute(oldGuildMember, client) {
    if (oldGuildMember.guild.id == "1218760325533532171") {
        const secondary = await client.guilds.cache.get("1219365219294253146");
        if (!secondary) return;
        const main = await secondary.members.fetch(oldGuildMember.id);
        if (!main) return;
        const e = [{
            title: "Kicked",
            description: `You were kicked from the public services server for not being in the main server.`,
        }]
        await main.send({ embeds: e });
        await main.kick("Not in main server");

    }
}