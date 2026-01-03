// import { NextResponse } from "next/server";
// import prisma from "@/lib/prisma";
// import { createAppointmentSchema } from "@/schemas/appointment.schema";

// export async function POST(req: Request) {
//   const body = await req.json();
//   const { timeSlotId } = createAppointmentSchema.parse(body);

//   const userId = req.headers.get("x-user-id")!;

//   // 1 rendez-vous max
//   const existing = await prisma.appointment.findFirst({
//     where: { clientId: userId, status: "PENDING" },
//   });

//   if (existing) {
//     return NextResponse.json(
//       { error: "Un rendez-vous est déjà en cours" },
//       { status: 400 }
//     );
//   }

//   const slot = await prisma.timeSlot.findUnique({ where: { id: timeSlotId } });
//   if (!slot || !slot.isAvailable) {
//     return NextResponse.json(
//       { error: "Créneau indisponible" },
//       { status: 400 }
//     );
//   }

//   const appointment = await prisma.appointment.create({
//     data: {
//       clientId: userId,
//       timeSlotId,
//     },
//   });

//   await prisma.timeSlot.update({
//     where: { id: timeSlotId },
//     data: { isAvailable: false },
//   });

//   return NextResponse.json(appointment);
// }

