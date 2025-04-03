import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import { theme } from "./theme";
import { Tabs } from "./components/Tabs";

export default function App() {
  return (
    <MantineProvider theme={theme}>
      <Tabs />
    </MantineProvider>
  );
}
