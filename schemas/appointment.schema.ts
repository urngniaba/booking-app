/**
 * Appointment Schema Constraints
 * Defines the validation rules for appointment-related data.
 */
import { z } from "zod";

export const AppointmentSchemaConstraints = z.object({
  timeSlotId: z.uuid(),
  clientId: z.uuid(),
  status: z.enum(["PENDING", "CONFIRMED", "COMPLETED", "CANCELLED"]),
});

export type AppointmentFormValues = z.infer<typeof AppointmentSchemaConstraints>;
