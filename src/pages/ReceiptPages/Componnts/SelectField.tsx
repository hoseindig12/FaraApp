import React from "react";

export interface SelectOption {
  label: string;
  value: string;
}

export interface SelectFieldProps {
  label: string;
  value: string;
  options: SelectOption[];
  onChange: (v: string) => void;
  tdLabel: React.CSSProperties;
  tdInput: React.CSSProperties;
  colSpan?: number;
  inputColSpan?: number;
  arrowBtnStyle?: React.CSSProperties;
  selectStyle?: React.CSSProperties;
  containerStyle?: React.CSSProperties;
}

const S: Record<string, React.CSSProperties> = {
  select: {
    border: "none",
    outline: "none",
    background: "white",
    fontSize: 11,
    fontFamily: "'Tahoma','Segoe UI',sans-serif",
    padding: "1px 4px",
    width: "100%",
    height: 22,
    boxSizing: "border-box" as const,
    direction: "rtl",
    color: "#1f2937",
    appearance: "none" as const,
    cursor: "pointer",
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
    position: "relative" as const,
  },
};

export const SelectField: React.FC<SelectFieldProps> = ({
  label,
  value,
  options,
  onChange,
  tdLabel,
  tdInput,
  colSpan = 1,
  inputColSpan = 3,
  arrowBtnStyle,
  selectStyle,
  containerStyle,
}) => {
  return (
    <>
      <td style={tdLabel} colSpan={colSpan}>
        : {label}
      </td>
      <td style={tdInput} colSpan={inputColSpan}>
        <div style={{ ...S.container, ...containerStyle }}>
          <button style={{ ...S.arrowBtn, ...arrowBtnStyle }}>▼</button>
          <select
            value={value}
            onChange={(e) => onChange(e.target.value)}
            style={{ ...S.select, ...selectStyle }}
          >
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </td>
    </>
  );
};

export default SelectField;
