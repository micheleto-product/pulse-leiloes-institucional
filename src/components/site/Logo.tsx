import { cn } from "@/lib/utils";
import logo from "@/assets/pulse-logo.png.asset.json";

export function Logo({ className }: { className?: string }) {
  return (
    <img src={logo.url} alt="Pulse Leilões" width={247} height={66} className={cn("h-auto w-44 shrink-0", className)} />
  );
}
