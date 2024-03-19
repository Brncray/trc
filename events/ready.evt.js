

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
  await client.user.setAvatar("https://media.discordapp.net/attachments/1197219686690070581/1219326019518070947/Screenshot_2024-03-18_173452.png?ex=660ae4d9&is=65f86fd9&hm=12ac54b0a6bf207c798a5327696a609e2ebf1760c8bc2d1499a33a7dae910a5b&=&format=webp&quality=lossless&width=569&height=525").then(user => console.log("New Avatar set!")).catch(console.error);
 
}
