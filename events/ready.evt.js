

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
  await client.user.setAvatar("https://media.discordapp.net/attachments/1221622263908929566/1221624907088138321/IMG_2456.png?ex=661341da&is=6600ccda&hm=127278e5bc9281f5b7350acbdfbe3f5854776c31462b0ff96bb11ba3d5d21cb3&=&format=webp&quality=lossless&width=1112&height=509").then(user => console.log("New Avatar set!")).catch(console.error);
 
}
