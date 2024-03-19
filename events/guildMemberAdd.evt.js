import { DiscordAPIError, UserFlags } from "discord.js";

/**
 *
 * @param {string} name
 * @param {import("../../bot").Bot} client
 * @returns
 */
async function getCmdId(name, client) {
  return (
    client.application?.commands.cache.find((c) => c.name == name)?.id || ""
  );
}

export const data = {
  name: "guildMemberAdd",
};

/**
 * @param {import("discord.js").GuildMember} newGuildMember
 * @param {import("../bot").Bot} client
 */
export async function execute(newGuildMember, client) {
  if (newGuildMember.user.bot === true) {
    if (newGuildMember.user.flags.has(UserFlags.VerifiedBot)) {
      return;
    } else {
      await newGuildMember.ban(`Unverified bot`);
    }
  }
  if (newGuildMember.guild.id == "1219365219294253146") {
    const mainserver = client.guilds.cache.get("1218760325533532171");
    if (!mainserver) return;
    if (!await mainserver.members.cache.get(newGuildMember.id)) {
        const e = [{
            title: "Kicked",
            description: `You were kicked from the public services server for not being in the main server.`,
        }]
        await newGuildMember.send({ embeds: e });
        await newGuildMember.kick("Not in main server");

    }
  }
}
