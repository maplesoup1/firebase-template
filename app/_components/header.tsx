"use client"
import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { LoginLink, RegisterLink } from '@kinde-oss/kinde-auth-nextjs';

const navItems = ['Product', 'Pricing', 'Contact us', 'About us'];

const header = () => {
  return (
    <div>
      <div className='flex items-center justify-between p-5 shadow-sm'>

        <Image src='/logo.png' width={100} height={100} alt='logo'
        className='w-[50px] md:-[75px]'
        />

      <ul className='hidden md:flex gap-14 font-medium'>
        {navItems.map((item,index) => (
          <li className='hover:text-blue-400 transition-all duration-200 cursor-pointer' key={index}>{item}</li>
        ))}
      </ul>
      <div className='flex gap-5'>
      <LoginLink><Button variant='ghost'>Login</Button></LoginLink>
      <RegisterLink><Button>Get Started</Button></RegisterLink>
      </div>
    </div>
    </div>
  )
}

export default header
