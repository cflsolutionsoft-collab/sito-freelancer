// Pulsante riutilizzabile con varianti e microinterazioni

import { cn } from "@/lib/utils";
import type { ButtonHTMLAttributes, AnchorHTMLAttributes } from "react";

type ButtonVariant = "primary" | "secondary" | "outline" | "accent";
type ButtonSize = "default" | "lg";

type BaseProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
};

type ButtonAsButton = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

type ButtonAsLink = BaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

type ButtonProps = ButtonAsButton | ButtonAsLink;

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-primary text-white hover:bg-primary-dark shadow-md shadow-primary/20 hover:shadow-lg hover:shadow-primary/30 hover:-translate-y-0.5",
  secondary:
    "bg-card text-foreground border border-border hover:border-primary/30 hover:bg-primary-light hover:-translate-y-0.5 shadow-sm",
  outline:
    "border-2 border-primary text-primary hover:bg-primary hover:text-white hover:-translate-y-0.5",
  accent:
    "bg-accent text-white hover:bg-orange-700 shadow-md shadow-accent/20 hover:shadow-lg hover:shadow-accent/30 hover:-translate-y-0.5",
};

const sizeStyles: Record<ButtonSize, string> = {
  default: "px-6 py-2.5 text-sm",
  lg: "px-8 py-3.5 text-base",
};

export default function Button(props: ButtonProps) {
  const { variant = "primary", size = "default", className } = props;

  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-xl font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:ring-offset-2",
    variantStyles[variant],
    sizeStyles[size],
    className
  );

  if (props.href !== undefined) {
    const { href, variant: _, size: __, className: ___, ...linkProps } = props as ButtonAsLink;
    return <a href={href} className={classes} {...linkProps} />;
  }

  const { variant: _, size: __, className: ___, href: ____, ...buttonProps } = props as ButtonAsButton;
  return <button className={classes} {...buttonProps} />;
}
