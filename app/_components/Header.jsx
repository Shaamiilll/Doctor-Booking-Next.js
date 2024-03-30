import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

function Header() {
    const Menu = [
        {
            id: 1,
            name: "Home",
            path: "/"
        },
        {
            id: 2,
            name: "Explore",
            path: "/"
        }, {
            id: 3,
            name: "Contact us",
            path: "/"
        },
    ]
    return (
        <div className='flex items-center justify-between p-4 shadow-sm'>
            <div className='flex items-center gap-10'>
                <Image src='/logo.svg' alt='logo'
                    width={180} height={80}
                />
                <ul className='md:flex gap-8 '>
                    {Menu.map((value, index) => (
                        <li>{value.name}</li>
                    ))}
                </ul>
            </div>
            <Button>Get started</Button>
        </div>

    )
}

export default Header