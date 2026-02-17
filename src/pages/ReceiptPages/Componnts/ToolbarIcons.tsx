import React, { useState } from "react";
import {
  IconInvoiceFactors,
  IconReadout,
  IconCancel,
  IconReturn,
  IconTruck,
  IconRiali,
  IconSerials,
  IconPricing,
  IconPayment,
  IconWarranty,
  IconDocLink,
} from "./ToolbarIconsSvg";
import { defaultItems as builtinDefaultItems } from "./ToolbarDefaults";

export interface ToolbarItem {
  id: string;
  label: string;
  icon: React.ReactNode;
  disabled?: boolean;
  active?: boolean;
  onClick?: () => void;
}

interface FaraToolbarProps {
  items?: ToolbarItem[];
  onItemClick?: (id: string) => void;
}

// Icons are imported from ./ToolbarIconsSvg

// ── Default Items ────────────────────────────────────────────────────────────

const defaultItems: ToolbarItem[] = builtinDefaultItems;

// ── Component ────────────────────────────────────────────────────────────────

const FaraToolbar: React.FC<FaraToolbarProps> = ({
  items = defaultItems,
  onItemClick,
}) => {
  const [activeId, setActiveId] = useState<string | null>(
    items.find((i) => i.active)?.id ?? null,
  );
  const [pressedId, setPressedId] = useState<string | null>(null);

  const handleClick = (item: ToolbarItem) => {
    if (item.disabled) return;
    setActiveId(item.id);
    item.onClick?.();
    onItemClick?.(item.id);
  };

  return (
    <div
      dir="rtl"
      className="fara-toolbar"
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "stretch",
        width: "100%",
        maxWidth: "100%",
        background:
          "linear-gradient(180deg, #f0f4fa 0%, #dce6f5 40%, #c8d9ef 100%)",
        borderBottom: "2px solid #7ba4d4",
        borderTop: "1px solid #e8f0fb",
        padding: "2px 4px",
        gap: "1px",
        fontFamily: "'Tahoma', 'Segoe UI', sans-serif",
        userSelect: "none",
        direction: "rtl",
        boxShadow: "inset 0 1px 0 rgba(255,255,255,0.8)",
        boxSizing: "border-box",
      }}
    >
      {items.map((item, index) => {
        const isActive = activeId === item.id;
        const isPressed = pressedId === item.id;
        const isDisabled = !!item.disabled;

        return (
          <React.Fragment key={item.id}>
            <button
              title={item.label}
              disabled={isDisabled}
              onClick={() => handleClick(item)}
              onMouseDown={() => !isDisabled && setPressedId(item.id)}
              onMouseUp={() => setPressedId(null)}
              onMouseLeave={() => setPressedId(null)}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: "2px",
                padding: "4px 10px 5px",
                minWidth: "72px",
                cursor: isDisabled ? "default" : "pointer",
                border: "none",
                outline: "none",
                borderRadius: "3px",
                transition: "all 0.08s ease",
                position: "relative",

                // Active/pressed state — sunken look
                background: isActive
                  ? "linear-gradient(180deg, #b8cceb 0%, #d4e4f7 100%)"
                  : isPressed
                    ? "linear-gradient(180deg, #b8cceb 0%, #d4e4f7 100%)"
                    : "transparent",

                boxShadow: isActive
                  ? "inset 1px 1px 2px rgba(0,0,0,0.18), inset -1px -1px 1px rgba(255,255,255,0.4)"
                  : isPressed
                    ? "inset 1px 1px 2px rgba(0,0,0,0.18), inset -1px -1px 1px rgba(255,255,255,0.4)"
                    : "none",

                borderLeft:
                  isActive || isPressed
                    ? "1px solid #7ba4d4"
                    : "1px solid transparent",
                borderRight:
                  isActive || isPressed
                    ? "1px solid #7ba4d4"
                    : "1px solid transparent",
                borderTop:
                  isActive || isPressed
                    ? "1px solid #7ba4d4"
                    : "1px solid transparent",
                borderBottom:
                  isActive || isPressed
                    ? "1px solid #a0bdd8"
                    : "1px solid transparent",

                opacity: isDisabled ? 0.45 : 1,
                filter: isDisabled ? "grayscale(0.6)" : "none",
              }}
              onMouseEnter={(e) => {
                if (!isDisabled && !isActive) {
                  const el = e.currentTarget as HTMLButtonElement;
                  el.style.background =
                    "linear-gradient(180deg, #dceeff 0%, #c8dff5 100%)";
                  el.style.borderLeft = "1px solid #adc8e8";
                  el.style.borderRight = "1px solid #adc8e8";
                  el.style.borderTop = "1px solid #adc8e8";
                  el.style.borderBottom = "1px solid #adc8e8";
                  el.style.boxShadow =
                    "1px 1px 2px rgba(255,255,255,0.7), -1px -1px 1px rgba(0,0,0,0.06)";
                }
              }}
              onMouseLeave={(e) => {
                if (!isActive) {
                  const el = e.currentTarget as HTMLButtonElement;
                  el.style.background = "transparent";
                  el.style.borderLeft = "1px solid transparent";
                  el.style.borderRight = "1px solid transparent";
                  el.style.borderTop = "1px solid transparent";
                  el.style.borderBottom = "1px solid transparent";
                  el.style.boxShadow = "none";
                }
                setPressedId(null);
              }}
            >
              {/* Icon */}
              <span
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 34,
                  height: 34,
                  transform: isPressed ? "translate(1px, 1px)" : "none",
                  transition: "transform 0.05s",
                }}
              >
                {item.icon}
              </span>

              {/* Label */}
              <span
                style={{
                  fontSize: "11px",
                  color: isDisabled ? "#9ca3af" : "#1f2937",
                  whiteSpace: "nowrap",
                  lineHeight: 1.2,
                  transform: isPressed ? "translate(1px, 1px)" : "none",
                  transition: "transform 0.05s",
                  direction: "rtl",
                  fontFamily: "'Tahoma', sans-serif",
                }}
              >
                {item.label}
              </span>
            </button>

            {/* Divider every few items */}
            {(index === 3 || index === 6 || index === 8) && (
              <div
                style={{
                  width: "1px",
                  margin: "4px 2px",
                  background:
                    "linear-gradient(180deg, transparent, #94b8d8 30%, #94b8d8 70%, transparent)",
                  flexShrink: 0,
                }}
              />
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default FaraToolbar;
