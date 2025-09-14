import { Role } from '@/types/globals'
import { currentUser } from '@clerk/nextjs/server'
import { checkRoles as checkRolesUtil } from '@/lib/auth'

export const checkRoles = async (rolesToCheck: Role[] = []) => {
  const user = await currentUser()
  const roleResult = checkRolesUtil(rolesToCheck, user?.publicMetadata?.roles as Role[])
  console.log('roles', user?.publicMetadata?.roles, roleResult)

  return roleResult
}
