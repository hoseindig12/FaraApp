import React from "react";
import CustomInput from "./CustomField";

export interface TahvilGirandeRowProps {
  tahvilGirande: string;
  tasviyehColor: string;
  tasviyehVajh: string;
  shomarehSanad: string;
  onTahvilGirandeChange: (value: string) => void;
  onTasviyehColorChange: (value: string) => void;
  onTasviyehVajhChange: (value: string) => void;
  onShomarehSanadChange: (value: string) => void;
  tdLabel: React.CSSProperties;
  tdInput: React.CSSProperties;
}

const baseInputStyle: React.CSSProperties = {
  border: "none",
  outline: "none",
  background: "white",
  fontSize: 11,
  fontFamily: "'Tahoma','Segoe UI',sans-serif",
  padding: "2px 5px",
  width: "100%",
  height: 22,
  boxSizing: "border-box",
  direction: "rtl",
  color: "#1f2937",
};

const baseSelectStyle: React.CSSProperties = {
  border: "none",
  outline: "none",
  background: "white",
  fontSize: 11,
  fontFamily: "'Tahoma','Segoe UI',sans-serif",
  padding: "1px 4px",
  width: "100%",
  height: 22,
  boxSizing: "border-box",
  direction: "rtl",
  color: "#1f2937",
  appearance: "none" as const,
  cursor: "pointer",
};

const arrowBtnStyle: React.CSSProperties = {
  width: 18,
  minWidth: 18,
  height: "100%",
  background: "linear-gradient(180deg,#e8f0fb,#d0e0f0)",
  border: "none",
  borderLeft: "1px solid #b8cce4",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: 9,
  color: "#444",
  flexShrink: 0,
};

export const TahvilGirandeRow: React.FC<TahvilGirandeRowProps> = ({
  tahvilGirande,
  tasviyehColor,
  tasviyehVajh,
  shomarehSanad,
  onTahvilGirandeChange,
  onTasviyehColorChange,
  onTasviyehVajhChange,
  onShomarehSanadChange,
  tdLabel,
  tdInput,
}) => {
  return (
    <>
      {/* تحویل گیرنده */}
      <td style={tdLabel}>: تحویل گیرنده</td>
      <td style={{ ...tdInput, borderBottom: "none" }} colSpan={1}>
        <div style={{ display: "flex" }}>
          <CustomInput value={tahvilGirande} onChange={onTahvilGirandeChange} />
        </div>
      </td>
      <td
        style={{
          ...tdInput,
          background: "linear-gradient(180deg,#dce8f8,#c8d9ef)",
          borderBottom: "none",
        }}
      />

      {/* تسویه وجه */}
      <td
        style={{ ...tdInput, borderBottom: "none", padding: "0 4px" }}
        colSpan={2}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
          <div
            style={{
              width: 20,
              height: 16,
              background: tasviyehColor,
              border: "1px solid #7ba4d4",
              cursor: "pointer",
              flexShrink: 0,
            }}
            onClick={() => {
              const colors = [
                "#1a6fc4",
                "#22c55e",
                "#ef4444",
                "#f59e0b",
                "#8b5cf6",
              ];
              const idx = colors.indexOf(tasviyehColor);
              onTasviyehColorChange(colors[(idx + 1) % colors.length]);
            }}
          />
          <span style={{ fontSize: 11, fontFamily: "'Tahoma',sans-serif" }}>
            نقد
          </span>
        </div>
      </td>

      <td style={{ ...tdLabel, borderBottom: "none" }}>: تسـویه وجـه</td>

      <td style={{ ...tdInput, borderBottom: "none" }} colSpan={3}>
        <div style={{ display: "flex", position: "relative" }}>
          <button style={{ ...arrowBtnStyle, borderBottom: "none" }}>▼</button>
          <select
            value={tasviyehVajh}
            onChange={(e) => onTasviyehVajhChange(e.target.value)}
            style={baseSelectStyle}
          >
            <option>نقد</option>
            <option>اعتباری</option>
            <option>چک</option>
          </select>
        </div>
      </td>

      {/* شماره سند */}
      <td style={{ ...tdLabel, borderBottom: "none" }}>: شمـاره سند</td>
      <td style={{ ...tdInput, borderBottom: "none" }} colSpan={2}>
        <input
          value={shomarehSanad}
          onChange={(e) => onShomarehSanadChange(e.target.value)}
          style={baseInputStyle}
        />
      </td>
    </>
  );
};
