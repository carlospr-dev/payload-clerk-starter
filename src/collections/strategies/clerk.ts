import { auth, currentUser } from '@clerk/nextjs/server'
import {
  AuthStrategy,
  AuthStrategyFunctionArgs,
  AuthStrategyResult,
  type Payload,
  TypedUser,
} from 'payload'

export async function getUser({ payload }: { payload: Payload }): Promise<TypedUser | null> {
  const { userId }: { userId: string | null } = await auth()
  const user = await currentUser()

  if (!userId || !user) {
    return null
  }

  let currentPayloadUser
  const findUserQuery = await payload.find({
    collection: 'users',
    where: {
      clerk_id: {
        equals: userId,
      },
    },
  })
  if (findUserQuery.docs.length === 0) {
    const emailAddresses = [
      ...new Set(user.emailAddresses.map((userEmailAddress) => userEmailAddress.emailAddress)),
    ]

    currentPayloadUser = await payload.create({
      collection: 'users',
      data: {
        clerk_id: userId,
        email: emailAddresses[0],
        isDeleted: false,
      },
    })
  } else {
    currentPayloadUser = findUserQuery?.docs[0]
  }

  return {
    collection: 'users',
    ...currentPayloadUser,
  } as TypedUser
}

async function authenticate({ payload }: AuthStrategyFunctionArgs): Promise<AuthStrategyResult> {
  const user = await getUser({ payload })

  if (!user) {
    return { user: null }
  }

  return {
    user,
  }
}

export const ClerkAuthStrategy: AuthStrategy = {
  name: 'clerk-auth-strategy',
  authenticate,
}
