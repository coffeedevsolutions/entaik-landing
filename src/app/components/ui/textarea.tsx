import * as React from "react";

import { cn } from "./utils";

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "resize-none border-2 border-black placeholder:text-muted-foreground flex field-sizing-content min-h-16 w-full bg-input-background px-3 py-2 text-base transition-all outline-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm font-medium",
        "focus-visible:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] focus-visible:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]",
        "shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]",
        className,
      )}
      {...props}
    />
  );
}

export { Textarea };
