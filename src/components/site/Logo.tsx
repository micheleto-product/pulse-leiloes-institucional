import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-3", className)} aria-label="Pulse Leilões">
      <span className="grid h-10 w-10 place-items-center border-2 border-primary font-serif text-lg font-bold leading-none text-primary">
        PL
      </span>
      <span className="flex flex-col leading-none">
        <span className="font-serif text-2xl font-bold tracking-wide text-foreground">PULSE</span>
        <span className="mt-1 text-[0.6rem] font-semibold tracking-[0.55em] text-primary">LEILÕES</span>
      </span>
    </span>
  );
}
