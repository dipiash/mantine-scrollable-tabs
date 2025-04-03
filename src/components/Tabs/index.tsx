import classes from "./Tabs.module.scss";
import { ComboboxItem, Select, Stack, Tabs as MantineTabs, TabsVariant } from "@mantine/core";
import { useScrollableTabs } from "./base/useScrollableTabs.ts";
import { useState } from "react";
import { TabsVariants, TabsVariantsOptions } from "./base/constants.ts";

export const Tabs = () => {
    const { tabListReference } = useScrollableTabs();
    const [variant, setVariant] = useState<TabsVariant>(TabsVariants.default);

    const handleChangeTabsVariant = (value: string | null, _: ComboboxItem) => {
        if (value === null) {
            setVariant(TabsVariants.default);

            return;
        }

        setVariant(TabsVariants[value as TabsVariant])
    }

    return (
        <Stack gap="xl">
            <Select
                label="Tabs variant"
                data={TabsVariantsOptions}
                value={variant}
                onChange={handleChangeTabsVariant}
            />

            <MantineTabs classNames={{ list: classes.list, tab: classes.tab }} color="teal" variant={variant} defaultValue="tab7">
                <MantineTabs.List ref={tabListReference}>
                    <MantineTabs.Tab value="tab1">
                        Tab 1
                    </MantineTabs.Tab>
                    <MantineTabs.Tab
                        value="tab2"
                    >
                        Tab 2
                    </MantineTabs.Tab>
                    <MantineTabs.Tab
                        value="tab3"
                    >
                        Tab 3
                    </MantineTabs.Tab>

                    <MantineTabs.Tab
                        value="tab4"
                    >
                        Tab 4
                    </MantineTabs.Tab>

                    <MantineTabs.Tab
                        value="tab5"
                    >
                        Tab 5
                    </MantineTabs.Tab>
                    <MantineTabs.Tab
                        value="tab6"
                    >
                        Tab 6
                    </MantineTabs.Tab>
                    <MantineTabs.Tab
                        value="tab7"
                    >
                        Tab 7
                    </MantineTabs.Tab>
                </MantineTabs.List>

                <MantineTabs.Panel value="tab1">
                    Tab 1 content
                </MantineTabs.Panel>

                <MantineTabs.Panel value="tab2">
                    Tab 2 content
                </MantineTabs.Panel>

                <MantineTabs.Panel value="tab3">
                    Tab 3 content
                </MantineTabs.Panel>

                <MantineTabs.Panel value="tab4">
                    Tab 4 content
                </MantineTabs.Panel>

                <MantineTabs.Panel value="tab5">
                    Tab 5 content
                </MantineTabs.Panel>

                <MantineTabs.Panel value="tab6">
                    Tab 6 content
                </MantineTabs.Panel>

                <MantineTabs.Panel value="tab7">
                    Tab 7 content
                </MantineTabs.Panel>
            </MantineTabs>
        </Stack>
    );
};
