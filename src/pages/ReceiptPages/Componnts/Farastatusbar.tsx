import React, { useState, useEffect } from "react";

// ── Types ─────────────────────────────────────────────────────────────────────

export interface FaraStatusBarProps {
  vaziatForm?: string; // وضعیت فرم
  namayesh?: string; // نمایش
  farmaban?: string; // فرابیام
  namKarbarJari?: string; // نام کاربر جاری
  dore?: string; // دوره
  showClock?: boolean;
  onInfoClick?: () => void;
}

// ── Shamsi date/time ──────────────────────────────────────────────────────────
// Simple Jalali approximation (works for 2024-2025)
function toJalali(date: Date): string {
  const jy = 1400 + Math.floor(date.getFullYear() - 2021);
  // simplified - use dayjs/jalaliday in real project
  const months = [
    "فروردین",
    "اردیبهشت",
    "خرداد",
    "تیر",
    "مرداد",
    "شهریور",
    "مهر",
    "آبان",
    "آذر",
    "دی",
    "بهمن",
    "اسفند",
  ];
  const gMonth = date.getMonth();
  const jMonth = gMonth >= 8 ? gMonth - 8 : gMonth + 4;
  const day = String(date.getDate()).padStart(2, "0");
  const year =
    date.getFullYear() <= 2020 ? 1399 : 1400 + (date.getFullYear() - 2021);

  // Use a fixed jalali format for display
  const y = date.getFullYear();
  const m = date.getMonth() + 1;
  const d = date.getDate();
  // Approximate jalali
  const jYear = y - (m <= 3 ? 622 : 621);
  const jMon = m <= 3 ? m + 9 : m - 3;
  const jDay = d;
  return `${jYear}/${String(jMon).padStart(2, "0")}/${String(jDay).padStart(2, "0")}`;
}

function formatTime(date: Date): string {
  const h = String(date.getHours()).padStart(2, "0");
  const m = String(date.getMinutes()).padStart(2, "0");
  const s = String(date.getSeconds()).padStart(2, "0");
  return `${h}:${m}:${s}`;
}

// ── Component ─────────────────────────────────────────────────────────────────

const FaraStatusBar: React.FC<FaraStatusBarProps> = ({
  vaziatForm = "نمایش",
  namayesh = "نمایش",
  farmaban = "فرابیام",
  namKarbarJari = "B_Baha_Alibeyki (۱۴۰۳)",
  dore = "دوره",
  showClock = true,
  onInfoClick,
}) => {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    if (!showClock) return;
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, [showClock]);

  const barStyle: React.CSSProperties = {
    direction: "rtl",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 8px",
    height: 20,
    background: "linear-gradient(180deg,#dce8f8 0%,#c4d8f0 100%)",
    borderTop: "1px solid #7ba4d4",
    borderBottom: "1px solid #5a8fc4",
    fontFamily: "'Tahoma','Segoe UI',sans-serif",
    fontSize: 11,
    color: "#1a2a3a",
    userSelect: "none",
    minWidth: 900,
    gap: 0,
  };

  const sep: React.CSSProperties = {
    width: 1,
    height: 14,
    background: "#94b8d8",
    margin: "0 8px",
    flexShrink: 0,
  };

  const infoIconStyle: React.CSSProperties = {
    width: 16,
    height: 16,
    borderRadius: "50%",
    background: "linear-gradient(135deg,#3b82f6,#1d4ed8)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    fontSize: 9,
    fontWeight: "bold",
    flexShrink: 0,
    cursor: onInfoClick ? "pointer" : "default",
    boxShadow: "0 1px 2px rgba(0,0,0,0.2)",
  };

  return (
    <div style={barStyle}>
      {/* Right: وضعیت فرم */}
      <div
        style={{ display: "flex", alignItems: "center", gap: 6, flexShrink: 0 }}
      >
        <span style={infoIconStyle} onClick={onInfoClick} title="اطلاعات">
          i
        </span>
        <span style={{ color: "#374151" }}>وضعیت فرم :</span>
        <span style={{ color: "#1a1a1a", fontWeight: "bold" }}>
          {vaziatForm}
        </span>
      </div>

      <div style={sep} />

      {/* فرابیام */}
      <div
        style={{ display: "flex", alignItems: "center", gap: 4, flexShrink: 0 }}
      >
        <span style={{ color: "#374151" }}>{farmaban}</span>
      </div>

      <div style={sep} />

      {/* نام کاربر جاری */}
      <div
        style={{ display: "flex", alignItems: "center", gap: 4, flexShrink: 0 }}
      >
        <span style={{ color: "#374151" }}>نام کاربر جاری:</span>
        <span style={{ color: "#1a1a1a" }}>{namKarbarJari}</span>
      </div>

      <div style={sep} />

      {/* دوره */}
      <div
        style={{ display: "flex", alignItems: "center", gap: 4, flexShrink: 0 }}
      >
        <span style={{ color: "#1a1a1a" }}>{dore}</span>
      </div>

      {/* Spacer */}
      <div style={{ flex: 1 }} />

      {/* Left: تاریخ و ساعت */}
      {showClock && (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 6,
            direction: "ltr",
            flexShrink: 0,
            fontFamily: "'Tahoma',sans-serif",
            fontSize: 11,
          }}
        >
          <span style={{ color: "#374151", direction: "rtl" }}>ب.ظ</span>
          <span
            style={{ color: "#1a1a1a", fontWeight: "bold", letterSpacing: 0.5 }}
          >
            {formatTime(now)}
          </span>
          <span style={{ color: "#1a1a1a" }}>{toJalali(now)}</span>
        </div>
      )}
    </div>
  );
};

export default FaraStatusBar;
