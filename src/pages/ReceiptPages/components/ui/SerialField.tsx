import React from "react";

export interface SerialFieldProps {
  value: string;
  onChange: (v: string) => void;
  tdLabel: React.CSSProperties;
  tdInput: React.CSSProperties;
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

export const SerialField: React.FC<SerialFieldProps> = ({
  value,
  onChange,
  tdLabel,
  tdInput,
  inputStyle,
}) => {
  return (
    <>
      <td style={tdLabel}>: سریـال</td>
      <td style={tdInput} colSpan={1}>
        <input
          value={value}
          onChange={(e) => onChange(e.target.value)}
          style={{ ...S.input, ...inputStyle }}
        />
      </td>
      <td
        style={{
          ...tdInput,
          background: "linear-gradient(180deg,#dce8f8,#c8d9ef)",
        }}
      />
    </>
  );
};

export default SerialField;
