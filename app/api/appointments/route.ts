import { NextResponse } from "next/server";
import { createAppointment } from "@/services/appointment.service";
import { AppointmentSchemaConstraints } from "@/schemas/appointment.schema";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsedAppointment = AppointmentSchemaConstraints.safeParse(body);

    if (!parsedAppointment.success) {
      return NextResponse.json(
        { error: "Invalid appointment data", details: parsedAppointment.error },
        { status: 400 }
      );
    }
    const newAppointment = await createAppointment(
      parsedAppointment.data.clientId,
      parsedAppointment.data.timeSlotId
    );
    return NextResponse.json(newAppointment, { status: 201 });
    
    } catch (error) {
        return NextResponse.json(
        { error: "Failed to process request", details: error },
        { status: 500 }
      );
    }
}

