import { type ButtonHTMLAttributes, forwardRef } from 'react';
import { cn } from '../../utils/cn';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'outline' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
    fullWidth?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = 'primary', size = 'md', fullWidth, ...props }, ref) => {
        return (
            <button
                ref={ref}
                className={cn(
                    "inline-flex items-center justify-center font-brand-heading font-bold italic uppercase tracking-wider transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-brand-red focus:ring-offset-2 focus:ring-offset-brand-navy disabled:opacity-50 disabled:pointer-events-none rounded-none",
                    {
                        'bg-brand-red text-white shadow-hard hover:brightness-110 active:translate-y-1 active:shadow-none': variant === 'primary',
                        'bg-transparent border-2 border-white text-white hover:bg-white/10': variant === 'outline',
                        'bg-transparent text-gray-300 hover:text-white': variant === 'ghost',
                        'text-sm py-2 px-4': size === 'sm',
                        'py-3 px-8': size === 'md',
                        'text-xl py-4 px-10': size === 'lg',
                        'w-full': fullWidth,
                    },
                    className
                )}
                {...props}
            />
        );
    }
);
Button.displayName = "Button";

export { Button };
