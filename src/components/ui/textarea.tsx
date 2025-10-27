import * as React from "react";

import { cn } from "@/lib/utils";

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(({ className, ...props }, ref) => {
  return (
    <textarea
      className={cn(
        "flex min-h-[80px] w-full rounded-md border border-[hsl(216_17%_22%)] bg-[#12151A] px-3 py-2 text-sm text-[hsl(216_30%_97%)] ring-offset-background placeholder:text-[#8A90A0] focus-visible:outline-none focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-[rgba(255,122,0,0.18)] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      ref={ref}
      {...props}
    />
  );
});
Textarea.displayName = "Textarea";

export { Textarea };
