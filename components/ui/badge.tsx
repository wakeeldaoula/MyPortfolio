import { cn } from "@/lib/utils"

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "secondary" | "outline" | "skill"
}

function Badge({ className, variant = "default", ...props }: BadgeProps) {
  const variants = {
    default:
      "bg-primary text-primary-foreground hover:bg-primary/80",
    secondary:
      "bg-secondary text-secondary-foreground hover:bg-secondary/80",
    outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
    skill:
      "bg-gradient-to-r from-primary/20 to-accent/20 text-foreground border border-primary/30 hover:border-primary/60 hover:from-primary/30 hover:to-accent/30",
  }

  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium transition-all duration-300 cursor-default",
        variants[variant],
        className
      )}
      {...props}
    />
  )
}

export { Badge }
