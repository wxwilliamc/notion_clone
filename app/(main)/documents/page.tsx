"use client"

import { Button } from '@/components/ui/button';
import { useUser } from '@clerk/clerk-react'
import { PlusCircle } from 'lucide-react';
import Image from 'next/image'
import React from 'react'

const DocumentsPage = () => {

  const { user } = useUser();

  return (
    <div className='h-full flex items-center justify-center space-y-4 flex-col'>
      <Image 
        src="/assets/empty-here.png"
        alt="Empty"
        width={300}
        height={300}
        className='dark:hidden'
      />

      <Image 
        src="/assets/empty-dark.png"
        alt="Empty"
        width={300}
        height={300}
        className='hidden dark:block'
      />

      <h2 className='text-xl font-medium'>
        Welcome to {user?.fullName}&apos;s Gotion
      </h2>

      <Button>
        <PlusCircle className='h-4 w-4 mr-2'/>
        Take a note
      </Button>
    </div>
  )
}

export default DocumentsPage