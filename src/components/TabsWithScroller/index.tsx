import { useState } from "react";
import { Scroller, Select, Stack, Tabs } from "@mantine/core";
import type { ComboboxItem, TabsVariant } from "@mantine/core";
import { tabsData, tabsVariants, tabsVariantsOptions } from "../../shared/tabs/constants";
import { useScrollableTabs } from "../../shared/hooks/useScrollableTabs";
import classes from "./TabsWithScroller.module.scss";

export const TabsWithScroller = () => {
    const { tabListReference } = useScrollableTabs();
    const [variant, setVariant] = useState<TabsVariant>(tabsVariants.default);

    const handleChangeTabsVariant = (value: TabsVariant | null, _: ComboboxItem) => {
        if (value === null) {
            setVariant(tabsVariants.default);

            return;
        }

        setVariant(tabsVariants[value]);
    };

    return (
        <Stack gap="xl">
            <Select
                label="Tabs with Scroller variant"
                data={tabsVariantsOptions}
                value={variant}
                onChange={handleChangeTabsVariant}
                px={8}
            />

            <Tabs
                classNames={{ list: classes.scrollerList, tab: classes.tab }}
                color="teal"
                variant={variant}
                defaultValue="tab7"
            >
                <Tabs.List ref={tabListReference}>
                    <Scroller>
                        {tabsData.map((tab) => (
                            <Tabs.Tab key={tab.value} value={tab.value}>
                                {tab.label}
                            </Tabs.Tab>
                        ))}
                    </Scroller>
                </Tabs.List>

                {tabsData.map((tab) => (
                    <Tabs.Panel key={tab.value} value={tab.value} p={8}>
                        {tab.content}
                    </Tabs.Panel>
                ))}
            </Tabs>
        </Stack>
    );
};
