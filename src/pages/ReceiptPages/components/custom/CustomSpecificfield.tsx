import React from "react";
import CustomInput, { CustomFild } from "./CustomField";

export interface RowProps {
  anbar: string;
  secondLabel: string;
  onAnbarChange: (v: string) => void;
  tdLabel: React.CSSProperties;
  tdInput: React.CSSProperties;
  label: string;
  secondColSpan?: number;
}

export const CustomSpecificField: React.FC<RowProps> = ({
  anbar,
  secondLabel,
  onAnbarChange,
  tdLabel,
  tdInput,
  label,
  secondColSpan = 2,
}) => {
  return (
    <>
      <td style={tdLabel}>: {label}</td>
      <td style={tdInput} colSpan={1}>
        <div style={{ display: "flex" }}>
          <CustomInput value={anbar} onChange={onAnbarChange} />
        </div>
      </td>
      <td
        style={{
          ...tdInput,
          background: "linear-gradient(180deg,#dce8f8,#c8d9ef)",
          width: 14,
        }}
      />

      <td
        style={{
          ...tdInput,
          padding: "0 4px",
          color: "#1f2937",
          backgroundColor: "#c8d9ef",
          fontSize: 11,
          textAlign: "right" as const,
        }}
        colSpan={secondColSpan}
      >
        {secondLabel ? (
          <CustomFild
            text={secondLabel}
            onDownload={() => {
              const data = `Anbar: ${anbar}\nShoobe: ${secondLabel}`;
              const blob = new Blob([data], {
                type: "text/plain;charset=utf-8",
              });
              const url = URL.createObjectURL(blob);
              const a = document.createElement("a");
              a.href = url;
              a.download = `anbar_${anbar}.txt`;
              document.body.appendChild(a);
              a.click();
              a.remove();
              URL.revokeObjectURL(url);
            }}
          />
        ) : null}
      </td>
    </>
  );
};

export default CustomSpecificField;
