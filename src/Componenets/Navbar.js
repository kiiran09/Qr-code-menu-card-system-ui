import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='bg-purple-600 text-white'>
      <div className='h-16 px-2 flex place-items-center'>
        <ul className='px-2 py-4 flex space-x-4 justify-end'>
          <li className='font-semibold font-serif'>QR Code Menu Card System</li>
          <li className='pl-10 font-serif'>
            <Link
              to={{
                pathname: "/homepage"
              }}
            >
              Home
            </Link>
          </li>
          <li className='font-serif'>About</li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar