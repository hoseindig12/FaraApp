import React from "react";

export type TimePickerProps = {
  id?: string;
  label?: string;
  value?: string; // HH:mm
  defaultValue?: string;
  onChange?: (v: string) => void;
  step?: number; // seconds
  disabled?: boolean;
  className?: string;
};

export const TimePicker: React.FC<TimePickerProps> = ({
  id,
  label,
  value,
  defaultValue,
  onChange,
  step = 60,
  disabled,
  className,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    onChange && onChange(e.target.value);

  return (
    <div className={["ui-timepicker", className || ""].join(" ")}>
      {label && <label htmlFor={id}>{label}</label>}
      <input
        id={id}
        type="time"
        value={value}
        defaultValue={defaultValue}
        onChange={handleChange}
        step={step}
        disabled={disabled}
      />
    </div>
  );
};

export default TimePicker;
