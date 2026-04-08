import React from "react";
import { cn } from "../utils/cn";

const Button = ({ variant = "primary", size = "md", disabled, className, children }) => {
  return (
    <button
      disabled={disabled}
      className={cn(
        // Base styles — hamesha
        "inline-flex items-center justify-center rounded-lg font-semibold transition-all duration-200",

        // Variant styles
        variant === "primary" && "bg-blue-600 text-white hover:bg-blue-700",
        variant === "secondary" && "bg-gray-100 text-gray-900 hover:bg-gray-200",
        variant === "danger" && "bg-red-500 text-white hover:bg-red-600",
        variant === "ghost" && "text-gray-600 hover:bg-gray-100",

        // Size styles
        size === "sm" && "px-3 py-1.5 text-sm",
        size === "md" && "px-4 py-2 text-base",
        size === "lg" && "px-6 py-3 text-lg",

        // Disabled state
        disabled && "opacity-50 cursor-not-allowed pointer-events-none",

        // Custom className — bahar se aaya (override allow karo)
        className,
      )}
    >
      {children}
    </button>
  );
};

export default Button;
