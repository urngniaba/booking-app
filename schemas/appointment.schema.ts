/**
 * Appointment Schema
 * Defines the structure for appointment data validation
 * using Zod library.
 * Fields:
 * - timeSlotId: UUID of the associated time slot
 * - clientId: UUID of the client booking the appointment
 * - status: Status of the appointment (PENDING, CONFIRMED, COMPLETED, CANCELLED)
 */
import { z } from "zod";

export const AppointmentSchema = z.object({
  timeSlotId: z.uuid(),
  clientId: z.uuid(),
  status: z.enum(["PENDING", "CONFIRMED", "COMPLETED", "CANCELLED"]),
});
