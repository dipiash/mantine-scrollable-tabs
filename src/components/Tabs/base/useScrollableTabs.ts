import { useEffect, useRef } from "react";

export const useScrollableTabs = () => {
    const tabListReference = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const observer = new MutationObserver(() => {
            const activeTab = tabListReference.current?.querySelector<HTMLButtonElement>(
                '[aria-selected="true"]'
            );

            if (activeTab) {
                activeTab.scrollIntoView({
                    behavior: "smooth",
                    inline: "center",
                    block: "nearest",
                });
            }
        });

        if (tabListReference.current) {
            observer.observe(tabListReference.current, {
                attributes: true,
                subtree: true,
            });
        }

        return () => observer.disconnect();
    }, []);

    return {
        tabListReference,
    };
};