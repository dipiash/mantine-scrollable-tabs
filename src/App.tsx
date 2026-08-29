import "@mantine/core/styles.css";
import { MantineProvider, Divider } from "@mantine/core";
import { theme } from "./theme";
import { Tabs } from "./components/Tabs";
import { TabsWithScroller } from "./components/TabsWithScroller";

export default function App() {
  return (
    <MantineProvider theme={theme}>
      <Tabs />
      <Divider my="sm" />
      <TabsWithScroller />
    </MantineProvider>
  );
}
