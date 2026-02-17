import React from "react";
import { IconDownload } from "./ToolbarIconsSvg";

export interface AnbarFieldProps {
  value: string;
  onChange: (v: string) => void;
}

export const CustomInput: React.FC<AnbarFieldProps> = ({ value, onChange }) => (
  <div style={{ display: "flex", alignItems: "center" }}>
    <input
      value={value}
      onChange={(e) => onChange(e.target.value)}
      style={{
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
        textAlign: "center",
      }}
    />
  </div>
);

export const CustomFild: React.FC<{
  text: string;
  onDownload?: () => void;
}> = ({ text, onDownload }) => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      gap: 6,
      justifyContent: "flex-start",
    }}
  >
    <button
      title="دانلود"
      onClick={onDownload}
      style={{
        border: "none",
        background: "transparent",
        padding: 2,
        cursor: onDownload ? "pointer" : "default",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <IconDownload />
    </button>
    <span style={{ fontFamily: "'Tahoma',sans-serif", fontSize: 11 }}>
      {text}
    </span>
  </div>
);

export default CustomInput;
