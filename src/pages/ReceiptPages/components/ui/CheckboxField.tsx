import React from "react";
import { IconDownload } from "../toolbar";

export interface CheckboxFieldProps {
  label: string;
  checked: boolean;
  onChange: (v: boolean) => void;
  tdInput: React.CSSProperties;
  colSpan?: number;
  checkboxStyle?: React.CSSProperties;
  labelStyle?: React.CSSProperties;
}

export const CheckboxField: React.FC<CheckboxFieldProps> = ({
  label,
  checked,
  onChange,
  tdInput,
  colSpan = 2,
  checkboxStyle,
  labelStyle,
}) => {
  return (
    <td style={{ ...tdInput, padding: "0 4px" }} colSpan={colSpan}>
      <label
        style={{
          display: "flex",
          alignItems: "center",
          gap: 4,
          fontSize: 11,
          fontFamily: "'Tahoma',sans-serif",
          cursor: "pointer",
          direction: "rtl",
          ...labelStyle,
        }}
      >
        <button
          title="دانلود"
          style={{
            border: "none",
            background: "transparent",
            padding: 2,
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <IconDownload />
        </button>
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
          style={{ margin: 0, ...checkboxStyle }}
        />
        {label}
      </label>
    </td>
  );
};

export default CheckboxField;
