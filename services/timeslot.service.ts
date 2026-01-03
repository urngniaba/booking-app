import { prisma } from "@/lib/prisma";

export const createTimeslot = async (data: any) => {
  return await prisma.timeSlot.create({
    data,
  });
};

export const getAvailableTimeslots = async () => {
  return await prisma.timeSlot.findMany({
    where: { isAvailable: true },
  });
}
