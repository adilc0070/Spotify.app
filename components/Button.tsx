import React, { forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> { }
const Button = forwardRef<HTMLButtonElement, ButtonProps>(({
    className, children, disabled, type = "button", ...props }, ref) => {

    return (
        <button type={type} disabled={disabled} className={twMerge(`w-full rounded-full bg-green-500 border-transparent px-3 py-2 disabled:cursor-not-allowed disabled:opacity-50 text-black font-bold `, className)} {...props} ref={ref}>
            {children}
        </button>
    )
})

Button.displayName = "Button"
export default Button