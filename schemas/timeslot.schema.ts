// schemas/timeslot.schema.ts
import { z } from "zod";

export const TimeSlotSchemaConstraints = z.object({
  startTime: z
    .string()
    .min(1, "Start time is required"),

  endTime: z
    .string()
    .min(1, "End time is required"),

  managerId: z
    .string()
    .uuid("Invalid manager id"),
})
.refine(
    (data) => new Date(data.endTime) > new Date(data.startTime),
    {
      message: "End time must be after start time",
      path: ["endTime"],
    }
);

export type TimeSlotFormValues = z.infer<typeof TimeSlotSchemaConstraints>;
