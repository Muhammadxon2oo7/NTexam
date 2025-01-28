"use client"

import * as React from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { EyeIcon, EyeOffIcon } from "lucide-react"

interface PasswordInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
}

export function PasswordInput({ label, className, ...props }: PasswordInputProps) {
  const [showPassword, setShowPassword] = React.useState(false)

  const togglePasswordVisibility = () => setShowPassword(!showPassword)

  return (
    <div className="relative">
      
      <div className="relative">
        <Input type={showPassword ? "text" : "password"} className={`pr-10 ${className}`} {...props} />
        <Button
          type="button"
          variant="ghost"
          size="icon"
          className="absolute inset-y-0 right-0 h-full px-3 py-2 hover:bg-transparent"
          onClick={togglePasswordVisibility}
          tabIndex={-1}
        >
          {showPassword ? (
            <EyeOffIcon className="h-4 w-4 text-gray-500" aria-hidden="true" />
          ) : (
            <EyeIcon className="h-4 w-4 text-gray-500" aria-hidden="true" />
          )}
        </Button>
      </div>
    </div>
  )
}

