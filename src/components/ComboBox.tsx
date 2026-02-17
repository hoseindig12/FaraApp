import React, { useMemo, useState, useRef, useEffect } from "react";

export type ComboOption = { value: string; label?: React.ReactNode };

export type ComboBoxProps = {
  id?: string;
  options: ComboOption[];
  value?: string;
  defaultValue?: string;
  onChange?: (v: string) => void;
  placeholder?: string;
  disabled?: boolean;
  searchable?: boolean;
  className?: string;
};

export const ComboBox: React.FC<ComboBoxProps> = ({
  id,
  options,
  value,
  defaultValue,
  onChange,
  placeholder,
  disabled,
  searchable = true,
  className,
}) => {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [internal, setInternal] = useState<string | undefined>(defaultValue);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const selected = value !== undefined ? value : internal;

  useEffect(() => {
    if (value !== undefined) setInternal(value);
  }, [value]);

  const filtered = useMemo(() => {
    if (!query) return options;
    const q = query.toLowerCase();
    return options.filter((o) =>
      o.label
        ? String(o.label).toLowerCase().includes(q)
        : o.value.toLowerCase().includes(q),
    );
  }, [options, query]);

  const handleSelect = (val: string) => {
    setInternal(val);
    onChange && onChange(val);
    setOpen(false);
  };

  return (
    <div
      className={["ui-combobox", className || ""].join(" ")}
      style={{ position: "relative" }}
    >
      {searchable ? (
        <input
          ref={inputRef}
          id={id}
          value={query || (selected ?? "")}
          placeholder={placeholder}
          disabled={disabled}
          onChange={(e) => {
            setQuery(e.target.value);
            setOpen(true);
          }}
          onFocus={() => setOpen(true)}
        />
      ) : (
        <select
          id={id}
          value={selected}
          onChange={(e) => handleSelect(e.target.value)}
          disabled={disabled}
        >
          <option value="">{placeholder || "Select"}</option>
          {options.map((o) => (
            <option key={o.value} value={o.value}>
              {o.label ?? o.value}
            </option>
          ))}
        </select>
      )}

      {open && searchable && (
        <ul
          className="ui-combobox-list"
          style={{
            position: "absolute",
            zIndex: 20,
            background: "#fff",
            border: "1px solid #ddd",
            width: "100%",
            maxHeight: 200,
            overflow: "auto",
            padding: 0,
            margin: 0,
            listStyle: "none",
          }}
        >
          {filtered.length === 0 && <li style={{ padding: 8 }}>No results</li>}
          {filtered.map((o) => (
            <li
              key={o.value}
              style={{ padding: 8, cursor: "pointer" }}
              onMouseDown={() => handleSelect(o.value)}
            >
              {o.label ?? o.value}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ComboBox;
