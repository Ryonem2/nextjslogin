import React from 'react'
import ActiveLink from '../Layouts/components/ActiveLink'

function Navbar() {
    return (
        <nav className="flex items-center justify-between flex-wrap bg-white p-6 shadow-md">
            <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auhref">
                <div className="text-sm lg:flex-grow">
                <ActiveLink href='/' style='block mt-4 lg:inline-block lg:mt-0 text-gray-400 hover:text-gray-600 mr-4'>
                    Home
                </ActiveLink>
                <ActiveLink href='/' style='block mt-4 lg:inline-block lg:mt-0 text-gray-400 hover:text-gray-600 mr-4'>
                    Nav1
                </ActiveLink>
                <ActiveLink href='/' style='block mt-4 lg:inline-block lg:mt-0 text-gray-400 hover:text-gray-600 mr-4'>
                    Nav2
                </ActiveLink>
                </div>
                <div>
                    <ActiveLink style="inline-block text-sm px-3 underline text-center text-gray-300" href='/register'>register</ActiveLink>
                </div>
                <div>
                <ActiveLink href='/login' style="inline-block text-sm px-4 py-2 leading-none border rounded text-gray-400 border-gray-400 hover:border-transparent hover:text-white hover:bg-gray-500 mt-4 lg:mt-0">Login?</ActiveLink>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
