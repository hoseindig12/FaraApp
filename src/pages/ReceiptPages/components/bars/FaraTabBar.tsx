import React, { useState } from "react";

// ── Types ─────────────────────────────────────────────────────────────────────

export interface FaraTab {
  id: string;
  label: string;
  disabled?: boolean;
}

interface FaraTabBarProps {
  tabs: FaraTab[];
  activeTab?: string;
  onChange?: (id: string) => void;
  variant?: "bottom" | "top"; // bottom = Image1, top = Image2
}

// ── Component ─────────────────────────────────────────────────────────────────

const FaraTabBar: React.FC<FaraTabBarProps> = ({
  tabs,
  activeTab: externalActive,
  onChange,
  variant = "bottom",
}) => {
  const [internalActive, setInternalActive] = useState(tabs[0]?.id ?? "");
  const active = externalActive ?? internalActive;

  const handleClick = (tab: FaraTab) => {
    if (tab.disabled) return;
    setInternalActive(tab.id);
    onChange?.(tab.id);
  };

  // ── Image 1 style: white tabs on light-blue bar, bottom border active ──────
  if (variant === "bottom") {
    return (
      <div
        dir="rtl"
        style={{
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "flex-start",
          background: "linear-gradient(180deg,#dce8f8 0%,#b8d0ec 100%)",
          borderTop: "3px solid #1a1a2e",
          borderBottom: "1px solid #7ba4d4",
          padding: "0 6px",
          gap: 2,
          direction: "rtl",
          userSelect: "none",
          minWidth: 600,
          height: 26,
          boxSizing: "border-box" as const,
        }}
      >
        {tabs.map((tab) => {
          const isActive = tab.id === active;
          return (
            <button
              key={tab.id}
              onClick={() => handleClick(tab)}
              disabled={tab.disabled}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "0 14px",
                height: isActive ? 22 : 20,
                marginBottom: 0,
                background: isActive
                  ? "#ffffff"
                  : "linear-gradient(180deg,#e8f0fb,#d4e4f4)",
                border: "1px solid",
                borderColor: isActive ? "#7ba4d4" : "#a0bcd8",
                borderBottom: isActive ? "2px solid #1a6fc4" : "1px solid #a0bcd8",
                borderRadius: "3px 3px 0 0",
                cursor: tab.disabled ? "default" : "pointer",
                fontFamily: "'Tahoma','Segoe UI',sans-serif",
                fontSize: 11,
                fontWeight: isActive ? "bold" : "normal",
                color: isActive ? "#1a1a1a" : "#444",
                opacity: tab.disabled ? 0.5 : 1,
                whiteSpace: "nowrap",
                transition: "all 0.1s ease",
                boxShadow: isActive
                  ? "0 -1px 3px rgba(0,0,0,0.08)"
                  : "none",
                outline: "none",
              }}
            >
              {tab.label}
            </button>
          );
        })}
      </div>
    );
  }

  // ── Image 2 style: dark header bar with colored active tab ─────────────────
  return (
    <div
      dir="rtl"
      style={{
        display: "flex",
        alignItems: "center",
        background: "linear-gradient(180deg,#2a3a5c 0%,#1a2a4c 100%)",
        borderBottom: "2px solid #4a6a9c",
        padding: "0 6px",
        gap: 1,
        direction: "rtl",
        userSelect: "none",
        minWidth: 600,
        height: 28,
        boxSizing: "border-box" as const,
      }}
    >
      {tabs.map((tab) => {
        const isActive = tab.id === active;
        return (
          <button
            key={tab.id}
            onClick={() => handleClick(tab)}
            disabled={tab.disabled}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "0 16px",
              height: 24,
              background: isActive
                ? "linear-gradient(180deg,#6ea8d8 0%,#4a88c0 100%)"
                : "transparent",
              border: isActive
                ? "1px solid #3a6a9c"
                : "1px solid transparent",
              borderRadius: 3,
              cursor: tab.disabled ? "default" : "pointer",
              fontFamily: "'Tahoma','Segoe UI',sans-serif",
              fontSize: 11,
              fontWeight: isActive ? "bold" : "normal",
              color: isActive ? "#ffffff" : "#b8cce4",
              opacity: tab.disabled ? 0.4 : 1,
              whiteSpace: "nowrap",
              transition: "all 0.1s ease",
              outline: "none",
              boxShadow: isActive
                ? "inset 0 1px 0 rgba(255,255,255,0.25), 0 1px 3px rgba(0,0,0,0.3)"
                : "none",
            }}
            onMouseEnter={(e) => {
              if (!isActive && !tab.disabled) {
                (e.currentTarget as HTMLButtonElement).style.background =
                  "rgba(255,255,255,0.08)";
                (e.currentTarget as HTMLButtonElement).style.color = "#dceeff";
              }
            }}
            onMouseLeave={(e) => {
              if (!isActive) {
                (e.currentTarget as HTMLButtonElement).style.background =
                  "transparent";
                (e.currentTarget as HTMLButtonElement).style.color = "#b8cce4";
              }
            }}
          >
            {tab.label}
          </button>
        );
      })}
    </div>
  );
};

export default FaraTabBar;

// ── Usage Examples ────────────────────────────────────────────────────────────
//
// Image 1 style (bottom border active tab):
// <FaraTabBar
//   variant="bottom"
//   tabs={[
//     { id: "record",  label: "رکورد جاری" },
//     { id: "list",    label: "نمایش لیست" },
//   ]}
//   onChange={(id) => console.log(id)}
// />
//
// Image 2 style (dark header with colored active):
// <FaraTabBar
//   variant="top"
//   tabs={[
//     { id: "tools",    label: "ابزارهای عمومی" },
//     { id: "ops",      label: "ابزارهای عملیاتی" },
//     { id: "forms",    label: "فرم‌های مرتبط" },
//   ]}
//   onChange={(id) => console.log(id)}
// />
