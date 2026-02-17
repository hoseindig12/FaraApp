import React, { useState } from "react";

// ── Types ─────────────────────────────────────────────────────────────────────

export type FaraActionMode = "view" | "edit" | "new";

interface FaraActionBarProps {
  mode?: FaraActionMode;
  onTanzim?: () => void;
  onVirayesh?: () => void;
  onHazf?: () => void;
  onFirst?: () => void;
  onPrev?: () => void;
  onCopy?: () => void;
  onPaste?: () => void;
  onNext?: () => void;
  onLast?: () => void;
  onTayid?: () => void;
  onEnsaraf?: () => void;
}

// ── SVG Icons ─────────────────────────────────────────────────────────────────

const IconFirst = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <polygon points="14,3 7,8 14,13" fill="#1a6fc4" />
    <polygon points="9,3 2,8 9,13" fill="#1a6fc4" />
    <rect x="1" y="3" width="2" height="10" fill="#1a6fc4" />
  </svg>
);

const IconPrev = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <polygon points="13,3 6,8 13,13" fill="#1a6fc4" />
    <rect x="3" y="3" width="2" height="10" fill="#1a6fc4" />
  </svg>
);

const IconCopy = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <rect
      x="4"
      y="1"
      width="9"
      height="11"
      rx="1"
      fill="#fff"
      stroke="#1a6fc4"
      strokeWidth="1.2"
    />
    <rect
      x="2"
      y="4"
      width="9"
      height="11"
      rx="1"
      fill="#fff"
      stroke="#1a6fc4"
      strokeWidth="1.2"
    />
    <line x1="5" y1="7" x2="9" y2="7" stroke="#1a6fc4" strokeWidth="1" />
    <line x1="5" y1="9.5" x2="9" y2="9.5" stroke="#1a6fc4" strokeWidth="1" />
  </svg>
);

const IconPaste = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <rect
      x="3"
      y="3"
      width="10"
      height="12"
      rx="1"
      fill="#fff"
      stroke="#1a6fc4"
      strokeWidth="1.2"
    />
    <rect
      x="5"
      y="1"
      width="6"
      height="4"
      rx="1"
      fill="#c8d9ef"
      stroke="#1a6fc4"
      strokeWidth="1"
    />
    <line x1="5" y1="8" x2="11" y2="8" stroke="#1a6fc4" strokeWidth="1" />
    <line x1="5" y1="10.5" x2="11" y2="10.5" stroke="#1a6fc4" strokeWidth="1" />
    <line x1="5" y1="13" x2="9" y2="13" stroke="#1a6fc4" strokeWidth="1" />
  </svg>
);

const IconNext = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <polygon points="3,3 10,8 3,13" fill="#1a6fc4" />
    <rect x="11" y="3" width="2" height="10" fill="#1a6fc4" />
  </svg>
);

const IconLast = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <polygon points="2,3 9,8 2,13" fill="#1a6fc4" />
    <polygon points="7,3 14,8 7,13" fill="#1a6fc4" />
    <rect x="13" y="3" width="2" height="10" fill="#1a6fc4" />
  </svg>
);

const IconEdit = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
    <path
      d="M9 2L12 5L5 12H2V9L9 2Z"
      fill="#1a6fc4"
      stroke="#1a6fc4"
      strokeWidth="0.5"
    />
    <line x1="7" y1="4" x2="10" y2="7" stroke="white" strokeWidth="1" />
  </svg>
);

const IconDelete = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
    <rect x="2" y="4" width="10" height="9" rx="1" fill="#ef4444" />
    <rect x="1" y="2" width="12" height="2.5" rx="1" fill="#dc2626" />
    <rect x="5" y="0.5" width="4" height="2" rx="0.5" fill="#dc2626" />
    <line
      x1="5"
      y1="6.5"
      x2="5"
      y2="10.5"
      stroke="white"
      strokeWidth="1.2"
      strokeLinecap="round"
    />
    <line
      x1="7"
      y1="6.5"
      x2="7"
      y2="10.5"
      stroke="white"
      strokeWidth="1.2"
      strokeLinecap="round"
    />
    <line
      x1="9"
      y1="6.5"
      x2="9"
      y2="10.5"
      stroke="white"
      strokeWidth="1.2"
      strokeLinecap="round"
    />
  </svg>
);

const IconTanzim = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
    <circle cx="7" cy="7" r="5.5" fill="#22c55e" />
    <circle cx="7" cy="7" r="2" fill="white" />
    <line x1="7" y1="1" x2="7" y2="3.5" stroke="#22c55e" strokeWidth="1.5" />
    <line x1="7" y1="10.5" x2="7" y2="13" stroke="#22c55e" strokeWidth="1.5" />
    <line x1="1" y1="7" x2="3.5" y2="7" stroke="#22c55e" strokeWidth="1.5" />
    <line x1="10.5" y1="7" x2="13" y2="7" stroke="#22c55e" strokeWidth="1.5" />
  </svg>
);

const IconCheck = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
    <circle cx="7" cy="7" r="6" fill="#16a34a" />
    <polyline
      points="3.5,7 6,9.5 10.5,4.5"
      stroke="white"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  </svg>
);

const IconCancel = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
    <circle cx="7" cy="7" r="6" fill="#dc2626" />
    <line
      x1="4"
      y1="4"
      x2="10"
      y2="10"
      stroke="white"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
    <line
      x1="10"
      y1="4"
      x2="4"
      y2="10"
      stroke="white"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
  </svg>
);

// ── Button Component ──────────────────────────────────────────────────────────

const Btn: React.FC<{
  icon: React.ReactNode;
  label?: string;
  onClick?: () => void;
  disabled?: boolean;
  variant?: "default" | "green" | "red" | "blue";
}> = ({ icon, label, onClick, disabled = false, variant = "default" }) => {
  const [hovered, setHovered] = useState(false);
  const [pressed, setPressed] = useState(false);

  const bgMap = {
    default: hovered
      ? "linear-gradient(180deg,#dceeff,#c8dff5)"
      : "linear-gradient(180deg,#f0f4fa,#dce6f5)",
    green: hovered
      ? "linear-gradient(180deg,#d1fae5,#a7f3d0)"
      : "linear-gradient(180deg,#ecfdf5,#d1fae5)",
    red: hovered
      ? "linear-gradient(180deg,#fee2e2,#fecaca)"
      : "linear-gradient(180deg,#fef2f2,#fee2e2)",
    blue: hovered
      ? "linear-gradient(180deg,#dbeafe,#bfdbfe)"
      : "linear-gradient(180deg,#eff6ff,#dbeafe)",
  };

  const borderColor = {
    default: "#7ba4d4",
    green: "#16a34a",
    red: "#dc2626",
    blue: "#2563eb",
  }[variant];

  return (
    <button
      onClick={!disabled ? onClick : undefined}
      onMouseEnter={() => !disabled && setHovered(true)}
      onMouseLeave={() => {
        setHovered(false);
        setPressed(false);
      }}
      onMouseDown={() => !disabled && setPressed(true)}
      onMouseUp={() => setPressed(false)}
      disabled={disabled}
      style={{
        display: "flex",
        alignItems: "center",
        gap: 5,
        padding: "3px 10px",
        height: 26,
        background: pressed
          ? "linear-gradient(180deg,#b8cceb,#d4e4f7)"
          : bgMap[variant],
        border: `1px solid ${borderColor}`,
        borderRadius: 3,
        cursor: disabled ? "default" : "pointer",
        opacity: disabled ? 0.45 : 1,
        fontFamily: "'Tahoma','Segoe UI',sans-serif",
        fontSize: 11,
        color: "#1a1a1a",
        direction: "rtl",
        whiteSpace: "nowrap",
        boxShadow: pressed
          ? "inset 1px 1px 2px rgba(0,0,0,0.18)"
          : hovered
            ? "1px 1px 3px rgba(0,0,0,0.12)"
            : "none",
        transform: pressed ? "translate(1px,1px)" : "none",
        transition: "background 0.08s, box-shadow 0.08s",
        flexShrink: 0,
      }}
    >
      <span style={{ display: "flex", alignItems: "center" }}>{icon}</span>
      {label && <span>{label}</span>}
    </button>
  );
};

const NavBtn: React.FC<{
  icon: React.ReactNode;
  onClick?: () => void;
  title?: string;
}> = ({ icon, onClick, title }) => {
  const [hovered, setHovered] = useState(false);
  const [pressed, setPressed] = useState(false);

  return (
    <button
      onClick={onClick}
      title={title}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => {
        setHovered(false);
        setPressed(false);
      }}
      onMouseDown={() => setPressed(true)}
      onMouseUp={() => setPressed(false)}
      style={{
        width: 26,
        height: 26,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: pressed
          ? "linear-gradient(180deg,#b8cceb,#d4e4f7)"
          : hovered
            ? "linear-gradient(180deg,#dceeff,#c8dff5)"
            : "linear-gradient(180deg,#f0f4fa,#dce6f5)",
        border: "1px solid #7ba4d4",
        borderRadius: 3,
        cursor: "pointer",
        boxShadow: pressed
          ? "inset 1px 1px 2px rgba(0,0,0,0.15)"
          : hovered
            ? "1px 1px 3px rgba(0,0,0,0.1)"
            : "none",
        transform: pressed ? "translate(1px,1px)" : "none",
        transition: "background 0.08s",
        flexShrink: 0,
      }}
    >
      {icon}
    </button>
  );
};

const Divider = () => (
  <div
    style={{
      width: 1,
      height: 20,
      background:
        "linear-gradient(180deg,transparent,#94b8d8 30%,#94b8d8 70%,transparent)",
      margin: "0 4px",
      flexShrink: 0,
    }}
  />
);

// ── Main Component ────────────────────────────────────────────────────────────

const FaraActionBar: React.FC<FaraActionBarProps> = ({
  mode = "view",
  onTanzim,
  onVirayesh,
  onHazf,
  onFirst,
  onPrev,
  onCopy,
  onPaste,
  onNext,
  onLast,
  onTayid,
  onEnsaraf,
}) => {
  const isEditing = mode === "edit" || mode === "new";

  return (
    <div
      dir="rtl"
      style={{
        display: "flex",
        alignItems: "center",
        width: "100%",
        maxWidth: "100%",
        padding: "3px 8px",
        gap: 4,
        background:
          "linear-gradient(180deg,#f0f4fa 0%,#dce6f5 40%,#c8d9ef 100%)",
        borderBottom: "2px solid #7ba4d4",
        borderTop: "1px solid #e8f0fb",
        boxShadow: "inset 0 1px 0 rgba(255,255,255,0.8)",
        minWidth: 900,
        fontFamily: "'Tahoma','Segoe UI',sans-serif",
        userSelect: "none",
        direction: "rtl",
        boxSizing: "border-box",
      }}
    >
      {/* Right group: تنظیم / ویرایش / حذف */}
      <Btn
        icon={<IconTanzim />}
        label="تنظیم"
        onClick={onTanzim}
        variant="green"
      />
      <Divider />
      <Btn
        icon={<IconEdit />}
        label="ویرایش"
        onClick={onVirayesh}
        variant="blue"
      />
      <Btn icon={<IconDelete />} label="حذف" onClick={onHazf} variant="red" />

      {/* Spacer */}
      <div style={{ flex: 1 }} />

      {/* Center group: navigation */}
      <NavBtn icon={<IconLast />} onClick={onLast} title="آخر" />
      <NavBtn icon={<IconPrev />} onClick={onPrev} title="قبلی" />
      <NavBtn icon={<IconCopy />} onClick={onCopy} title="کپی" />
      <NavBtn icon={<IconPaste />} onClick={onPaste} title="چسباندن" />
      <NavBtn icon={<IconNext />} onClick={onNext} title="بعدی" />
      <NavBtn icon={<IconFirst />} onClick={onFirst} title="اول" />

      {/* Spacer */}
      <div style={{ flex: 1 }} />

      {/* Left group: تایید / انصراف */}
      <Btn
        icon={<IconCheck />}
        label="تایید"
        onClick={onTayid}
        variant="green"
        disabled={!isEditing}
      />
      <Btn
        icon={<IconCancel />}
        label="انصراف"
        onClick={onEnsaraf}
        variant="red"
        disabled={!isEditing}
      />
    </div>
  );
};

export default FaraActionBar;
