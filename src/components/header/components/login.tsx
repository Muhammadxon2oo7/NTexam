"use client"
import React, { useTransition } from 'react'
import { useForm } from "react-hook-form"
import { z } from "zod"
import { PasswordInput } from "@/components/ui/password-input"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { zodResolver } from '@hookform/resolvers/zod'
import { LucideLoaderPinwheel } from 'lucide-react'
import { login } from '@/service/auth/login'
import {useToast} from '@/hooks/use-toast'
const formSchema = z.object({
  email: z.string().email({
    message: 'email kiriting'
  }),
  password: z.string().min(4, {
    message: "kamida 5 ta bo'lsin",
  }),
})

export const Login = ({ setIsOpen }: { setIsOpen: React.Dispatch<React.SetStateAction<boolean>> }) => {
  const [transition, setTransition] = useTransition()
  const { toast } = useToast()
  const onSubmit = (data: z.infer<typeof formSchema>) => {
    setTransition(async () => {
      try {
        await login(data)
        setIsOpen(false)
        toast({
          variant: "default",
          title: "Muvaffaqiyatli",
          description: "Tizimga muvaffaqiyatli kirdingiz!",
          duration: 3000, 
        })      
      } catch (error) {
        const err = error as Error
        form.setError('email', { message: err.message })
        toast({
          variant: "destructive",
          title: "Xatolik",
          description: "Login muvaffaqiyatsiz tugadi.",
          duration: 5000, 
        })
      }
    })
  }

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema)
  })

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 pt-[10px]">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Elektron pochta</FormLabel>
              <FormControl>
                <Input type='email' placeholder="Elektron pochta" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Parol</FormLabel>
              <FormControl>
                <PasswordInput id="password" label="Password" placeholder="Parol kiriting" {...field} required />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">
          {transition ? <LucideLoaderPinwheel /> : ''}
          Submit
        </Button>
      </form>
    </Form>
  )
}
