import React from "react";
import CustomInput from "./CustomField";

export interface KodHesabRowProps {
  kodHesab: string;
  shomarehKhahesh: string;
  mahalEghdamKharid: string;
  onKodHesabChange: (value: string) => void;
  onShomarehKhaheshChange: (value: string) => void;
  onMahalEghdamChange: (value: string) => void;
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

export const KodHesabRow: React.FC<KodHesabRowProps> = ({
  kodHesab,
  shomarehKhahesh,
  mahalEghdamKharid,
  onKodHesabChange,
  onShomarehKhaheshChange,
  onMahalEghdamChange,
  tdLabel,
  tdInput,
}) => {
  return (
    <>
      {/* کد حساب */}
      <td style={tdLabel}>: کد حساب</td>
      <td style={tdInput} colSpan={1}>
        <div style={{ display: "flex" }}>
          <CustomInput value={kodHesab} onChange={onKodHesabChange} />
        </div>
      </td>
      <td
        style={{
          ...tdInput,
          background: "linear-gradient(180deg,#dce8f8,#c8d9ef)",
        }}
      />

      {/* شماره درخواست */}
      <td style={{ ...tdInput, padding: "0 4px", fontSize: 11 }} colSpan={2}>
        <span
          style={{ fontFamily: "'Tahoma',sans-serif", fontSize: 11 }}
        ></span>
      </td>

      <td style={tdLabel}>: شمـاره درخواست</td>

      <td style={tdInput} colSpan={3}>
        <input
          value={shomarehKhahesh}
          onChange={(e) => onShomarehKhaheshChange(e.target.value)}
          style={baseInputStyle}
        />
      </td>

      {/* محل اقدام خرید */}
      <td style={tdLabel}>محل اقدام خرید</td>
      <td style={tdInput} colSpan={2}>
        <div style={{ display: "flex" }}>
          <button style={arrowBtnStyle}>▼</button>
          <input
            value={mahalEghdamKharid}
            onChange={(e) => onMahalEghdamChange(e.target.value)}
            style={baseInputStyle}
          />
        </div>
      </td>
    </>
  );
};
