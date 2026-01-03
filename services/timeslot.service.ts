import { prisma } from "@/lib/prisma";

export const createTimeSlot = async (data: any) => {
  return await prisma.timeSlot.create({
    data,
  });
};

export const getAvailableTimeSlots = async () => {
  return await prisma.timeSlot.findMany({
    where: { isAvailable: true },
  });
}
