import Image from 'next/image'
import React from 'react'

const HeroesCom = () => {
  return (
    <div className='flex flex-col items-center justify-center max-w-5xl'>
        <div className='flex items-center'>
            
            <div className='relative w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] md:w-[400px] md:h-[400px]'>
                <Image 
                    src='/assets/reading.png'
                    alt='reading'
                    className='object-contain dark:hidden'
                    fill
                />

                <Image 
                    src='/assets/reading-dark.png'
                    alt='reading'
                    className='object-contain hidden dark:block'
                    fill
                />
            </div>
            
            <div className='relative h-[400px] w-[400px] hidden md:block'>
                <Image 
                    src='/assets/documents.png'
                    alt='documents'
                    className='object-contain dark:hidden'
                    fill
                />

                <Image 
                    src='/assets/documents-dark.png'
                    alt='documents'
                    className='object-contain hidden dark:block'
                    fill
                />
            </div>
        </div>
    </div>
  )
}

export default HeroesCom