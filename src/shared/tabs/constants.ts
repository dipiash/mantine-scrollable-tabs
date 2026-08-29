import type { ComboboxItem, TabsVariant } from "@mantine/core";

export const tabsVariants: Record<TabsVariant, TabsVariant> = {
    default: 'default',
    outline: 'outline',
    pills: 'pills',
}

export const tabsVariantsOptions: ComboboxItem<TabsVariant>[] = [
    { value: tabsVariants.default, label: 'Default' },
    { value: tabsVariants.outline, label: 'Outline' },
    { value: tabsVariants.pills, label: 'Pills' },
]

export const tabsData = [
    { value: 'tab1', label: 'Tab 1', content: 'Tab 1 content' },
    { value: 'tab2', label: 'Tab 2', content: 'Tab 2 content' },
    { value: 'tab3', label: 'Tab 3', content: 'Tab 3 content' },
    { value: 'tab4', label: 'Tab 4', content: 'Tab 4 content' },
    { value: 'tab5', label: 'Tab 5', content: 'Tab 5 content' },
    { value: 'tab6', label: 'Tab 6', content: 'Tab 6 content' },
    { value: 'tab7', label: 'Tab 7', content: 'Tab 7 content' },
];
