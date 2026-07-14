import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { cn } from '@/utils/cn';

type NeonButtonVariant = 'primary' | 'secondary' | 'danger';

export interface NeonButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: NeonButtonVariant;
  className?: string;
}

const variantStyles: Record<NeonButtonVariant, string> = {
  primary:
    'border-cyan-400/60 text-cyan-300 hover:bg-cyan-400/10 hover:border-cyan-300 hover:shadow-[0_0_18px_rgba(34,211,238,0.45)] hover:drop-shadow-[0_0_10px_rgba(34,211,238,0.7)] focus-visible:ring-cyan-400/60',
  secondary:
    'border-fuchsia-500/60 text-fuchsia-300 hover:bg-fuchsia-500/10 hover:border-fuchsia-400 hover:shadow-[0_0_18px_rgba(217,70,239,0.45)] hover:drop-shadow-[0_0_10px_rgba(217,70,239,0.7)] focus-visible:ring-fuchsia-500/60',
  danger:
    'border-red-500/60 text-red-300 hover:bg-red-500/10 hover:border-red-400 hover:shadow-[0_0_18px_rgba(248,113,113,0.45)] hover:drop-shadow-[0_0_10px_rgba(248,113,113,0.7)] focus-visible:ring-red-500/60',
};

export function NeonButton({
  children,
  variant = 'primary',
  className,
  disabled = false,
  type = 'button',
  ...props
}: NeonButtonProps) {
  return (
    <button
      type={type}
      disabled={disabled}
      className={cn(
        'inline-flex items-center justify-center gap-2 rounded-md border bg-black/60 px-6 py-3 font-mono text-sm font-semibold uppercase tracking-widest text-white/90 backdrop-blur-sm transition-all duration-300 ease-out',
        'border-white/10 hover:-translate-y-0.5 hover:bg-black/75 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-black active:translate-y-0',
        'shadow-[0_0_0_1px_rgba(255,255,255,0.04)]',
        variantStyles[variant],
        disabled &&
          'cursor-not-allowed border-white/10 bg-white/5 text-white/40 opacity-60 hover:translate-y-0 hover:shadow-[0_0_0_1px_rgba(255,255,255,0.04)] hover:bg-white/5 hover:drop-shadow-none',
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}

export default NeonButton;