import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import "./index.css";

import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import rtlPlugin from "stylis-plugin-rtl";
import { prefixer } from "stylis";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";

import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

import dayjs from "dayjs";
import jalaliday from "jalaliday";

dayjs.extend(jalaliday);
dayjs.calendar("jalali");

// 👇 مهم
document.body.setAttribute("dir", "rtl");

const theme = createTheme({
  direction: "rtl",
  typography: {
    fontFamily: "IRANSans, Vazirmatn, sans-serif",
  },
});

const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <CacheProvider value={cacheRtl}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="fa">
        <App />
      </LocalizationProvider>
    </ThemeProvider>
  </CacheProvider>,
);
