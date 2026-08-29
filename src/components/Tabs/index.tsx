import { useState } from "react";
import { Select, Stack, Tabs as MantineTabs } from "@mantine/core";
import type { ComboboxItem, TabsVariant } from "@mantine/core";
import { tabsData, tabsVariants, tabsVariantsOptions } from "../../shared/tabs/constants";
import { useScrollableTabs } from "../../shared/hooks/useScrollableTabs";
import classes from "./Tabs.module.scss";

export const Tabs = () => {
    const { tabListReference } = useScrollableTabs();
    const [variant, setVariant] = useState<TabsVariant>(tabsVariants.default);

    const handleChangeTabsVariant = (value: TabsVariant | null, _: ComboboxItem) => {
        if (value === null) {
            setVariant(tabsVariants.default);

            return;
        }

        setVariant(tabsVariants[value])
    }

    return (
        <Stack gap="xl">
            <Select
                label="Tabs variant"
                data={tabsVariantsOptions}
                value={variant}
                onChange={handleChangeTabsVariant}
                px={8}
            />

            <MantineTabs classNames={{ list: classes.list, tab: classes.tab }} color="teal" variant={variant} defaultValue="tab7">
                <MantineTabs.List ref={tabListReference}>
                    {tabsData.map((tab) => (
                        <MantineTabs.Tab key={tab.value} value={tab.value}>
                            {tab.label}
                        </MantineTabs.Tab>
                    ))}
                </MantineTabs.List>

                {tabsData.map((tab) => (
                    <MantineTabs.Panel key={tab.value} value={tab.value} p={8}>
                        {tab.content}
                    </MantineTabs.Panel>
                ))}
            </MantineTabs>
        </Stack>
    );
};
