import {email, z} from 'zod';

export const UserSchemaConstraints = z.object({
    email: z.email(),
    name: z.string().min(2).max(100),
    password: z.string().min(6).max(100),
    roleId: z.uuid(),
});