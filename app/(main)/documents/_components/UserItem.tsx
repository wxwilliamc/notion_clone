import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { SignOutButton, useUser } from '@clerk/clerk-react'
import { ChevronsLeftRight } from 'lucide-react';
import React from 'react'

const UserItemCom = () => {
    const { user } = useUser();

  return (
    <DropdownMenu>
        <DropdownMenuTrigger asChild>
            <div className='flex items-center justify-center text-sm p-4 w-full hover:bg-primary/5 cursor-pointer'>
                <div className='gap-x-3 flex items-center max-w-[180px]'>
                    <span className='font-medium line-clamp-1'>
                        {user?.fullName}&apos;s Gotion
                    </span>
                </div>

                <ChevronsLeftRight className='rotate-90 ml-2 text-muted-foreground h-4 w-4'/>
            </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent className='w-72' align='end' alignOffset={11} forceMount>
            <div className='flex flex-col space-y-4 p-4'>
                <div className='flex items-center justify-between'>
                    <p>
                        Welcome, {user?.lastName}
                    </p>

                    <div className='rounded-md p-1'>
                        <Avatar className='h-8 w-8'>
                            <AvatarImage 
                                src={user?.imageUrl}
                            />
                        </Avatar>
                    </div>
                </div>

                <div className='space-y-1'>
                    <p className='text-sm line-clamp-1'>
                        {user?.emailAddresses[0].emailAddress}
                    </p>
                </div>
            </div>

            <DropdownMenuSeparator />
                <DropdownMenuItem asChild className='w-full cursor-pointer text-muted-foreground flex justify-end text-red-400'>
                    <SignOutButton>
                        Sign out
                    </SignOutButton>
                </DropdownMenuItem>
        </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default UserItemCom