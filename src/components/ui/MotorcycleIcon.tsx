import { type SVGProps } from 'react';
import { cn } from '../../utils/cn';

export function MotorcycleIcon({ className, ...props }: SVGProps<SVGSVGElement>) {
    return (
        <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            className={cn("w-6 h-6", className)}
            {...props}
        >
            {/* Tabler-inspired high-fidelity motorcycle vector icon */}
            <circle cx="5" cy="16" r="3" />
            <circle cx="19" cy="16" r="3" />
            <path d="M7.5 14h5l4 -4h-10.5" />
            <path d="M9 14l4 -4" />
            <path d="M13 6h2l1.5 3l2 4" />
            <circle cx="9" cy="6" r="1" />
        </svg>
    );
}
