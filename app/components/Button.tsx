import { ButtonHTMLAttributes, FC, ReactNode } from 'react';
import { cn } from '@/lib/utils'; // Make sure to install Shadcn utility functions for className merging

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: ReactNode;
  children: ReactNode;
}

const Button: FC<ButtonProps> = ({ icon, children, className, ...props }) => {
  return (
    <button
      className={cn(
        'px-6 py-2 rounded-lg text-white transition-all duration-300 transform hover:scale-105',
        'bg-primary hover:bg-secondary',
        className
      )}
      {...props}
    >
      <div className="flex items-center space-x-2">
        {icon && <span>{icon}</span>}
        <span>{children}</span>
      </div>
    </button>
  );
};

export default Button;
