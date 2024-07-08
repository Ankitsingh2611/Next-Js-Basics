import React from 'react'
import Link from 'next/link'
const NavBar = () => {
  return (
    <div className='py-2 flex justify-center gap-2'>
        <Link href='/'>Home</Link>
        <Link href='/users'>Users</Link>
        <Link href='/todo'>Todo</Link>
    </div>
  )
}

export default NavBar
