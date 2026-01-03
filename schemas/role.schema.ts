import {z} from 'zod';

export const RoleSchemaConstraints = z.object({
    name: z.enum(['ADMIN', 'MANAGER', 'CLIENT']),
});