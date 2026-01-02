

export const RoleName =  ["ADMIN", "USER", "MANAGER"] as const;

export type RoleName = typeof RoleName[number];