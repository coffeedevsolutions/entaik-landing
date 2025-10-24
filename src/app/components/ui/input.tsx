import * as React from "react";

import { cn } from "./utils";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground border-2 border-black flex h-10 w-full min-w-0 px-3 py-2 text-base bg-input-background transition-all outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-semibold disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm font-medium",
        "focus-visible:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] focus-visible:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]",
        "shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]",
        className,
      )}
      {...props}
    />
  );
}

export { Input };
