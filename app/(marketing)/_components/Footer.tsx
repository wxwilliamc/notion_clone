import Logo from '@/components/Logo'
import { Button } from '@/components/ui/button'
import React from 'react'

const Footer = () => {
  return (
    <div className='w-full p-6 flex items-center bg-background z-50 dark:bg-[#1F1F1F]'>
        <Logo />

        <div className='md:ml-auto w-full justify-between md:justify-end flex items-center gap-x-2 text-muted-foreground'>
            <Button variant='ghost' className='dark:text-white'>
                Privacy Policy
            </Button>

            <Button variant='ghost' className='dark:text-white'>
                Terms & Conditions
            </Button>
        </div>
    </div>
  )
}

export default Footer