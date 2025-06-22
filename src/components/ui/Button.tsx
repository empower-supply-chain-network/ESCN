import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/utils/cn"

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-full text-sm font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-emerald-green focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",
  {
    variants: {
      variant: {
        default: "bg-emerald-green text-text-on-medium hover:bg-forest-green shadow-md",
        destructive: "bg-red-500 text-white hover:bg-red-600",
        outline: "bg-transparent border border-emerald-green text-emerald-green hover:bg-emerald-green hover:text-text-on-medium",
        secondary: "bg-card-white text-emerald-green border-2 border-emerald-green hover:bg-emerald-green hover:text-text-on-medium",
        ghost: "hover:bg-gray-100",
        link: "text-emerald-green underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 py-2 px-6",
        sm: "h-9 px-4",
        lg: "h-12 px-8 text-base",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }