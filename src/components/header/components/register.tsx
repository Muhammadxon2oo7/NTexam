"use client"
import React, { useTransition } from 'react'
import { useForm } from "react-hook-form"
import { z } from "zod"
import { PasswordInput } from "@/components/ui/password-input"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { zodResolver } from '@hookform/resolvers/zod'
import { LucideLoaderPinwheel } from 'lucide-react'
import { register } from '@/service/auth/register'
import { toast } from 'sonner'
import { useToast } from '@/hooks/use-toast'

const formSchema = z.object({
  username: z.string().min(4, {
    message: "foydalanuvchi nomi 4 ta harfdan kam bo'lmasin",
  }),
  email: z.string().email({
    message: 'email kiriting',
  }),
  password: z.string().min(4, {
    message: "kamida 5 ta bo'lsin",
  }),
})

export const Register = ({ setTabState }: { setTabState: React.Dispatch<React.SetStateAction<"login" | "register">> }) => {
  const [transition, setTransition] = useTransition()
  const { toast } = useToast()
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  })

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    setTransition(async () => {
      try {
        await register(data)

        setTabState("login")
        form.reset()
        toast({
          variant: "default",
          title: "Muvaffaqiyatli",
          description: "Tizimga muvaffaqiyatli kirdingiz!",
          duration: 2000,
        })
      } catch (error) {
        const err = error as Error
        form.setError('username', { message: err.message })
        toast({
          variant: "destructive",
          title: `${err}`,
          description: "Login muvaffaqiyatsiz tugadi.",
          duration: 2000,
        })
      }
    })
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 pt-[10px]">
        <FormField control={form.control} name="username" render={({ field }) => (
          <FormItem>
            <FormLabel>Foydalanuvchi nomi</FormLabel>
            <FormControl>
              <Input placeholder="Foydalanuvchi nomi" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )} />
        <FormField control={form.control} name="email" render={({ field }) => (
          <FormItem>
            <FormLabel>Elektiron pochta</FormLabel>
            <FormControl>
              <Input type='email' placeholder="Elektiron pochta" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )} />
        <FormField control={form.control} name="password" render={({ field }) => (
          <FormItem>
            <FormLabel>Parol</FormLabel>
            <FormControl>
              <PasswordInput id="password" label="Password" placeholder="parol kiriting" {...field} required />
            </FormControl>
            <FormMessage />
          </FormItem>
        )} />
        <Button type="submit">
          {transition ? <LucideLoaderPinwheel /> : ''}
          Submit
        </Button>
      </form>
    </Form>
  )
}
