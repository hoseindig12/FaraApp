import React from "react";

export interface DateInputFieldProps {
  label: string;
  value: string;
  onChange: (v: string) => void;
  tdLabel: React.CSSProperties;
  tdInput: React.CSSProperties;
  colSpan?: number;
  inputStyle?: React.CSSProperties;
  arrowBtnStyle?: React.CSSProperties;
  containerStyle?: React.CSSProperties;
}

const S: Record<string, React.CSSProperties> = {
  input: {
    border: "none",
    outline: "none",
    background: "white",
    fontSize: 11,
    fontFamily: "'Tahoma','Segoe UI',sans-serif",
    padding: "2px 5px",
    width: "100%",
    height: 22,
    boxSizing: "border-box" as const,
    direction: "rtl",
    color: "#1f2937",
  },
  arrowBtn: {
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
  },
  container: {
    display: "flex",
    alignItems: "center",
  },
};

export const DateInputField: React.FC<DateInputFieldProps> = ({
  label,
  value,
  onChange,
  tdLabel,
  tdInput,
  colSpan = 1,
  inputStyle,
  arrowBtnStyle,
  containerStyle,
}) => {
  return (
    <>
      <td style={tdLabel}>: {label}</td>
      <td style={tdInput} colSpan={colSpan}>
        <div style={{ ...S.container, ...containerStyle }}>
          <button type="button" style={{ ...S.arrowBtn, ...arrowBtnStyle }}>
            ▼
          </button>
          <input
            value={value}
            onChange={(e) => onChange(e.target.value)}
            style={{ ...S.input, ...inputStyle }}
          />
        </div>
      </td>
    </>
  );
};

export default DateInputField;
