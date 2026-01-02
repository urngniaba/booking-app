import { z } from "zod";

export const createAppointmentSchema = z.object({
  timeSlotId: z.string().uuid(),
});

export const updateAppointmentSchema = z.object({
  status: z.enum(["CANCELLED"]),
});
