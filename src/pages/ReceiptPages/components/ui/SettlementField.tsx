import React from "react";

export interface SettlementFieldProps {
  label: string;
  value: string;
  color: string;
  options?: string[];
  onChange: (v: string) => void;
  onColorChange: (v: string) => void;
  tdLabel: React.CSSProperties;
  tdInput: React.CSSProperties;
  inputColSpan?: number;
}

const S: Record<string, React.CSSProperties> = {
  row: {
    display: "flex",
    alignItems: "center",
    gap: 4,
    height: "100%",
    padding: "0 4px",
    direction: "rtl",
  },
  selectWrap: {
    display: "flex",
    alignItems: "center",
    flex: 1,
    minWidth: 90,
    height: 22,
    border: "1px solid #9aa8b8",
    background: "#e6e6e6",
    boxShadow: "inset 0 1px 0 #f7f7f7",
  },
  arrowBtn: {
    width: 20,
    minWidth: 20,
    height: "100%",
    border: "none",
    borderRight: "1px solid #9aa8b8",
    background: "linear-gradient(180deg,#ececec,#d8d8d8)",
    color: "#1a1a1a",
    fontSize: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    flexShrink: 0,
  },
  select: {
    flex: 1,
    height: "100%",
    border: "none",
    outline: "none",
    background: "transparent",
    color: "#1f3f9e",
    fontSize: 12,
    fontWeight: "bold",
    fontFamily: "'Tahoma','Segoe UI',sans-serif",
    padding: "0 6px",
    direction: "rtl",
    appearance: "none" as const,
    cursor: "pointer",
  },
  colorBox: {
    width: 26,
    minWidth: 26,
    height: 22,
    border: "1px solid #7e8ea3",
    boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.35)",
    cursor: "pointer",
  },
};

const DEFAULT_OPTIONS = ["نقد", "اعتباری", "چک"];

const SettlementField: React.FC<SettlementFieldProps> = ({
  label,
  value,
  color,
  options = DEFAULT_OPTIONS,
  onChange,
  onColorChange,
  tdLabel,
  tdInput,
  inputColSpan = 1,
}) => {
  return (
    <>
      <td style={{ ...tdLabel, color: "#153b96" }}>: {label}</td>
      <td style={tdInput} colSpan={inputColSpan}>
        <div style={S.row}>
          <div
            style={{ ...S.colorBox, background: color }}
            onClick={() => {
              const colors = ["#151b9a", "#1a6fc4", "#22c55e", "#ef4444"];
              const idx = colors.indexOf(color);
              onColorChange(colors[(idx + 1) % colors.length]);
            }}
            title="تغییر رنگ"
          />

          <div style={S.selectWrap}>
            <button type="button" style={S.arrowBtn} aria-label="باز کردن">
              ▼
            </button>
            <select
              value={value}
              onChange={(e) => onChange(e.target.value)}
              style={S.select}
            >
              {options.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </div>
        </div>
      </td>
    </>
  );
};

export default SettlementField;
