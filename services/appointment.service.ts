import { prisma } from "@/lib/prisma";

export const createAppointment = async (clientId: string, timeSlotId: string) => {
    const isExisting = await prisma.appointment.findFirst({
        where: {
            clientId,
            status: {in : ['PENDING', 'CONFIRMED']},
        },
    });

    if (isExisting) {
        throw new Error("Client already has an active appointment.");
    }

    return await prisma.appointment.create({
        data: {
            clientId,
            timeSlotId,
        },
    });
};