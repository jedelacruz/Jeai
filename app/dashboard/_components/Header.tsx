import { UserButton } from '@clerk/nextjs'
import React from 'react'

function Header() {
  return (
    <div className='flex justify-end p-3 bg-white'>
      <div>
        <UserButton></UserButton>
      </div>
    </div>
  )
}

export default Header
