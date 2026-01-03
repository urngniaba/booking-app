import { NextResponse } from "next/server";
import { TimeSlotSchemaConstraints } from "@/schemas/timeslot.schema";
import {
  createTimeSlot,
  getAvailableTimeSlots,
} from "@/services/timeslot.service";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsedTimeSlot = TimeSlotSchemaConstraints.safeParse(body);

    if (!parsedTimeSlot.success) {
      return NextResponse.json(
        { error: "Invalid time slot data", details: parsedTimeSlot.error },
        { status: 400 }
      );
    }
    const newTimeSlot = await createTimeSlot(parsedTimeSlot.data);
    return NextResponse.json(newTimeSlot, { status: 201 });

  } catch (error) {
    return NextResponse.json(
      { error: "Failed to process request", details: error },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const timeSlots = await getAvailableTimeSlots();
    return NextResponse.json(timeSlots, { status: 200 });
    
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to retrieve time slots", details: error },
      { status: 500 }
    );
  }
}
