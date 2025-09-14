import type { CollectionConfig } from 'payload'
import { ClerkAuthStrategy } from './strategies/clerk'
import { isForbidden } from './access/is-forbidden'
import { isAdminEnabledRoles } from './access/is-admin-enabled-roles'

export const Users: CollectionConfig = {
  slug: 'users',
  admin: {
    useAsTitle: 'clerk_id',
    hidden: false,
    defaultColumns: ['clerk_id', 'email'],
    listSearchableFields: ['clerk_id', 'email'],
    baseListFilter: () => ({
      isDeleted: {
        not_equals: true,
      },
    }),
  },
  access: {
    create: isForbidden,
    read: isAdminEnabledRoles,
    update: isForbidden,
    delete: isForbidden,
    admin: isAdminEnabledRoles,
    unlock: isForbidden,
    readVersions: isForbidden,
  },
  auth: {
    disableLocalStrategy: true,
    strategies: [ClerkAuthStrategy],
  },
  fields: [
    {
      name: 'clerk_id',
      type: 'text',
      label: 'Clerk userId',
      required: true,
      index: true,
      unique: true,
    },
    {
      name: 'isDeleted',
      type: 'checkbox',
      label: 'Deleted',
      defaultValue: false,
      required: true,
      index: true,
      admin: {
        disableListColumn: true,
        disableListFilter: true,
        position: 'sidebar',
      },
    },
    {
      name: 'email',
      type: 'text',
      label: 'Email',
    },
    {
      name: 'refreshClerkDataButton',
      type: 'ui',
      admin: {
        components: {
          Field: {
            path: '@/components/payload/fields/refresh-clerk-data-button/refresh-clerk-data-button-field#RefreshClerkDataButtonField',
          },
        },
        disableListColumn: true,
        position: 'sidebar',
      },
    },
    {
      name: 'updateClerkUserRoles',
      type: 'ui',
      admin: {
        components: {
          Field: {
            path: '@/components/payload/fields/update-clerk-user-roles/update-clerk-user-roles-field#UpdateClerkUserRolesField',
          },
        },
        disableListColumn: true,
        position: 'sidebar',
      },
    },
  ],
}
