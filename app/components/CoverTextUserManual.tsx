import React from "react";
import { Cover } from "@/components/ui/cover"; // Assume Cover adds styling or animations

export function CoverTextUserManual() {
    return (
        <div>
            <h1 className="text-4xl md:text-4xl lg:text-6xl font-semibold max-w-7xl mx-auto text-center mt-6 relative z-20 py-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white h-[15rem]">
                Build amazing experiences <br /> from <Cover>anywhere</Cover>
            </h1>
        </div>
    );
}
