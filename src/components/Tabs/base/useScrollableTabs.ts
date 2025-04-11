import { useEffect, useRef } from "react";
import { rafThrottle } from "../../../shared/utils/rafThrottle";

const ACTIVE_TAB_SELECTOR = '[aria-selected="true"]'

const scrollToActiveTab = (element?: HTMLDivElement) => {
    const activeTab = element?.querySelector<HTMLButtonElement>(ACTIVE_TAB_SELECTOR);

    if (activeTab) {
        activeTab.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
    }
};

export const useScrollableTabs = () => {
    const tabListReference = useRef<HTMLDivElement | undefined>(undefined);

    useEffect(() => {
        // Scroll immediately after mounting
        scrollToActiveTab(tabListReference.current);

        // Scroll when active
        const observer = new MutationObserver(() => {
            scrollToActiveTab(tabListReference.current);
        });

        if (tabListReference.current) {
            observer.observe(tabListReference.current, {
                attributes: true,
                subtree: true,
            });
        }

        // Add resize handler
        const throttledHandleResize = rafThrottle(() => {
            scrollToActiveTab(tabListReference.current);
        });

        window.addEventListener("resize", throttledHandleResize);

        return () => {
            observer.disconnect();
            window.removeEventListener("resize", throttledHandleResize);
        }
    }, []);

    return {
        tabListReference,
    };
};