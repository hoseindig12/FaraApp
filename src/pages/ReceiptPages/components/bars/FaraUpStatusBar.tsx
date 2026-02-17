import React from "react";

// ── Types ─────────────────────────────────────────────────────────────────────
interface FaraStatusBarProps {
  /** متن سمت راست - کلید */
  statusLabel?: string;
  /** متن سمت راست - مقدار */
  statusValue?: string;
  /** متن سمت چپ - برچسب */
  structureLabel?: string;
  /** متن سمت چپ - وضعیت فعال/غیرفعال */
  structureValue?: string;
  /** نمایش دات سبز */
  showDot?: boolean;
}

// ── Styles ────────────────────────────────────────────────────────────────────
const s: Record<string, React.CSSProperties> = {
  bar: {
    direction: "rtl",
    display: "flex",
    flexDirection: "row",
    alignItems: "stretch",
    width: "100%",
    height: 22,
    background: "linear-gradient(180deg, #eef4fc 0%, #dce8f8 100%)",
    border: "1px solid #7ba4d4",
    borderRadius: 2,
    fontFamily: "'Tahoma','Segoe UI',sans-serif",
    fontSize: 11,
    color: "#1a1a1a",
    overflow: "hidden",
    boxSizing: "border-box",
  },
  right: {
    display: "flex",
    alignItems: "center",
    padding: "0 8px",
    borderLeft: "1px solid #a0bdd8",
    whiteSpace: "nowrap",
    flexShrink: 0,
    gap: 4,
  },
  left: {
    display: "flex",
    alignItems: "center",
    padding: "0 8px",
    flex: 1,
    whiteSpace: "nowrap",
    gap: 4,
  },
  key: {
    fontWeight: "bold",
    color: "#1a1a1a",
  },
  value: {
    color: "#1a4a80",
    fontWeight: "bold",
  },
  structureLabel: {
    color: "#1a1a1a",
  },
  structureValue: {
    color: "#006400",
    fontWeight: "bold",
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: "50%",
    background: "radial-gradient(circle at 35% 35%, #66dd66, #228822)",
    border: "1px solid #1a6a1a",
    flexShrink: 0,
  },
};

// ── Component ─────────────────────────────────────────────────────────────────
const FaraUpStatusBar: React.FC<FaraStatusBarProps> = ({
  statusLabel = "وضعیت :",
  statusValue = "رسید موقت",
  structureLabel = "ساختار ارزی",
  structureValue = "فعال",
  showDot = true,
}) => {
  return (
    <div style={s.bar}>
      {/* راست: وضعیت */}
      <div style={s.right}>
        <span style={s.key}>{statusLabel}</span>
        <span style={s.value}>{statusValue}</span>
      </div>

      {/* چپ: ساختار ارزی */}
      <div style={s.left}>
        <span style={s.structureLabel}>{structureLabel}</span>
        <span style={s.structureValue}>{structureValue}</span>
        {showDot && <div style={s.dot} />}
      </div>
    </div>
  );
};

export default FaraUpStatusBar;
