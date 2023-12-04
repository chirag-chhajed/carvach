import { cn } from "@/lib/utils";
import { forwardRef } from "react";

const Sidebar = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <nav
    className={cn(
      "absolute md:hidden bg-yellow-300 w-full transition-all ease-in-out duration-500 z-0",
      className
    )}
    ref={ref}
    {...props}
  />
));

Sidebar.displayName = "Sidebar";

export default Sidebar;
