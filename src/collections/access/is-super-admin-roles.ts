import { SUPER_ADMIN_ROLES } from '@/constants/auth'
import { checkRoles } from '@/lib/server/auth-utils'

export const isSuperAdminRoles = () => checkRoles(SUPER_ADMIN_ROLES)
