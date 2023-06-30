import { prisma } from "../lib/prisma";

async function main() {
  const item = await prisma.item.upsert({
    where: { name: "first-item" },
    update: {},
    create: {
      name: "first-item",
    },
  });
  console.log({ item });
}

main()
  .then(() => prisma.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
