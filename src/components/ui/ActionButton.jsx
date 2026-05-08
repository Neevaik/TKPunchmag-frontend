import Link from "next/link";

export default function ActionButton({
  children,
  variant = "primary",
  size = "md",
  as = "button",
  href,
  onClick,
  className = "",
  ...props
}) {
  const variants = {
    primary:
      "bg-primary text-white shadow-[0_0_20px_rgba(212,17,17,0.4)] hover:bg-red-700",
    secondary:
      "bg-white text-black hover:bg-gray-200",
    outline:
      "border border-white text-white hover:bg-white hover:text-black",
  };

  const sizes = {
    sm: "h-10 px-4 text-sm",
    md: "h-12 px-6 text-base",
    lg: "h-14 px-8 text-lg",
  };

  const baseStyles =
    "inline-flex items-center justify-center gap-2 rounded-lg font-bold uppercase tracking-widest transition-transform hover:scale-105 cursor-pointer";

  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  if (as === "link") {
    return (
      <Link href={href} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  if (as === "a") {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={classes} {...props}>
      {children}
    </button>
  );
}