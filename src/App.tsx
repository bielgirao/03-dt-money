import { ThemeProvider } from 'styled-components';
import {defaultTheme} from "./styles/themes/default.ts";
import {Transactions} from "./pages/Transactions";
import {GlobalStyles} from "./styles/global.ts";

export function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
        <Transactions />
        <GlobalStyles />
    </ThemeProvider>
  )
}
