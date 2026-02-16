import ReactDOM from "react-dom/client";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { CssBaseline } from "@mui/material";
import { faIR as faIRCore } from "@mui/material/locale";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { faIR as faIRPickers } from "@mui/x-date-pickers/locales";
import { faIR as faIRGrid } from "@mui/x-data-grid/locales";
import dayjs from "dayjs";
import jalaliday from "jalaliday";
import { prefixer } from "stylis";
import rtlPlugin from "stylis-plugin-rtl";
import App from "./App";
import "./index.css";

dayjs.extend(jalaliday);
dayjs.calendar("jalali");

document.documentElement.setAttribute("dir", "rtl");

const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});

const theme = createTheme(
  {
    direction: "rtl",
    typography: {
      fontFamily: "IRANSans, Vazirmatn, sans-serif",
    },
  },
  faIRCore,
  faIRGrid,
  faIRPickers,
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <CacheProvider value={cacheRtl}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <LocalizationProvider
        dateAdapter={AdapterDayjs}
        dateLibInstance={dayjs}
        adapterLocale="fa"
      >
        <App />
      </LocalizationProvider>
    </ThemeProvider>
  </CacheProvider>,
);
