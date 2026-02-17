import React, { useState, useRef, useEffect } from "react";
import JsBarcode from "jsbarcode";
import { Box } from "@mui/material";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import { IconDownload } from "../toolbar/ToolbarIconsSvg";

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

// ── Barcode Cell (اصلاح شده برای نمایش دقیق) ──────────────────────────────────

const BarcodeCell: React.FC<{
  value: string;
  onChange: (v: string) => void;
}> = ({ value, onChange }) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const [editing, setEditing] = useState(false);

  useEffect(() => {
    if (svgRef.current && value) {
      try {
        JsBarcode(svgRef.current, value, {
          format: "CODE128",
          width: 1, // باریک‌تر برای جا شدن در سلول
          height: 18,
          displayValue: false,
          margin: 0,
          background: "transparent",
        });
      } catch (e) {
        console.error("Barcode generation error", e);
      }
    }
  }, [value, editing]);

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
          height: 22,
          border: "1px solid #7ba4d4",
          outline: "none",
          fontSize: 11,
          fontFamily: "Tahoma",
          padding: "0 4px",
          direction: "ltr",
          textAlign: "center",
          backgroundColor: "#fffde7", // رنگ زرد ملایم هنگام ویرایش
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
        cursor: "pointer",
        background: "#fff",
        minHeight: 22,
      }}
    >
      {value ? (
        <svg ref={svgRef} style={{ maxHeight: 20, maxWidth: "100%" }} />
      ) : (
        <span style={{ fontSize: 9, color: "#aaa" }}>وارد کردن بارکد...</span>
      )}
    </div>
  );
};

// ── Arrow Button (استایل کلاسیک ویندوز) ────────────────────────────────────────

const ArrowBtn: React.FC<{ dir?: "up" | "down" | "both" }> = ({
  dir = "down",
}) => (
  <button
    style={{
      width: 16,
      height: 22,
      background: "linear-gradient(180deg,#e8f0fb,#d0e0f0)",
      border: "1px solid #b8cce4",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: 8,
      padding: 0,
      flexShrink: 0,
    }}
  >
    {dir === "up" ? "▲" : "▼"}
  </button>
);

// ── Main Component ────────────────────────────────────────────────────────────

const FaraGridHeaderRow: React.FC<FaraGridHeaderRowProps> = ({
  rows: externalRows,
  onRowChange,
  onAddRow,
}) => {
  const [internalRows, setInternalRows] = useState<FaraGridRowData[]>([
    {
      radif: "1",
      anbarFouroush: "انبار و فروش",
      hauzehMali: "",
      tekdane: "تکدانه",
      barcod: "123456789",
      tarikhMoser: "1402/08/01",
      roz: "0",
    },
  ]);

  const rows = externalRows ?? internalRows;

  const updateRow = (i: number, key: keyof FaraGridRowData, val: string) => {
    const next = rows.map((r, idx) => (idx === i ? { ...r, [key]: val } : r));
    if (!externalRows) setInternalRows(next);
    onRowChange?.(i, next[i]);
  };

  return (
    <Box dir="rtl" sx={{ bgcolor: "#f0f0f0" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          border: "2px solid #7ba4d4",
          borderRadius: 3,
          overflow: "hidden",
          background: "linear-gradient(180deg,#eef4fc,#dce8f8)",
          fontFamily: "Tahoma",
        }}
      >
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            tableLayout: "fixed",
          }}
        >
          <thead>
            <tr
              style={{
                height: 24,
                background: "linear-gradient(180deg,#dce8f8 0%,#c8d9ef 100%)",
              }}
            >
              {/* هدرها مشابه تصویر شما */}
              <th style={headerStyle}>حوزه مالی</th>
              <th style={headerStyle}>حوزه عملکرد</th>
              <th style={headerStyle}>بارکد کالا</th>
              <th style={headerStyle}>تاریخ موثر</th>
              <th style={headerStyle}>روز</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr key={i} style={{ height: 30, verticalAlign: "middle" }}>
                {/* حوزه مالی */}
                <td style={cellStyle}>
                  <div style={flexRow}>
                    <select
                      value={row.anbarFouroush}
                      onChange={(e) =>
                        updateRow(i, "anbarFouroush", e.target.value)
                      }
                      style={selectStyle}
                    >
                      <option>انبار و فروش</option>
                    </select>
                  </div>
                </td>

                {/* حوزه عملکرد */}
                <td style={cellStyle}>
                  <div style={flexRow}>
                    <select
                      value={row.tekdane}
                      onChange={(e) => updateRow(i, "tekdane", e.target.value)}
                      style={selectStyle}
                    >
                      <option>تکدانه</option>
                    </select>
                  </div>
                </td>

                {/* بارکد کالا با دکمه‌های فلش */}
                <td style={cellStyle}>
                  <div style={flexRow}>
                    <BarcodeCell
                      value={row.barcod}
                      onChange={(v) => updateRow(i, "barcod", v)}
                    />
                    <button
                      title="دانلود"
                      style={{
                        border: "none",
                        background: "transparent",
                        padding: 3,
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <IconDownload />
                    </button>
                    <button
                      title="دانلود"
                      style={{
                        border: "none",
                        background: "transparent",
                        padding: 3,
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <IconDownload />
                    </button>
                  </div>
                </td>

                {/* تاریخ موثر */}
                <td style={cellStyle}>
                  <div style={flexRow}>
                    <DatePicker
                      value={row.tarikhMoser}
                      onChange={(date: any) => {
                        const dateStr = date ? date.format("YYYY/MM/DD") : "";
                        updateRow(i, "tarikhMoser", dateStr);
                      }}
                      calendar={persian}
                      locale={persian_fa}
                      format="YYYY/MM/DD"
                      calendarPosition="bottom-right"
                      containerStyle={{
                        flex: 1,
                      }}
                      inputClass="date-picker-input"
                      style={{
                        height: 22,
                        fontSize: 11,
                        fontFamily: "Tahoma",
                        border: "1px solid #7ba4d4",
                        textAlign: "center",
                        width: "100%",
                      }}
                    />
                  </div>
                </td>

                {/* روز */}
                <td style={cellStyle}>
                  <div style={flexRow}>
                    <input
                      value={row.roz}
                      style={{ ...inputStyle, width: 40 }}
                      onChange={(e) => updateRow(i, "roz", e.target.value)}
                    />
                    <ArrowBtn dir="down" />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Box>
  );
};

// ── Styles ───────────────────────────────────────────────────────────────────

const headerStyle: React.CSSProperties = {
  fontSize: 11,
  padding: "2px 8px",
  textAlign: "right",
  color: "#000080",
  fontWeight: "bold",
  borderBottom: "1px solid #7ba4d4",
};

const cellStyle: React.CSSProperties = {
  padding: "2px 5px",
};

const flexRow: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: "2px",
};

const selectStyle: React.CSSProperties = {
  flex: 1,
  height: 22,
  fontSize: 11,
  fontFamily: "Tahoma",
  border: "1px solid #7ba4d4",
};

const inputStyle: React.CSSProperties = {
  flex: 1,
  height: 22,
  fontSize: 11,
  fontFamily: "Tahoma",
  border: "1px solid #7ba4d4",
  textAlign: "center",
};

export default FaraGridHeaderRow;
