import { cva, type VariantProps } from "class-variance-authority";
import { ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

const timeShiftButtonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 font-heading uppercase tracking-wider",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        hero: "bg-gradient-cosmic text-foreground hover:shadow-cosmic hover:scale-105 transition-all duration-300 font-bold",
        neon: "bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground hover:shadow-neon transition-all duration-300",
        plasma: "bg-gradient-secondary text-secondary-foreground hover:shadow-purple hover:scale-105 transition-all duration-300 font-bold",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        cosmic: "bg-card border border-primary/30 text-foreground hover:border-primary hover:shadow-neon transition-all duration-300"
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        xl: "h-14 rounded-lg px-12 text-lg",
        hero: "h-16 rounded-xl px-16 text-xl"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);

export interface TimeShiftButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof timeShiftButtonVariants> {}

const TimeShiftButton = forwardRef<HTMLButtonElement, TimeShiftButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(timeShiftButtonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
TimeShiftButton.displayName = "TimeShiftButton";

export { TimeShiftButton, timeShiftButtonVariants };