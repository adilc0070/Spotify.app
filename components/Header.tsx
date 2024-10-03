'use client'

import { useRouter } from 'next/navigation'
import React from 'react'
import { BiSearch } from 'react-icons/bi'
import { HiHome } from 'react-icons/hi'
import { RxCaretLeft, RxCaretRight } from 'react-icons/rx'
import { twMerge } from 'tailwind-merge'
import Button from './Button'

interface HeaderProps {
    children: React.ReactNode
    className?: string
}

const Header: React.FC<HeaderProps> = ({ children, className }) => {
    const router = useRouter()

    const handleLogOut = () => {
        // Handle logout logic here
    }

    return (
        <div className={twMerge(`bg-gradient-to-b from-emerald-800 p-6`, className)}>
            <div className='w-full mb-4 flex justify-between items-center'>
                <div className='hidden md:flex gap-x-2 items-center'>
                    <button className='rounded-full bg-black flex items-center justify-center hover:opacity-75 transition'>
                        <RxCaretLeft
                            size={35}
                            className='text-white'
                            onClick={() => router.back()}
                        />
                    </button>
                    <button className='rounded-full bg-black flex items-center justify-center hover:opacity-75 transition'>
                        <RxCaretRight
                            size={35}
                            className='text-white'
                            onClick={() => router.forward()}
                        />
                    </button>
                </div>
                <div className='flex md:hidden gap-x-2 items-center'>
                    <button className='rounded-full p-2 bg-white flex items-center justify-center hover:opacity-75 transition'>
                        <HiHome
                            size={20}
                            className='text-black'
                        />
                    </button>
                    <button className='rounded-full p-2 bg-white flex items-center justify-center hover:opacity-75 transition'>
                        <BiSearch
                            size={20}
                            className='text-black'
                        />
                    </button>
                </div>
                <div className='flex justify-between items-center gap-x-4'>
                    <>
                        <div>
                            <Button onClick={() => { }} className='bg-transparent text-neutral-300 font-medium'>
                                Sign Up
                            </Button>
                        </div>
                        <div>
                            <Button onClick={() => { }} className='bg-white px-6 py-2'>
                                Log In
                            </Button>
                        </div>
                    </>
                </div>
            </div>
            {children}
        </div>
    )
}

export default Header
