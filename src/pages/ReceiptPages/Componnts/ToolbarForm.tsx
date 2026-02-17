import React, { useState } from "react";
import dayjs from "dayjs";

// ── Types ────────────────────────────────────────────────────────────────────

export interface FaraFormData {
  anbar: string;
  anbarShoobe: string;
  noeResid: string;
  tarikheResid: string;
  tarikheResidTime: string;
  shomareFactor: string;
  mahalEghdamKharid: string;
  tarikheKhahesh: string;
  shomarehErejae: string;
  shomarehSanad: string;
  shomarehKhahesh: string;
  tarikh_miladi: string;
  serial: string;
  residMostaqim: boolean;
  kodHesab: string;
  tasviyehVajh: string;
  tasviyehColor: string;
  tahvilGirande: string;
  samanehModian: string;
  shKontrolKeyfi: string;
}

interface FaraInvoiceFormProps {
  initialData?: Partial<FaraFormData>;
  onSubmit?: (data: FaraFormData) => void;
  onChange?: (data: FaraFormData) => void;
}

// ── Helpers ──────────────────────────────────────────────────────────────────

const S: Record<string, React.CSSProperties> = {
  row: {
    display: "grid",
    alignItems: "center",
    gap: 0,
    borderBottom: "1px solid #b8cce4",
  },
  label: {
    fontSize: 11,
    color: "#1f2937",
    fontFamily: "'Tahoma','Segoe UI',sans-serif",
    whiteSpace: "nowrap",
    textAlign: "right" as const,
    padding: "2px 6px",
    direction: "rtl",
    borderLeft: "1px solid #b8cce4",
  },
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
  select: {
    border: "none",
    outline: "none",
    background: "white",
    fontSize: 11,
    fontFamily: "'Tahoma','Segoe UI',sans-serif",
    padding: "1px 4px",
    width: "100%",
    height: 22,
    boxSizing: "border-box" as const,
    direction: "rtl",
    color: "#1f2937",
    appearance: "none" as const,
    cursor: "pointer",
  },
  cell: {
    borderLeft: "1px solid #b8cce4",
    height: 24,
    display: "flex",
    alignItems: "center",
    overflow: "hidden",
    background: "white",
    position: "relative" as const,
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
};

// ── Component ────────────────────────────────────────────────────────────────

const ToolbarForm: React.FC<FaraInvoiceFormProps> = ({
  initialData = {},
  onSubmit,
  onChange,
}) => {
  const [form, setForm] = useState<FaraFormData>({
    anbar: "۸۰۰۹",
    anbarShoobe: "انبار شعبه اراک",
    noeResid: "رسید انتقالی غیر همزمان",
    tarikheResid: "۱۴۰۳/۰۳/۲۹",
    tarikheResidTime: "۱۶:۳۵",
    shomareFactor: "",
    mahalEghdamKharid: "",
    tarikheKhahesh: "/ /",
    shomarehErejae: "۱۵۳۵",
    shomarehSanad: "",
    shomarehKhahesh: "",
    tarikh_miladi: "۲۰۲۴/۰۶/۱۸",
    serial: "۱۴۰۳۰۰۰۰۲۰",
    residMostaqim: false,
    kodHesab: "",
    tasviyehVajh: "نقد",
    tasviyehColor: "#1a6fc4",
    tahvilGirande: "",
    samanehModian: "سامانه مودیان",
    shKontrolKeyfi: "",
    ...initialData,
  });

  const update = (key: keyof FaraFormData, val: string | boolean) => {
    const next = { ...form, [key]: val };
    setForm(next);
    onChange?.(next);
  };

  const wrapStyle: React.CSSProperties = {
    direction: "rtl",
    fontFamily: "'Tahoma','Segoe UI',sans-serif",
    background: "linear-gradient(180deg,#eef4fc 0%,#dce8f8 100%)",
    border: "2px solid #7ba4d4",
    borderRadius: 3,
    overflow: "hidden",
    display: "block",
    width: "100%",
    maxWidth: "100%",
    minWidth: 900,
    boxShadow: "2px 2px 6px rgba(0,0,0,0.18)",
    boxSizing: "border-box",
  };

  const tableStyle: React.CSSProperties = {
    width: "100%",
    borderCollapse: "collapse",
    background: "transparent",
  };

  const tdLabel: React.CSSProperties = {
    ...S.label,
    background: "linear-gradient(180deg,#dce8f8,#c8d9ef)",
    borderBottom: "1px solid #b8cce4",
    borderLeft: "1px solid #b8cce4",
    borderRight: "none",
    borderTop: "none",
    padding: "2px 8px",
    fontSize: 11,
    color: "#1a1a1a",
    whiteSpace: "nowrap",
    textAlign: "right" as const,
  };

  const tdInput: React.CSSProperties = {
    background: "white",
    borderBottom: "1px solid #b8cce4",
    borderLeft: "1px solid #b8cce4",
    borderRight: "none",
    borderTop: "none",
    padding: 0,
    height: 24,
    verticalAlign: "middle",
  };

  const inp = (key: keyof FaraFormData, style?: React.CSSProperties) => (
    <input
      value={form[key] as string}
      onChange={(e) => update(key, e.target.value)}
      style={{ ...S.input, ...style }}
    />
  );

  const rowH: React.CSSProperties = { height: 26 };
  const colWidths = [50, 130, 14, 70, 55, 90, 55, 170, 55, 55, 52, 55];

  return (
    <div style={wrapStyle}>
      <table style={tableStyle}>
        <colgroup>
          {colWidths.map((width, index) => (
            <col key={index} style={{ width }} />
          ))}
        </colgroup>
        <tbody>
          {/* ── Row 1 ────────────────────────────────────────────── */}
          <tr style={rowH}>
            {/* انبار */}
            <td style={tdLabel}>: انبـــار</td>
            <td style={tdInput} colSpan={1}>
              <div style={{ display: "flex" }}>
                <button style={S.arrowBtn}>▼</button>
                {inp("anbar", { textAlign: "center" })}
              </div>
            </td>
            <td
              style={{
                ...tdInput,
                background: "linear-gradient(180deg,#dce8f8,#c8d9ef)",
                width: 14,
              }}
            />

            {/* انبار شعبه */}
            <td
              style={{
                ...tdInput,
                padding: "0 4px",
                color: "#1f2937",
                fontSize: 11,
                textAlign: "right" as const,
              }}
              colSpan={2}
            >
              <span
                style={{
                  fontFamily: "'Tahoma',sans-serif",
                  fontSize: 11,
                  paddingRight: 4,
                }}
              >
                {form.anbarShoobe}
              </span>
            </td>

            {/* نوع رسید label */}
            <td style={tdLabel}>: نـوع رسـیـد</td>

            {/* نوع رسید value */}
            <td style={tdInput} colSpan={3}>
              <div style={{ display: "flex", position: "relative" }}>
                <button style={S.arrowBtn}>▼</button>
                <select
                  value={form.noeResid}
                  onChange={(e) => update("noeResid", e.target.value)}
                  style={S.select}
                >
                  <option>رسید انتقالی غیر همزمان</option>
                  <option>رسید مستقیم</option>
                  <option>رسید ارجاع</option>
                </select>
              </div>
            </td>

            {/* تاریخ رسید label */}
            <td style={tdLabel}>: تاریـخ رسیـد</td>

            {/* تاریخ رسید value */}
            <td style={tdInput} colSpan={1}>
              <div style={{ display: "flex" }}>
                <button style={S.arrowBtn}>▼</button>
                {inp("tarikheResid", { fontSize: 11 })}
              </div>
            </td>
            {/* time */}
            <td style={{ ...tdInput, width: 50 }}>
              {inp("tarikheResidTime", {
                textAlign: "center",
                fontWeight: "bold",
              })}
            </td>
          </tr>

          {/* ── Row 2 ────────────────────────────────────────────── */}
          <tr style={rowH}>
            {/* سریال */}
            <td style={tdLabel}>: سریـال</td>
            <td style={tdInput} colSpan={1}>
              {inp("serial")}
            </td>
            <td
              style={{
                ...tdInput,
                background: "linear-gradient(180deg,#dce8f8,#c8d9ef)",
              }}
            />

            {/* رسید مستقیم checkbox */}
            <td style={{ ...tdInput, padding: "0 6px" }} colSpan={2}>
              <label
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 4,
                  fontSize: 11,
                  fontFamily: "'Tahoma',sans-serif",
                  cursor: "pointer",
                  direction: "rtl",
                }}
              >
                <input
                  type="checkbox"
                  checked={form.residMostaqim}
                  onChange={(e) => update("residMostaqim", e.target.checked)}
                  style={{ margin: 0 }}
                />
                رسید مستقیم
              </label>
            </td>

            {/* شماره ارجاع label */}
            <td style={tdLabel}>: شمـاره ارجـاع</td>

            {/* شماره ارجاع value */}
            <td
              style={{
                ...tdInput,
                fontWeight: "bold",
                textAlign: "center" as const,
                fontSize: 13,
                padding: "0 8px",
                color: "#1a1a1a",
              }}
              colSpan={3}
            >
              {inp("shomarehErejae", {
                fontWeight: "bold",
                textAlign: "center",
                fontSize: 13,
              })}
            </td>

            {/* شماره فاکتور label */}
            <td style={tdLabel}>: شمـاره فاکتور</td>

            {/* شماره فاکتور value */}
            <td style={tdInput} colSpan={2}>
              <div style={{ display: "flex" }}>{inp("shomareFactor")}</div>
            </td>
          </tr>

          {/* ── Row 3 ────────────────────────────────────────────── */}
          <tr style={rowH}>
            {/* کد حساب */}
            <td style={tdLabel}>: کد حساب</td>
            <td style={tdInput} colSpan={1}>
              {inp("kodHesab")}
            </td>
            <td
              style={{
                ...tdInput,
                background: "linear-gradient(180deg,#dce8f8,#c8d9ef)",
              }}
            />

            {/* شماره درخواست */}
            <td
              style={{ ...tdInput, padding: "0 4px", fontSize: 11 }}
              colSpan={2}
            >
              <span
                style={{ fontFamily: "'Tahoma',sans-serif", fontSize: 11 }}
              ></span>
            </td>

            <td style={tdLabel}>: شمـاره درخواست</td>

            <td style={tdInput} colSpan={3}>
              {inp("shomarehKhahesh")}
            </td>

            {/* محل اقدام خرید */}
            <td style={tdLabel}>محل اقدام خرید</td>
            <td style={tdInput} colSpan={2}>
              <div style={{ display: "flex" }}>
                <button style={S.arrowBtn}>▼</button>
                {inp("mahalEghdamKharid")}
              </div>
            </td>
          </tr>

          {/* ── Row 4 ────────────────────────────────────────────── */}
          <tr style={{ ...rowH, borderBottom: "none" }}>
            {/* تحویل گیرنده */}
            <td style={tdLabel}>: تحویل گیرنده</td>
            <td style={{ ...tdInput, borderBottom: "none" }} colSpan={1}>
              {inp("tahvilGirande")}
            </td>
            <td
              style={{
                ...tdInput,
                background: "linear-gradient(180deg,#dce8f8,#c8d9ef)",
                borderBottom: "none",
              }}
            />

            {/* تسویه وجه */}
            <td
              style={{ ...tdInput, borderBottom: "none", padding: "0 4px" }}
              colSpan={2}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
                <div
                  style={{
                    width: 20,
                    height: 16,
                    background: form.tasviyehColor,
                    border: "1px solid #7ba4d4",
                    cursor: "pointer",
                    flexShrink: 0,
                  }}
                  onClick={() => {
                    const colors = [
                      "#1a6fc4",
                      "#22c55e",
                      "#ef4444",
                      "#f59e0b",
                      "#8b5cf6",
                    ];
                    const idx = colors.indexOf(form.tasviyehColor);
                    update("tasviyehColor", colors[(idx + 1) % colors.length]);
                  }}
                />
                <span
                  style={{ fontSize: 11, fontFamily: "'Tahoma',sans-serif" }}
                >
                  نقد
                </span>
              </div>
            </td>

            <td style={{ ...tdLabel, borderBottom: "none" }}>: تسـویه وجـه</td>

            <td style={{ ...tdInput, borderBottom: "none" }} colSpan={3}>
              <div style={{ display: "flex", position: "relative" }}>
                <button style={{ ...S.arrowBtn, borderBottom: "none" }}>
                  ▼
                </button>
                <select
                  value={form.tasviyehVajh}
                  onChange={(e) => update("tasviyehVajh", e.target.value)}
                  style={S.select}
                >
                  <option>نقد</option>
                  <option>اعتباری</option>
                  <option>چک</option>
                </select>
              </div>
            </td>

            {/* شماره سند */}
            <td style={{ ...tdLabel, borderBottom: "none" }}>: شمـاره سند</td>
            <td style={{ ...tdInput, borderBottom: "none" }} colSpan={2}>
              {inp("shomarehSanad")}
            </td>
          </tr>

          {/* ── Row 5 (Miladi date + Samane) ─────────────────────── */}
          <tr style={{ ...rowH }}>
            {/* سامانه مودیان */}
            <td style={tdLabel}>: سامانه مودیان</td>
            <td style={tdInput} colSpan={1}>
              <div style={{ display: "flex" }}>
                <button style={S.arrowBtn}>▼</button>
                <select
                  value={form.samanehModian}
                  onChange={(e) => update("samanehModian", e.target.value)}
                  style={S.select}
                >
                  <option>سامانه مودیان</option>
                  <option>---</option>
                </select>
              </div>
            </td>
            <td
              style={{
                ...tdInput,
                background: "linear-gradient(180deg,#dce8f8,#c8d9ef)",
              }}
            />

            {/* ش کنترل کیفی */}
            <td style={{ ...tdInput, padding: "0 4px" }} colSpan={2}>
              <div style={{ display: "flex" }}>
                <button style={S.arrowBtn}>▼</button>
                {inp("shKontrolKeyfi")}
              </div>
            </td>

            <td style={tdLabel}>ش کنترل کیفی</td>

            {/* تاریخ درخواست */}
            <td style={tdInput} colSpan={3}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                  padding: "0 4px",
                }}
              >
                <button style={S.arrowBtn}>▼</button>
                {inp("tarikheKhahesh", { flex: 1 })}
              </div>
            </td>

            {/* تاریخ میلادی */}
            <td style={tdLabel}>: تاریـخ میـلادی</td>
            <td style={tdInput} colSpan={2}>
              <div style={{ display: "flex" }}>
                <button style={S.arrowBtn}>▼</button>
                {inp("tarikh_miladi")}
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ToolbarForm;
