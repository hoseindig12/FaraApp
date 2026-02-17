import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

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
  const [menuStyle, setMenuStyle] = useState<React.CSSProperties>({});
  const containerRef = useRef<HTMLDivElement | null>(null);
  const menuRef = useRef<HTMLDivElement | null>(null);

  const handleSelect = (selectedValue: string) => {
    onChange(selectedValue);
    setIsOpen(false);
  };

  useEffect(() => {
    if (!isOpen || !containerRef.current) return;

    const updatePosition = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      setMenuStyle({
        position: "fixed",
        top: rect.bottom,
        left: rect.left,
        width: rect.width,
        zIndex: 999999,
      });
    };

    updatePosition();
    window.addEventListener("scroll", updatePosition, true);
    window.addEventListener("resize", updatePosition);

    return () => {
      window.removeEventListener("scroll", updatePosition, true);
      window.removeEventListener("resize", updatePosition);
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;

    const onPointerDown = (event: MouseEvent) => {
      const target = event.target as Node;
      if (containerRef.current?.contains(target)) return;
      if (menuRef.current?.contains(target)) return;
      setIsOpen(false);
    };

    document.addEventListener("mousedown", onPointerDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
    };
  }, [isOpen]);

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
          ref={containerRef}
          style={{
            ...S.container,
            position: "relative",
            zIndex: isOpen ? 9999 : "auto",
          }}
        >
          <button
            type="button"
            style={{ ...S.arrowBtn, ...arrowBtnStyle }}
            onClick={() => setIsOpen((prev) => !prev)}
          >
            {"\u25BC"}
          </button>
          <input
            type="text"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder={placeholder}
            style={{ ...S.input, ...inputStyle, flex: 1 }}
            onFocus={() => setIsOpen(true)}
          />

          {typeof document !== "undefined" &&
            isOpen &&
            options.length > 0 &&
            createPortal(
              <div
                ref={menuRef}
                style={{
                  ...menuStyle,
                  background: "white",
                  border: "1px solid #b8cce4",
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
              </div>,
              document.body,
            )}
        </div>
      </td>
    </>
  );
};

export default ComboBoxField;
