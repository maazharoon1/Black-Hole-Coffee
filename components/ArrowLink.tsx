import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";

interface ArrowLinkProps {
  href: string;
  children: ReactNode;
  variant?: "fill" | "ghost";
  external?: boolean;
  className?: string;
  showArrow?: boolean;
}

export default function ArrowLink({
  href,
  children,
  variant = "fill",
  external = false,
  className = "",
  showArrow = true,
}: ArrowLinkProps) {
  return (
    <a
      href={href}
      className={`btn ${variant === "fill" ? "btn-fill" : "btn-ghost"} ${className}`}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {children}
      {showArrow && <ArrowRight aria-hidden="true" />}
    </a>
  );
}
