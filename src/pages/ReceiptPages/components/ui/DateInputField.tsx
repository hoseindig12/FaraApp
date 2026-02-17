import React from "react";
import DatePicker from "react-multi-date-picker";
import type DateObject from "react-date-object";
import persian from "react-date-object/calendars/persian";
import gregorian from "react-date-object/calendars/gregorian";
import persian_fa from "react-date-object/locales/persian_fa";

export type CalendarMode = "jalali" | "gregorian";

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
  calendarMode?: CalendarMode;
  allowModeToggle?: boolean;
  onCalendarModeChange?: (mode: CalendarMode) => void;
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
  calendarMode = "jalali",
  allowModeToggle = false,
  onCalendarModeChange,
}) => {
  const [mode, setMode] = React.useState<CalendarMode>(calendarMode);

  React.useEffect(() => {
    setMode(calendarMode);
  }, [calendarMode]);

  const toggleMode = () => {
    if (!allowModeToggle) return;
    const nextMode: CalendarMode = mode === "jalali" ? "gregorian" : "jalali";
    setMode(nextMode);
    onCalendarModeChange?.(nextMode);
  };

  return (
    <>
      <td style={tdLabel}>: {label}</td>
      <td style={tdInput} colSpan={colSpan}>
        <div style={{ ...S.container, ...containerStyle }}>
          <button
            type="button"
            onClick={toggleMode}
            style={{ ...S.arrowBtn, ...arrowBtnStyle }}
            title={allowModeToggle ? "تغییر تقویم" : undefined}
          >
            {allowModeToggle ? (mode === "jalali" ? "ش" : "م") : "▼"}
          </button>
          <DatePicker
            value={value}
            onChange={(date: DateObject | null) =>
              onChange(date ? date.format("YYYY/MM/DD") : "")
            }
            format="YYYY/MM/DD"
            calendar={mode === "jalali" ? persian : gregorian}
            locale={mode === "jalali" ? persian_fa : undefined}
            calendarPosition="bottom-right"
            portal
            zIndex={9999}
            style={{ ...S.input, ...inputStyle }}
            containerStyle={{ width: "100%" }}
          />
        </div>
      </td>
    </>
  );
};

export default DateInputField;
