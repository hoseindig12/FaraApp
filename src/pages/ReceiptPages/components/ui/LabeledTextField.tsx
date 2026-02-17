import React from "react";

export interface LabeledTextFieldProps {
  label: string;
  value: string;
  onChange: (v: string) => void;
  tdLabel: React.CSSProperties;
  tdInput: React.CSSProperties;
  colSpan?: number;
  tdInputStyle?: React.CSSProperties;
  inputStyle?: React.CSSProperties;
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
};

export const LabeledTextField: React.FC<LabeledTextFieldProps> = ({
  label,
  value,
  onChange,
  tdLabel,
  tdInput,
  colSpan = 1,
  tdInputStyle,
  inputStyle,
}) => {
  return (
    <>
      <td style={tdLabel}>: {label}</td>
      <td style={{ ...tdInput, ...tdInputStyle }} colSpan={colSpan}>
        <input
          value={value}
          onChange={(e) => onChange(e.target.value)}
          style={{ ...S.input, ...inputStyle }}
        />
      </td>
    </>
  );
};

export default LabeledTextField;
