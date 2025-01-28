"use client"
import React, { useState } from 'react'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { AccountIcon } from '@/../public/img/header/AccountIcon'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Login } from './login'
import { Register } from './register'

export const Modal = ({ user }: { user: undefined | string }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [tabState, setTabState] = useState<'login' | 'register'>('register')

  return (
    <>
      {!user && <Button onClick={() => setIsOpen(true)} className='flex gap-[12px]'>Kirish <AccountIcon /></Button>}
      <Dialog open={isOpen} onOpenChange={() => setIsOpen(false)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Ro'yhatdan o'tish</DialogTitle>
            <DialogDescription>
              <Tabs value={tabState} onValueChange={setTabState} className="w-full">
                <TabsList>
                  <TabsTrigger value="login">Kirish</TabsTrigger>
                  <TabsTrigger value="register">Ro'yhatdan o'tish</TabsTrigger>
                </TabsList>
                <TabsContent value="login">
                  <Login setIsOpen={setIsOpen} />
                </TabsContent>
                <TabsContent value="register">
                  <Register setTabState={setTabState} />
                </TabsContent>
              </Tabs>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  )
}
