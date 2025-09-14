'use client'

import React from 'react'
import Link from 'next/link'
import { useUser } from '@clerk/nextjs'
import { checkRoles } from '@/lib/auth'
import { SUPER_ADMIN_ROLES } from '@/constants/auth'
import { Role } from '@/types/globals'

export const ClerkUsersLink: React.FC = () => {
  const { isLoaded, user } = useUser()

  if (
    !isLoaded ||
    !user?.publicMetadata?.roles ||
    !checkRoles(SUPER_ADMIN_ROLES, user.publicMetadata.roles as Array<Role>)
  ) {
    return null
  }

  return <Link href="/admin/clerk-users">Clerk users</Link>
}

export default ClerkUsersLink
