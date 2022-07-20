import { ThemeProvider } from "styled-components";
import { Button } from "@/components/Button";
import { defautlTheme } from "@/styles/themes/default";
import { GlobalStyle } from "@/styles/global";

export function App() {
  return (
    <ThemeProvider theme={defautlTheme}>
      <h1>
        Hello <b>World</b>!
      </h1>
      <Button variant="danger" />
      <Button />
      <Button />
      <Button />

      <GlobalStyle />
    </ThemeProvider>
  );
}
