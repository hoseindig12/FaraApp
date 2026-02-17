import React from "react";

export interface SummaryFieldProps {
  label: string;
  value: string;
  onChange: (v: string) => void;
  tdLabelStyle?: React.CSSProperties;
  tdInputStyle?: React.CSSProperties;
  align?: "right" | "center" | "left";
  readOnly?: boolean;
}

const SummaryField: React.FC<SummaryFieldProps> = ({
  label,
  value,
  onChange,
  tdLabelStyle,
  tdInputStyle,
  align = "right",
  readOnly = false,
}) => {
  return (
    <>
      <td style={{ ...tdLabelStyle }}>{`: ${label}`}</td>
      <td style={{ ...tdInputStyle }}>
        <input
          value={value}
          onChange={(e) => onChange(e.target.value)}
          readOnly={readOnly}
          style={{
            width: "100%",
            height: "100%",
            outline: "none",
            direction: "rtl",
            background: "transparent",
            ...tdInputStyle,
          }}
        />
      </td>
    </>
  );
};

export default SummaryField;
