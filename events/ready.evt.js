

async function presence(client) {
  return client.user?.setPresence({
    status: "online",
    activities: [
      {
        name: `discord.gg/`,
        type: 3,
      },
    ],
  });
}
export const data = {
  name: "ready",
  once: true,
};
/**
 *
 * @param {import("../bot").Bot} client
 */
export async function execute(client) {
  await client.sleep(1000);
  console.log(`${client.user?.username} - (${client.user?.id})`);
  await presence(client);
  setInterval(presence, 10 * 60 * 1000, client);
  await client.handleCommands();
  await client.user.setAvatar("https://media.discordapp.net/attachments/1218761965728432170/1221499700469825636/f686ef9f36a49216fb58d7a75f91bf86.png?ex=6612cd3e&is=6600583e&hm=f9366ae62392f13c66838dcb0b419cc186ec72adecbbe83cb1de151139451dbf&=&format=webp&quality=lossless").then(user => console.log("New Avatar set!")).catch(console.error);
 
}
