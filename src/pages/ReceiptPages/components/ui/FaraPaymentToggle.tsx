import React, { useState } from "react";

// ── Types ─────────────────────────────────────────────────────────────────────
type PaymentMode = "white" | "blue"; // سفید = چک/حواله، آبی = نقد

interface FaraPaymentToggleProps {
  label?: string;
  defaultMode?: PaymentMode;
  onChange?: (mode: PaymentMode) => void;
  dropdownOptions?: string[];
  defaultDropdown?: string;
}

// ── Styles ────────────────────────────────────────────────────────────────────
const s: Record<string, React.CSSProperties> = {
  row: {
    direction: "rtl",
    display: "inline-flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 0,
    height: 22,
    fontFamily: "'Tahoma','Segoe UI',sans-serif",
    fontSize: 11,
    color: "#1a1a1a",
    userSelect: "none",
  },
  label: {
    fontWeight: "bold",
    whiteSpace: "nowrap",
    paddingLeft: 4,
    paddingRight: 2,
    fontSize: 11,
    color: "#1a1a1a",
  },
  colon: {
    paddingLeft: 4,
    color: "#1a1a1a",
  },
  toggleWrapper: {
    display: "flex",
    flexDirection: "row",
    border: "1px solid #7ba4d4",
    borderRadius: 2,
    overflow: "hidden",
    height: 18,
    cursor: "pointer",
  },
  btnWhite: {
    width: 18,
    height: 18,
    background: "#ffffff",
    border: "none",
    padding: 0,
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    outline: "none",
    borderLeft: "1px solid #7ba4d4",
  },
  btnWhiteActive: {
    width: 18,
    height: 18,
    background: "#ffffff",
    border: "none",
    padding: 0,
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    outline: "none",
    borderLeft: "1px solid #7ba4d4",
    boxShadow: "inset 0 0 0 2px #1a6fc4",
  },
  btnBlue: {
    width: 18,
    height: 18,
    background: "#1a5fa8",
    border: "none",
    padding: 0,
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    outline: "none",
  },
  btnBlueActive: {
    width: 18,
    height: 18,
    background: "#1a5fa8",
    border: "none",
    padding: 0,
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    outline: "none",
    boxShadow: "inset 0 0 0 2px #0a3a78",
  },
  dropdown: {
    fontFamily: "'Tahoma','Segoe UI',sans-serif",
    fontSize: 11,
    height: 18,
    border: "1px solid #7ba4d4",
    borderRadius: 2,
    background: "linear-gradient(180deg,#eef4fc,#dce8f8)",
    padding: "0 3px",
    color: "#1a1a1a",
    direction: "rtl",
    outline: "none",
    cursor: "pointer",
    marginRight: 4,
    minWidth: 28,
  },
};

// ── Component ─────────────────────────────────────────────────────────────────
const FaraPaymentToggle: React.FC<FaraPaymentToggleProps> = ({
  label = "تسویه وجه",
  defaultMode = "blue",
  onChange,
  dropdownOptions = [""],
  defaultDropdown = "",
}) => {
  const [mode, setMode] = useState<PaymentMode>(defaultMode);
  const [dropVal, setDropVal] = useState(defaultDropdown);

  const toggle = (m: PaymentMode) => {
    setMode(m);
    onChange?.(m);
  };

  return (
    <div style={s.row}>
      {/* label */}
      <span style={s.label}>{label}</span>
      <span style={s.colon}>:</span>

      {/* toggle buttons: سفید | آبی */}
      <div style={{ ...s.toggleWrapper, marginRight: 4 }}>
        {/* دکمه سفید */}
        <button
          style={mode === "white" ? s.btnWhiteActive : s.btnWhite}
          onClick={() => toggle("white")}
          title="چک / حواله"
        />
        {/* دکمه آبی */}
        <button
          style={mode === "blue" ? s.btnBlueActive : s.btnBlue}
          onClick={() => toggle("blue")}
          title="نقد"
        />
      </div>

      {/* متن نقد/چک */}
      <span
        style={{
          fontSize: 11,
          marginRight: 4,
          marginLeft: 4,
          fontWeight: "bold",
          color: mode === "blue" ? "#1a5fa8" : "#555",
          minWidth: 24,
        }}
      >
        {mode === "blue" ? "نقد" : "چک"}
      </span>

      {/* dropdown */}
      <select
        style={s.dropdown}
        value={dropVal}
        onChange={(e) => setDropVal(e.target.value)}
      >
        {dropdownOptions.map((o, i) => (
          <option key={i} value={o}>
            {o}
          </option>
        ))}
        <option value="▼">▼</option>
      </select>
    </div>
  );
};

export default FaraPaymentToggle;
