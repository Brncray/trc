/**@type {import("../bot.js").Command} */
export const data = {
  name: "membercount",
  type: 1, // u got 3 types, 1 is reg cmd, 2 is msg app, 3 is user app
  description: "get member count",
  dm_permission: false, // ensures that the command cannot be used inside of dms
  default_member_permissions: 0, // u can use default member permission to lock cmds to certain permission levels, ex administrator, u can use permissionbitfield to get one if u cant via discord docs
};
/**
 *
 * @param {import("discord.js").ChatInputCommandInteraction<'cached'>} interaction
 * @param {import("../bot.js").Bot} client
 */
export async function execute(interaction, client) {
  await interaction.deferReply({ ephemeral: false });
  // get member count of server
  const memberCount = interaction.guild.memberCount;
  /**@type {import("discord.js").APIEmbed[]} */
  const embed = [
    {
      title: "Members",
      description: memberCount,
      timestamp: new Date(),
    },
  ];
    await interaction.editReply({ embeds: embed });
}
