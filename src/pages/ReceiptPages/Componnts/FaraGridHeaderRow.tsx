import React, { useState, useRef } from "react";
import JsBarcode from "jsbarcode";

// ── Types ────────────────────────────────────────────────────────────────────

export interface FaraGridRowData {
  radif: string;
  anbarFouroush: string;
  hauzehMali: string;
  tekdane: string;
  barcod: string;
  tarikhMoser: string;
  roz: string;
}

interface FaraGridHeaderRowProps {
  rows?: FaraGridRowData[];
  onRowChange?: (index: number, row: FaraGridRowData) => void;
  onAddRow?: () => void;
}

// ── Barcode Cell ─────────────────────────────────────────────────────────────

const BarcodeCell: React.FC<{
  value: string;
  onChange: (v: string) => void;
}> = ({ value, onChange }) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const [editing, setEditing] = useState(false);

  React.useEffect(() => {
    if (svgRef.current && value) {
      try {
        JsBarcode(svgRef.current, value, {
          format: "CODE128",
          width: 1,
          height: 20,
          displayValue: false,
          margin: 0,
        });
      } catch {}
    }
  }, [value]);

  if (editing) {
    return (
      <input
        autoFocus
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onBlur={() => setEditing(false)}
        onKeyDown={(e) => e.key === "Enter" && setEditing(false)}
        style={{
          width: "100%",
          height: "100%",
          border: "none",
          outline: "none",
          fontSize: 11,
          fontFamily: "'Tahoma',sans-serif",
          padding: "0 4px",
          direction: "ltr",
          textAlign: "center",
        }}
      />
    );
  }

  return (
    <div
      onClick={() => setEditing(true)}
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "text",
        overflow: "hidden",
      }}
    >
      {value ? (
        <svg ref={svgRef} style={{ height: 22, maxWidth: "100%" }} />
      ) : (
        <span
          style={{
            fontSize: 9,
            color: "#aaa",
            fontFamily: "'Tahoma',sans-serif",
          }}
        >
          بارکد ...
        </span>
      )}
    </div>
  );
};

// ── Arrow Button ──────────────────────────────────────────────────────────────

const ArrowBtn: React.FC<{ dir?: "up" | "down" | "both" }> = ({
  dir = "down",
}) => (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      background: "linear-gradient(180deg,#e8f0fb,#d0e0f0)",
      border: "1px solid #b8cce4",
      borderRadius: 2,
      overflow: "hidden",
      flexShrink: 0,
    }}
  >
    {(dir === "both" || dir === "up") && (
      <button
        style={{
          width: 14,
          height: dir === "both" ? 11 : 22,
          background: "none",
          border: "none",
          borderBottom: dir === "both" ? "1px solid #b8cce4" : "none",
          cursor: "pointer",
          fontSize: 7,
          color: "#444",
          padding: 0,
          lineHeight: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        ▲
      </button>
    )}
    {(dir === "both" || dir === "down") && (
      <button
        style={{
          width: 14,
          height: dir === "both" ? 11 : 22,
          background: "none",
          border: "none",
          cursor: "pointer",
          fontSize: 7,
          color: "#444",
          padding: 0,
          lineHeight: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        ▼
      </button>
    )}
  </div>
);

// ── Cell Components ───────────────────────────────────────────────────────────

const cellBase: React.CSSProperties = {
  borderLeft: "1px solid #b8cce4",
  borderBottom: "1px solid #b8cce4",
  height: 24,
  overflow: "hidden",
  background: "white",
  verticalAlign: "middle",
  padding: 0,
};

const headerCellBase: React.CSSProperties = {
  ...cellBase,
  background: "linear-gradient(180deg,#dce8f8 0%,#c8d9ef 100%)",
  fontSize: 11,
  fontFamily: "'Tahoma','Segoe UI',sans-serif",
  color: "#1a1a1a",
  textAlign: "right" as const,
  padding: "2px 6px",
  whiteSpace: "nowrap",
  borderTop: "1px solid #b8cce4",
};

const InputCell: React.FC<{
  value: string;
  onChange: (v: string) => void;
  align?: "right" | "center" | "left";
  style?: React.CSSProperties;
}> = ({ value, onChange, align = "right", style }) => (
  <input
    value={value}
    onChange={(e) => onChange(e.target.value)}
    style={{
      width: "100%",
      height: "100%",
      border: "none",
      outline: "none",
      fontSize: 11,
      fontFamily: "'Tahoma',sans-serif",
      padding: "0 5px",
      direction: "rtl",
      textAlign: align,
      background: "transparent",
      color: "#1a1a1a",
      ...style,
    }}
  />
);

const SelectCell: React.FC<{
  value: string;
  onChange: (v: string) => void;
  options: string[];
}> = ({ value, onChange, options }) => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      width: "100%",
      height: "100%",
    }}
  >
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      style={{
        flex: 1,
        border: "none",
        outline: "none",
        background: "transparent",
        fontSize: 11,
        fontFamily: "'Tahoma',sans-serif",
        direction: "rtl",
        color: "#1a1a1a",
        height: "100%",
        padding: "0 4px",
        appearance: "none",
        cursor: "pointer",
      }}
    >
      {options.map((o) => (
        <option key={o}>{o}</option>
      ))}
    </select>
    <span
      style={{
        fontSize: 8,
        color: "#666",
        padding: "0 2px",
        pointerEvents: "none",
      }}
    >
      ▼
    </span>
  </div>
);

// ── Main Component ────────────────────────────────────────────────────────────

const defaultRow = (): FaraGridRowData => ({
  radif: "",
  anbarFouroush: "انبار و فروش",
  hauzehMali: "",
  tekdane: "",
  barcod: "",
  tarikhMoser: "/ /",
  roz: "",
});

const FaraGridHeaderRow: React.FC<FaraGridHeaderRowProps> = ({
  rows: externalRows,
  onRowChange,
  onAddRow,
}) => {
  const [internalRows, setInternalRows] = useState<FaraGridRowData[]>([
    { ...defaultRow(), barcod: "123456789012" },
  ]);

  const rows = externalRows ?? internalRows;

  const updateRow = (i: number, key: keyof FaraGridRowData, val: string) => {
    const next = rows.map((r, idx) => (idx === i ? { ...r, [key]: val } : r));
    if (!externalRows) setInternalRows(next);
    onRowChange?.(i, next[i]);
  };

  const addRow = () => {
    if (!externalRows) setInternalRows((prev) => [...prev, defaultRow()]);
    onAddRow?.();
  };

  const wrap: React.CSSProperties = {
    direction: "rtl",
    fontFamily: "'Tahoma','Segoe UI',sans-serif",
    display: "inline-block",
    minWidth: 960,
    background: "linear-gradient(180deg,#eef4fc,#dce8f8)",
    border: "2px solid #7ba4d4",
    borderRadius: 3,
    overflow: "hidden",
    boxShadow: "2px 2px 6px rgba(0,0,0,0.15)",
  };

  return (
    <div style={wrap}>
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          tableLayout: "fixed",
        }}
      >
        <colgroup>
          <col style={{ width: 36 }} /> {/* ردیف */}
          <col style={{ width: 160 }} /> {/* انبار و فروش */}
          <col style={{ width: 14 }} /> {/* arrow انبار */}
          <col style={{ width: 100 }} /> {/* حوزه مالی */}
          <col style={{ width: 14 }} /> {/* arrow حوزه */}
          <col style={{ width: 80 }} /> {/* تکدانه */}
          <col style={{ width: 14 }} /> {/* arrow تکدانه */}
          <col style={{ width: 200 }} /> {/* بارکد کالا */}
          <col style={{ width: 14 }} /> {/* arrow بارکد */}
          <col style={{ width: 14 }} /> {/* arrow2 بارکد */}
          <col style={{ width: 90 }} /> {/* تاریخ موثر */}
          <col style={{ width: 14 }} /> {/* arrow تاریخ */}
          <col style={{ width: 40 }} /> {/* روز */}
          <col style={{ width: 14 }} /> {/* arrow روز */}
        </colgroup>

        {/* ── Header Row ─────────────────────────────────────── */}
        <thead>
          <tr>
            <th style={{ ...headerCellBase, textAlign: "center" }}>ردیف</th>
            <th style={headerCellBase} colSpan={2}>
              انبار و فروش ▾
            </th>
            <th style={headerCellBase} colSpan={2}>
              حوزه مالی ▾
            </th>
            <th style={headerCellBase} colSpan={2}>
              تکدانه ▾
            </th>
            <th style={headerCellBase} colSpan={4}>
              بارکد کالا ▾
            </th>
            <th style={headerCellBase} colSpan={2}>
              : تاریخ موثر
            </th>
            <th style={{ ...headerCellBase, textAlign: "center" }} colSpan={2}>
              روز
            </th>
          </tr>
        </thead>

        {/* ── Data Rows ──────────────────────────────────────── */}
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} style={{ height: 26 }}>
              {/* ردیف */}
              <td
                style={{
                  ...cellBase,
                  textAlign: "center",
                  fontSize: 11,
                  color: "#444",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    height: "100%",
                  }}
                >
                  <ArrowBtn dir="down" />
                  <span
                    style={{
                      flex: 1,
                      textAlign: "center",
                      fontSize: 11,
                      fontFamily: "'Tahoma',sans-serif",
                    }}
                  >
                    {i + 1}
                  </span>
                </div>
              </td>

              {/* انبار و فروش */}
              <td style={cellBase}>
                <SelectCell
                  value={row.anbarFouroush}
                  onChange={(v) => updateRow(i, "anbarFouroush", v)}
                  options={["انبار و فروش", "انبار مرکزی", "انبار شعبه"]}
                />
              </td>
              <td
                style={{
                  ...cellBase,
                  background: "linear-gradient(180deg,#dce8f8,#c8d9ef)",
                  width: 14,
                }}
              />

              {/* حوزه مالی */}
              <td style={cellBase}>
                <SelectCell
                  value={row.hauzehMali}
                  onChange={(v) => updateRow(i, "hauzehMali", v)}
                  options={["", "حوزه ۱", "حوزه ۲", "حوزه ۳"]}
                />
              </td>
              <td
                style={{
                  ...cellBase,
                  background: "linear-gradient(180deg,#dce8f8,#c8d9ef)",
                  width: 14,
                }}
              />

              {/* تکدانه */}
              <td style={cellBase}>
                <SelectCell
                  value={row.tekdane}
                  onChange={(v) => updateRow(i, "tekdane", v)}
                  options={["", "بله", "خیر"]}
                />
              </td>
              <td
                style={{
                  ...cellBase,
                  background: "linear-gradient(180deg,#dce8f8,#c8d9ef)",
                  width: 14,
                }}
              />

              {/* بارکد */}
              <td style={cellBase} colSpan={2}>
                <BarcodeCell
                  value={row.barcod}
                  onChange={(v) => updateRow(i, "barcod", v)}
                />
              </td>

              {/* up/down arrows for barcode */}
              <td
                style={{
                  ...cellBase,
                  width: 14,
                  padding: "2px",
                  background: "linear-gradient(180deg,#dce8f8,#c8d9ef)",
                }}
              >
                <ArrowBtn dir="up" />
              </td>
              <td
                style={{
                  ...cellBase,
                  width: 14,
                  padding: "2px",
                  background: "linear-gradient(180deg,#dce8f8,#c8d9ef)",
                }}
              >
                <ArrowBtn dir="down" />
              </td>

              {/* تاریخ موثر */}
              <td style={cellBase}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    height: "100%",
                  }}
                >
                  <InputCell
                    value={row.tarikhMoser}
                    onChange={(v) => updateRow(i, "tarikhMoser", v)}
                    align="center"
                  />
                </div>
              </td>
              <td
                style={{
                  ...cellBase,
                  background: "linear-gradient(180deg,#dce8f8,#c8d9ef)",
                  width: 14,
                }}
              >
                <ArrowBtn dir="down" />
              </td>

              {/* روز */}
              <td style={cellBase}>
                <InputCell
                  value={row.roz}
                  onChange={(v) => updateRow(i, "roz", v)}
                  align="center"
                />
              </td>
              <td
                style={{
                  ...cellBase,
                  background: "linear-gradient(180deg,#dce8f8,#c8d9ef)",
                  width: 14,
                }}
              >
                <ArrowBtn dir="down" />
              </td>
            </tr>
          ))}

          {/* Add Row Button */}
          <tr>
            <td
              colSpan={14}
              style={{
                background: "linear-gradient(180deg,#f0f6ff,#e8f0fb)",
                borderTop: "1px solid #b8cce4",
                textAlign: "center",
                padding: "3px 0",
              }}
            >
              <button
                onClick={addRow}
                style={{
                  background: "linear-gradient(180deg,#e8f0fb,#d0e0f0)",
                  border: "1px solid #7ba4d4",
                  borderRadius: 3,
                  fontSize: 11,
                  fontFamily: "'Tahoma',sans-serif",
                  cursor: "pointer",
                  padding: "2px 14px",
                  color: "#1a1a1a",
                  direction: "rtl",
                }}
              >
                + افزودن ردیف
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default FaraGridHeaderRow;
