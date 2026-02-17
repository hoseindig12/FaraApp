import React from "react";

export interface ArrowInputFieldProps {
  value: string;
  onChange: (v: string) => void;
  tdLabel: React.CSSProperties;
  tdInput: React.CSSProperties;
  label?: string;
  labelPosition?: "before" | "after" | "none";
  includeColon?: boolean;
  inputColSpan?: number;
  labelColSpan?: number;
  tdInputStyle?: React.CSSProperties;
  tdLabelStyle?: React.CSSProperties;
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

export const ArrowInputField: React.FC<ArrowInputFieldProps> = ({
  value,
  onChange,
  tdLabel,
  tdInput,
  label = "",
  labelPosition = "before",
  includeColon = true,
  inputColSpan = 1,
  labelColSpan,
  tdInputStyle,
  tdLabelStyle,
  inputStyle,
  arrowBtnStyle,
  containerStyle,
}) => {
  const labelNode =
    labelPosition !== "none" ? (
      <td style={{ ...tdLabel, ...tdLabelStyle }} colSpan={labelColSpan}>
        {includeColon ? `: ${label}` : label}
      </td>
    ) : null;

  const inputNode = (
    <td style={{ ...tdInput, ...tdInputStyle }} colSpan={inputColSpan}>
      <div style={{ ...S.container, ...containerStyle }}>
        <button type="button" style={{ ...S.arrowBtn, ...arrowBtnStyle }}>
          {"\u25BC"}
        </button>
        <input
          value={value}
          onChange={(e) => onChange(e.target.value)}
          style={{ ...S.input, ...inputStyle }}
        />
      </div>
    </td>
  );

  if (labelPosition === "before") {
    return (
      <>
        {labelNode}
        {inputNode}
      </>
    );
  }

  if (labelPosition === "after") {
    return (
      <>
        {inputNode}
        {labelNode}
      </>
    );
  }

  return <>{inputNode}</>;
};

export default ArrowInputField;
