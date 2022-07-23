import { useState, useEffect } from "react";
import "@renoeno/dsc-design-system-meiuca/dist/components/header.js";
import "@renoeno/dsc-design-system-meiuca/dist/components/typography.js";
import "@renoeno/dsc-design-system-meiuca/dist/components/radio-group.js";
import "@renoeno/dsc-design-system-meiuca/dist/components/radio.js";
import "@renoeno/dsc-design-system-meiuca/dist/components/switch.js";
import "@renoeno/dsc-design-system-meiuca/dist/components/button.js";
import { useTheme } from "../../hooks/ThemeContext";
import "./style.scss";

export default function AppHeader() {
  const { theme, handleTheme } = useTheme();
  const [mode, setMode] = useState("light");
  const [actualTheme, setActualTheme] = useState("tema-1");

  useEffect(() => {
    document
      .getElementsByTagName("dsc-switch")[0]
      .addEventListener("dscChange", (e) =>
        setMode(!e.detail.checked ? "light" : "dark")
      );
    document
      .getElementsByTagName("dsc-radio-group")[0]
      .addEventListener("dscChange", (e) => setActualTheme(e.detail.value));
  }, []);

  useEffect(() => {
    handleTheme(actualTheme, theme.brand, mode);
  }, [mode, actualTheme]);

  return (
    <header className="header">
      <div className="grid container grid-cols-12 gap-x-1 md:gap-x-2 lg:gap-x-3">
        <div className="col-span-12">
          <dsc-header>
            <div className="header-content">
              <dsc-typography class="only-mobile" component="heading" size="xs">
                Trocar tema da landing page
              </dsc-typography>
              <dsc-radio-group>
                <dsc-radio label="Tema 01" value="tema-1" checked></dsc-radio>

                <dsc-radio label="Tema 02" value="tema-2"></dsc-radio>
              </dsc-radio-group>
              <dsc-typography class="only-mobile" component="heading" size="xs">
                Ativar Dark Mode
              </dsc-typography>
              <dsc-switch label="Dark"></dsc-switch>
            </div>
          </dsc-header>
        </div>
      </div>
    </header>
  );
}
