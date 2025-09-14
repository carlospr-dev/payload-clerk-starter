'use client'

import { useClerk } from '@clerk/nextjs'
import { LogOutIcon } from '@payloadcms/ui'
import React from 'react'

export const LogOutButton: React.FC = () => {
  const { signOut } = useClerk()

  const handleOnClick = (event: React.MouseEvent) => {
    event.preventDefault()
    signOut({ redirectUrl: '/' }).finally(() => {
      window.location.href = '/'
    })
  }

  return (
    <a
      style={{
        bottom: '60px',
        left: '20px',
        position: 'absolute',
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
      }}
      id="log-out-button"
      href="#"
      onClick={handleOnClick}
    >
      <LogOutIcon />
    </a>
  )
}

export default LogOutButton
