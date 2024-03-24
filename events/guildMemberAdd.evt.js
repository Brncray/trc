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
  if (newGuildMember.guild.id == "1218760325533532171") {
    const joinRole = newGuildMember.guild.roles.cache.get("1218763059875676241");
    const civ_role = newGuildMember.guild.roles.cache.get("1218761191615107192");
    if (!civ_role) return;
    if (!joinRole) return;
    newGuildMember.roles.add(joinRole);
    newGuildMember.roles.add(civ_role);

  } else if (newGuildMember.guild.id == "1221464124437954580") {
    const joinRole = newGuildMember.guild.roles.cache.get("1221464124437954582");
    if (!joinRole) return;
    newGuildMember.roles.add(joinRole);

  }
}
