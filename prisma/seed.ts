import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
//   "npx prisma db seed"
async function main() {
  // Delete all `User` and `Message` records

  await prisma.user.deleteMany({});
  // (Re-)Create dummy `User`records
  await prisma.user.createMany({
    data: [
      {
        id: "7fd8d46c-7225-4aff-91f2-94ae9c24a419",
        first_name: "ogechukwu",
        middle_name: "Amazinggrace",
        last_name: "oduye",
        is_verified: false,
      },

      {
        id: "947ab542-09a7-4a23-941d-812d072270ea",
        first_name: "Michael",
        middle_name: "chibuike",
        last_name: "Amakoh",
        is_verified: false,
      },
      {
        id: "98b25a4e-2a24-42d3-b5f6-e26b1b4c21dd",
        first_name: "solomon",
        last_name: "Igori",
        is_verified: false,
      },
    ],
  });
}

main()
  .catch((e) => {
    console.log(e);
    process.exit(1);
  })
  .finally(async () => await prisma.$disconnect());
