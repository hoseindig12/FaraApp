import React from "react";

export type TextInputProps = {
  id?: string;
  label?: string;
  value?: string;
  defaultValue?: string;
  placeholder?: string;
  type?: React.HTMLInputTypeAttribute;
  onChange?: (v: string) => void;
  className?: string;
  disabled?: boolean;
  error?: string;
};

export const TextInput: React.FC<TextInputProps> = ({
  id,
  label,
  value,
  defaultValue,
  placeholder,
  type = "text",
  onChange,
  className,
  disabled,
  error,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange && onChange(e.target.value);
  };

  return (
    <div className={["ui-textinput", className || ""].join(" ")}>
      {label && <label htmlFor={id}>{label}</label>}
      <input
        id={id}
        type={type}
        value={value}
        defaultValue={defaultValue}
        placeholder={placeholder}
        onChange={handleChange}
        disabled={disabled}
        aria-invalid={!!error}
      />
      {error && <div className="ui-textinput-error">{error}</div>}
    </div>
  );
};

export default TextInput;
