import React, { useState } from "react";

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

// ── Built-in SVG Icons ──────────────────────────────────────────────────────

const IconInvoiceFactors = () => (
  <svg
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-8 h-8"
  >
    <rect
      x="6"
      y="4"
      width="22"
      height="28"
      rx="2"
      fill="#fff"
      stroke="#1a6fc4"
      strokeWidth="1.5"
    />
    <rect x="6" y="4" width="22" height="6" rx="2" fill="#1a6fc4" />
    <line
      x1="10"
      y1="16"
      x2="24"
      y2="16"
      stroke="#1a6fc4"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <line
      x1="10"
      y1="21"
      x2="24"
      y2="21"
      stroke="#1a6fc4"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <line
      x1="10"
      y1="26"
      x2="18"
      y2="26"
      stroke="#1a6fc4"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <circle cx="30" cy="30" r="8" fill="#22c55e" />
    <text
      x="30"
      y="34"
      textAnchor="middle"
      fill="white"
      fontSize="10"
      fontWeight="bold"
    >
      $
    </text>
  </svg>
);

const IconReadout = () => (
  <svg
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-8 h-8"
  >
    <rect
      x="4"
      y="8"
      width="24"
      height="18"
      rx="2"
      fill="#fff"
      stroke="#1a6fc4"
      strokeWidth="1.5"
    />
    <rect x="4" y="8" width="24" height="5" rx="2" fill="#2563eb" />
    <line
      x1="8"
      y1="19"
      x2="20"
      y2="19"
      stroke="#93c5fd"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <line
      x1="8"
      y1="23"
      x2="16"
      y2="23"
      stroke="#93c5fd"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <circle cx="30" cy="30" r="7" fill="#f59e0b" />
    <text
      x="30"
      y="34"
      textAnchor="middle"
      fill="white"
      fontSize="9"
      fontWeight="bold"
    >
      !
    </text>
  </svg>
);

const IconCancel = () => (
  <svg
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-8 h-8"
  >
    <rect
      x="6"
      y="5"
      width="20"
      height="26"
      rx="2"
      fill="#fff"
      stroke="#6b7280"
      strokeWidth="1.5"
    />
    <rect x="6" y="5" width="20" height="5" rx="2" fill="#6b7280" />
    <line
      x1="10"
      y1="16"
      x2="22"
      y2="16"
      stroke="#d1d5db"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <line
      x1="10"
      y1="21"
      x2="22"
      y2="21"
      stroke="#d1d5db"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <circle cx="29" cy="29" r="8" fill="#ef4444" />
    <line
      x1="25"
      y1="25"
      x2="33"
      y2="33"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <line
      x1="33"
      y1="25"
      x2="25"
      y2="33"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

const IconReturn = () => (
  <svg
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-8 h-8"
  >
    <path
      d="M28 8 L28 20 Q28 26 22 26 L12 26"
      stroke="#1a6fc4"
      strokeWidth="2"
      fill="none"
      strokeLinecap="round"
    />
    <polygon points="8,22 12,28 16,22" fill="#1a6fc4" />
    <rect
      x="26"
      y="5"
      width="8"
      height="8"
      rx="1"
      fill="#22c55e"
      opacity="0.8"
    />
    <text
      x="30"
      y="12"
      textAnchor="middle"
      fill="white"
      fontSize="7"
      fontWeight="bold"
    >
      ✓
    </text>
  </svg>
);

const IconTruck = () => (
  <svg
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-8 h-8"
  >
    <rect
      x="2"
      y="14"
      width="22"
      height="14"
      rx="2"
      fill="#16a34a"
      stroke="#15803d"
      strokeWidth="1"
    />
    <path
      d="M24 18 L32 18 L36 24 L36 28 L24 28 Z"
      fill="#22c55e"
      stroke="#15803d"
      strokeWidth="1"
    />
    <rect x="2" y="12" width="22" height="4" rx="1" fill="#15803d" />
    <circle
      cx="9"
      cy="30"
      r="3.5"
      fill="#1f2937"
      stroke="#374151"
      strokeWidth="1"
    />
    <circle cx="9" cy="30" r="1.5" fill="#9ca3af" />
    <circle
      cx="29"
      cy="30"
      r="3.5"
      fill="#1f2937"
      stroke="#374151"
      strokeWidth="1"
    />
    <circle cx="29" cy="30" r="1.5" fill="#9ca3af" />
  </svg>
);

const IconRiali = () => (
  <svg
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-8 h-8"
  >
    <circle
      cx="20"
      cy="20"
      r="16"
      fill="#fef3c7"
      stroke="#d97706"
      strokeWidth="1.5"
    />
    <text
      x="20"
      y="26"
      textAnchor="middle"
      fill="#92400e"
      fontSize="18"
      fontWeight="bold"
      fontFamily="serif"
    >
      ﷼
    </text>
    <path
      d="M8 34 L20 38 L32 34"
      stroke="#d97706"
      strokeWidth="1.5"
      fill="none"
      strokeLinecap="round"
    />
  </svg>
);

const IconSerials = () => (
  <svg
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-8 h-8"
  >
    <rect
      x="6"
      y="6"
      width="20"
      height="26"
      rx="2"
      fill="#fff"
      stroke="#6b7280"
      strokeWidth="1.5"
    />
    <line
      x1="10"
      y1="12"
      x2="22"
      y2="12"
      stroke="#9ca3af"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <line
      x1="10"
      y1="17"
      x2="22"
      y2="17"
      stroke="#9ca3af"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <line
      x1="10"
      y1="22"
      x2="22"
      y2="22"
      stroke="#9ca3af"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <line
      x1="10"
      y1="27"
      x2="16"
      y2="27"
      stroke="#9ca3af"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <line
      x1="28"
      y1="15"
      x2="36"
      y2="15"
      stroke="#ef4444"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    <line
      x1="28"
      y1="20"
      x2="36"
      y2="20"
      stroke="#ef4444"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    <line
      x1="28"
      y1="25"
      x2="36"
      y2="25"
      stroke="#ef4444"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
  </svg>
);

const IconPricing = () => (
  <svg
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-8 h-8"
  >
    <rect
      x="6"
      y="8"
      width="28"
      height="24"
      rx="2"
      fill="#fff"
      stroke="#1a6fc4"
      strokeWidth="1.5"
    />
    <rect x="6" y="8" width="28" height="6" rx="2" fill="#1a6fc4" />
    <text
      x="20"
      y="14"
      textAnchor="middle"
      fill="white"
      fontSize="6"
      fontWeight="bold"
    >
      قیمت
    </text>
    <line x1="10" y1="20" x2="30" y2="20" stroke="#bfdbfe" strokeWidth="1" />
    <line x1="10" y1="25" x2="30" y2="25" stroke="#bfdbfe" strokeWidth="1" />
    <line x1="22" y1="14" x2="22" y2="32" stroke="#bfdbfe" strokeWidth="1" />
    <rect
      x="23"
      y="21"
      width="6"
      height="3"
      rx="0.5"
      fill="#22c55e"
      opacity="0.8"
    />
    <rect
      x="23"
      y="26"
      width="4"
      height="3"
      rx="0.5"
      fill="#3b82f6"
      opacity="0.8"
    />
  </svg>
);

const IconPayment = () => (
  <svg
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-8 h-8"
  >
    <rect
      x="4"
      y="10"
      width="32"
      height="22"
      rx="3"
      fill="#1a6fc4"
      stroke="#1e40af"
      strokeWidth="1"
    />
    <rect x="4" y="15" width="32" height="5" fill="#1e3a8a" />
    <rect x="8" y="25" width="10" height="4" rx="1" fill="#fbbf24" />
    <rect x="22" y="25" width="5" height="4" rx="1" fill="#fff" opacity="0.4" />
    <rect x="29" y="25" width="5" height="4" rx="1" fill="#fff" opacity="0.4" />
  </svg>
);

const IconWarranty = () => (
  <svg
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-8 h-8"
  >
    <path
      d="M20 4 L34 10 L34 22 Q34 32 20 38 Q6 32 6 22 L6 10 Z"
      fill="#dbeafe"
      stroke="#1a6fc4"
      strokeWidth="1.5"
    />
    <path
      d="M20 8 L30 13 L30 22 Q30 29 20 34 Q10 29 10 22 L10 13 Z"
      fill="#bfdbfe"
    />
    <circle
      cx="20"
      cy="20"
      r="6"
      fill="#fff"
      stroke="#1a6fc4"
      strokeWidth="1.5"
    />
    <text
      x="20"
      y="24"
      textAnchor="middle"
      fill="#1a6fc4"
      fontSize="9"
      fontWeight="bold"
    >
      G
    </text>
  </svg>
);

const IconDocLink = () => (
  <svg
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-8 h-8"
  >
    <rect
      x="4"
      y="6"
      width="14"
      height="18"
      rx="2"
      fill="#fff"
      stroke="#1a6fc4"
      strokeWidth="1.5"
    />
    <rect x="4" y="6" width="14" height="4" rx="1" fill="#1a6fc4" />
    <rect
      x="22"
      y="16"
      width="14"
      height="18"
      rx="2"
      fill="#fff"
      stroke="#f59e0b"
      strokeWidth="1.5"
    />
    <rect x="22" y="16" width="14" height="4" rx="1" fill="#f59e0b" />
    <path
      d="M18 16 Q20 16 20 20 Q20 24 22 24"
      stroke="#6b7280"
      strokeWidth="1.5"
      fill="none"
      strokeLinecap="round"
    />
    <circle cx="20" cy="20" r="2" fill="#6b7280" />
  </svg>
);

// ── Default Items ────────────────────────────────────────────────────────────

const defaultItems: ToolbarItem[] = [
  { id: "warranty", label: "صدور کارت گارانتی", icon: <IconWarranty /> },
  { id: "payment", label: "پرداخت", icon: <IconPayment /> },
  { id: "pricing", label: "قیمت‌گذاری", icon: <IconPricing /> },
  {
    id: "serials",
    label: "سریال‌های حذف شده",
    icon: <IconSerials />,
    disabled: true,
  },
  {
    id: "doclink",
    label: "درج بین اسناد",
    icon: <IconDocLink />,
    active: true,
  },
  { id: "truck", label: "بارنامه و باسکول", icon: <IconTruck /> },
  { id: "riali", label: "ریالی نشده‌ها", icon: <IconRiali /> },
  { id: "return", label: "ارجاع", icon: <IconReturn /> },
  { id: "cancel", label: "ابطال / احیا", icon: <IconCancel /> },
  { id: "readout", label: "فراخوانی", icon: <IconReadout /> },
  { id: "invoice", label: "عوامل فاکتور", icon: <IconInvoiceFactors /> },
];

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
