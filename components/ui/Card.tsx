import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  variant?: 'default' | 'elevated' | 'bordered';
  padding?: 'sm' | 'md' | 'lg';
}

const variants = {
  default: 'bg-white',
  elevated: 'bg-white shadow-md',
  bordered: 'bg-white border border-[#e8e6dc]',
};

const paddings = {
  sm: 'p-4',
  md: 'p-6 lg:p-8',
  lg: 'p-8 lg:p-12',
};

export function Card({
  children,
  className,
  variant = 'default',
  padding = 'md'
}: CardProps) {
  return (
    <div className={cn(
      'rounded-xl transition-shadow duration-250',
      variants[variant],
      paddings[padding],
      className
    )}>
      {children}
    </div>
  );
}
