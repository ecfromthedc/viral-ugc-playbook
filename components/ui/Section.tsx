import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
  background?: 'primary' | 'secondary' | 'tertiary' | 'pure' | 'muted';
  padding?: 'sm' | 'md' | 'lg' | 'xl';
}

const backgroundColors = {
  primary: 'bg-[#faf9f5]',
  secondary: 'bg-[#f0eee6]',
  tertiary: 'bg-[#faf9f6]',
  pure: 'bg-white',
  muted: 'bg-[#e8e6dc]',
};

const paddingSize = {
  sm: 'py-12 lg:py-16',
  md: 'py-16 lg:py-24',
  lg: 'py-24 lg:py-32',
  xl: 'py-32 lg:py-40',
};

export function Section({
  children,
  className,
  background = 'primary',
  padding = 'lg'
}: SectionProps) {
  return (
    <section className={cn(
      backgroundColors[background],
      paddingSize[padding],
      className
    )}>
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
}
