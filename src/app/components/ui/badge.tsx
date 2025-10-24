import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "./utils";

const badgeVariants = cva(
  "inline-flex items-center justify-center border-2 border-black px-2 py-0.5 text-xs font-semibold w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none transition-all overflow-hidden shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground [a&]:hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] [a&]:hover:translate-x-[1px] [a&]:hover:translate-y-[1px]",
        secondary:
          "bg-secondary text-secondary-foreground [a&]:hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] [a&]:hover:translate-x-[1px] [a&]:hover:translate-y-[1px]",
        destructive:
          "bg-destructive text-white [a&]:hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] [a&]:hover:translate-x-[1px] [a&]:hover:translate-y-[1px]",
        outline:
          "bg-background text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

function Badge({
  className,
  variant,
  asChild = false,
  ...props
}: React.ComponentProps<"span"> &
  VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "span";

  return (
    <Comp
      data-slot="badge"
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  );
}

export { Badge, badgeVariants };
