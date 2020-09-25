import {PrismaClient} from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // await prisma.profile.create({ data: { name: "Alice" } });
  // await prisma.profile.create({ data: { name: "Alex" } });
  // const entries = await prisma.profile.findMany({
  //   where: { name: { contains: "A" } },
  // });
  // console.log(entries);

  // const secondEntry = await prisma.profile.update({
  //   where: { id: 2 },
  //   data: { name: "Bob" },
  // });
  // console.log(secondEntry);

  // await prisma.profile.updateMany({
  //   where: { name: { contains: "A" } },
  //   data: { name: "**REDACTED**" },}
  // });
  // const entries = await prisma.profile.findMany({});
  // console.log(entries);

  // const { count } = await prisma.profile.deleteMany({});
  // console.log(count + " entries deleted");

  const tom = await prisma.user.create({
    data: {
      profile: {
        create: {
          name: "Tom",
        },
      },
      posts: {
        create: [
          {content: "Hello World"},
          {content: "It's me again"},
          {content: "This is awesome!"},
        ],
      },
    },
  });
  console.log(tom); // prints out something like `{id: 1}`

  const postsByTom = await prisma.post.findMany({
    where: {
      author: {
        profile: {
          name: {equals: "Tom"},
        },
      },
    },
  });
  console.log(postsByTom);

  await prisma.$disconnect();

  await prisma.disconnect();
}

main();
