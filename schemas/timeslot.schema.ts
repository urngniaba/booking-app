import {z} from 'zod';

export const TimeSlotSchema = z.object({
    startTime: z.coerce.date(),
    endTime: z.coerce.date(),
    managerId: z.uuid(),
});