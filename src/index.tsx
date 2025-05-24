// @ts-ignore
import "./styles/tailwind.css";
import "./styles/loading.css";
import React from "react";
import { createRoot } from "react-dom/client";
import { I18nextProvider } from "react-i18next";
import i18n from "./lib/i18n";
import { ThemeProvider } from "./lib/theme-context";
import { LoadingProvider } from "./lib/loading-context";
import { Portfolio } from "./pages/Portfolio";

const app = document.getElementById("app");
const root = createRoot(app!);

root.render(
  <I18nextProvider i18n={i18n}>
    <ThemeProvider>
      <LoadingProvider initialLoadingTime={3000}>
        <Portfolio />
      </LoadingProvider>
    </ThemeProvider>
  </I18nextProvider>
);
