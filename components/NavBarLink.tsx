import Link from 'next/link'
import React from 'react'
import type { LinkProps } from '@/data/interface'

const NavBarLink = (item : LinkProps) => {
  return (
    <div>
    <Link
    href={item.href}
    >
    <p>{item.name}</p>
    </Link>
    </div>
  )
}

export default NavBarLink