"use client";
import { cn } from "@/lib/utils";
import { GridPattern } from "@/components/magicui/grid-pattern";

export default function GridPatternLinearGradient() {
  return (
    <div
      className={cn(
        "absolute top-0 left-0 w-full h-full overflow-hidden rounded-lg bg-transparent",
        "transition-transform duration-300 ease-out"
      )}
    >
      <GridPattern
        width={35}
        height={35}
        x={-1}
        y={-1}
        strokeDasharray={"4 4"}
        className={cn(
          "[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)] "
        )}
      />
    </div>
  );
}
