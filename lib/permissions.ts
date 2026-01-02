import { RoleName } from "@/lib/userRoleName";

export function hasRole(userRole: RoleName, allowed: RoleName[]) {
  return allowed.includes(userRole);
}
