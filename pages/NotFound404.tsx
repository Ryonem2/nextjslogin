import React from 'react'
import Image from 'next/image'

function NotFound404() {
    return (
        <div className="container mx-auto">
            <h1 className="text-center text-5xl font-bold text-red-500 mt-10">404</h1>
            <h2 className="text-center text-xl font-bold my-4">
                Page not found or this page is not availables
            </h2>
            <div className="flex justify-center items-center my-10">
            <Image alt="404Error" width="300" height="300"src="https://img.icons8.com/external-flatart-icons-flat-flatarticons/512/000000/external-error-contact-us-flatart-icons-flat-flatarticons.png"/>
            </div>
        </div>
    )
}

export default NotFound404
