import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <nav className="DataStructure_Navigator absolute bottom-0 flex items-center justify-evenly text-black">
          <Link href="#" id="DataStructure_links">
            ARRAY
          </Link>
          <Link href="#" id="DataStructure_links">
            STACK
          </Link>
          <Link href="#" id="DataStructure_links">
            QUEUE
          </Link>
          <Link href="#" id="DataStructure_links">
            LINKED LIST
          </Link>
        </nav>
  )
}
