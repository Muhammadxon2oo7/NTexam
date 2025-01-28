"use client"
import React from 'react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Link from 'next/link'
import { logout } from './logout'

export const DropDown = ({ userNamee }: {userNamee:string  | undefined}) => {
  const handleOut=async()=>{
    logout()
  }
  return (
    <>
    <DropdownMenu>
          <DropdownMenuTrigger className="px-4 py-2 bg-gray-200 rounded-md text-sm font-medium text-gray-800 hover:bg-gray-300 truncate">
            {userNamee}
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-32">
            <DropdownMenuItem asChild>
              <Link href="/profile">Profile</Link>
            </DropdownMenuItem>
            <DropdownMenuItem onClick={handleOut}>
              Log out
            </DropdownMenuItem>
          </DropdownMenuContent>  
        </DropdownMenu>
    </>
  )
}
