import React, { useState } from "react";

export interface ComboBoxOption {
  label: string;
  value: string;
}

export interface ComboBoxFieldProps {
  label: string;
  value: string;
  options: ComboBoxOption[];
  onChange: (v: string) => void;
  tdLabel: React.CSSProperties;
  tdInput: React.CSSProperties;
  colSpan?: number;
  inputColSpan?: number;
  placeholder?: string;
  arrowBtnStyle?: React.CSSProperties;
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
    gap: 0,
  },
};

export const ComboBoxField: React.FC<ComboBoxFieldProps> = ({
  label,
  value,
  options,
  onChange,
  tdLabel,
  tdInput,
  colSpan = 1,
  inputColSpan = 2,
  placeholder = "",
  arrowBtnStyle,
  inputStyle,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (selectedValue: string) => {
    onChange(selectedValue);
    setIsOpen(false);
  };

  return (
    <>
      <td style={tdLabel} colSpan={colSpan}>
        {label}
      </td>
      <td
        style={{
          ...tdInput,
          overflow: "visible",
          position: "relative",
          zIndex: isOpen ? 9999 : "auto",
        }}
        colSpan={inputColSpan}
      >
        <div
          style={{
            ...S.container,
            position: "relative",
            zIndex: isOpen ? 9999 : "auto",
          }}
        >
          <button
            style={{ ...S.arrowBtn, ...arrowBtnStyle }}
            onClick={() => setIsOpen(!isOpen)}
            onBlur={() => setTimeout(() => setIsOpen(false), 200)}
          >
            ▼
          </button>
          <input
            type="text"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder={placeholder}
            style={{ ...S.input, ...inputStyle, flex: 1 }}
            onFocus={() => setIsOpen(true)}
          />
          {isOpen && options.length > 0 && (
            <div
              style={{
                position: "absolute",
                top: "100%",
                right: 0,
                left: 0,
                background: "white",
                border: "1px solid #b8cce4",
                borderTop: "none",
                zIndex: 99999,
                maxHeight: 150,
                overflowY: "auto",
                boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
              }}
            >
              {options.map((option) => (
                <div
                  key={option.value}
                  onClick={() => handleSelect(option.value)}
                  style={{
                    padding: "4px 6px",
                    cursor: "pointer",
                    fontSize: 11,
                    direction: "rtl",
                    textAlign: "right",
                    borderBottom: "1px solid #e0e0e0",
                    backgroundColor:
                      value === option.value ? "#d0e0f0" : "white",
                    transition: "background-color 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.backgroundColor =
                      "#e8f0fb";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.backgroundColor =
                      value === option.value ? "#d0e0f0" : "white";
                  }}
                >
                  {option.label}
                </div>
              ))}
            </div>
          )}
        </div>
      </td>
    </>
  );
};

export default ComboBoxField;
