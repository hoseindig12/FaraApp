import React from "react";
import { IconDownload } from "../toolbar/ToolbarIconsSvg";

export interface AnbarFieldProps {
  value: string;
  onChange: (v: string) => void;
  readOnly?: boolean;
  inputStyle?: React.CSSProperties;
}

export const CustomInput: React.FC<AnbarFieldProps> = ({
  value,
  onChange,
  readOnly = false,
  inputStyle,
}) => (
  <div style={{ display: "flex", alignItems: "center" }}>
    <input
      value={value}
      onChange={(e) => onChange(e.target.value)}
      readOnly={readOnly}
      style={{
        border: "none",
        outline: "none",
        background: readOnly ? "#f3f4f6" : "white",
        fontSize: 11,
        fontFamily: "'Tahoma','Segoe UI',sans-serif",
        padding: "2px 5px",
        width: "100%",
        height: 22,
        boxSizing: "border-box",
        direction: "rtl",
        textAlign: "right",
        ...inputStyle,
      }}
    />
  </div>
);

export interface CustomFildProps {
  text: string;
  onDownload?: () => void;
  readOnly?: boolean;
}

export const CustomFild: React.FC<CustomFildProps> = ({
  text,
  onDownload,
  readOnly = false,
}) => (
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
      onClick={!readOnly ? onDownload : undefined}
      disabled={readOnly}
      style={{
        border: "none",
        background: "transparent",
        padding: 2,
        cursor: !readOnly && onDownload ? "pointer" : "default",
        opacity: readOnly ? 0.5 : 1,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <IconDownload />
    </button>
    <span style={{ fontFamily: "'Tahoma',sans-serif", fontSize: 11 }}>{text}</span>
  </div>
);

export default CustomInput;
