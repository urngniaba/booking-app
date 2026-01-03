import {z} from 'zod';

export const RoleSchema = z.object({
    name: z.enum(['ADMIN', 'MANAGER', 'CLIENT']),
});