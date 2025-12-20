import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

const variants = {
  primary: 'bg-[#1f1e1d] text-white hover:bg-[#333333] transition-colors duration-250',
  secondary: 'bg-[#44a6e4] text-white hover:bg-[#3590d0] transition-colors duration-250',
  outline: 'border-2 border-[#1f1e1d] text-[#1f1e1d] hover:bg-[#1f1e1d] hover:text-white transition-colors duration-250',
  ghost: 'text-[#1f1e1d] hover:bg-[#f0eee6] transition-colors duration-250',
};

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
};

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        'font-serif rounded-lg font-normal inline-flex items-center justify-center',
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
