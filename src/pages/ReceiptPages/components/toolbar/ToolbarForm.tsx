import React, { useState } from "react";
// import CustomInput, { CustomFild } from "./CustomField";
import CustomSpecificField from "../custom/CustomSpecificfield";
import SerialField from "../ui/SerialField";
import CheckboxField from "../ui/CheckboxField";
import SelectField from "../ui/SelectField";
import ComboBoxField from "../ui/ComboBoxField";
import DateInputField from "../ui/DateInputField";
import LabeledTextField from "../ui/LabeledTextField";
import ArrowInputField from "../ui/ArrowInputField";
// import KodHesabRow from "../custom/KodHesabRow";
// import TahvilGirandeRow from "../custom/TahvilGirandeRow";
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
    tarikheResidTime: "16:35",
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
    overflow: "visible",
    position: "relative",
    zIndex: 10,
    display: "block",
    width: "100%",
    maxWidth: "100%",
    minWidth: 780,
    boxShadow: "2px 2px 6px rgba(0,0,0,0.18)",
    boxSizing: "border-box",
  };

  const responsiveViewportStyle: React.CSSProperties = {
    width: "100%",
    maxWidth: "100%",
    overflowX: "auto",
    overflowY: "visible",
    WebkitOverflowScrolling: "touch",
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
    <div style={responsiveViewportStyle}>
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
              <CustomSpecificField
                anbar={form.anbar}
                secondLabel={form.anbarShoobe}
                onAnbarChange={(v) => update("anbar", v)}
                tdLabel={tdLabel}
                tdInput={tdInput}
                label="انبار"
              />

              {/* نوع رسید label */}
              <ComboBoxField
                label="نـوع رسـیـد"
                value={form.noeResid}
                options={[
                  {
                    label: "رسید انتقالی غیر همزمان",
                    value: "رسید انتقالی غیر همزمان",
                  },
                  { label: "رسید مستقیم", value: "رسید مستقیم" },
                  { label: "رسید ارجاع", value: "رسید ارجاع" },
                  { label: "رسید واگردانی", value: "رسید واگردانی" },
                  { label: "رسید هدیه", value: "رسید هدیه" },
                ]}
                onChange={(v) => update("noeResid", v)}
                tdLabel={tdLabel}
                tdInput={tdInput}
                colSpan={1}
                inputColSpan={3}
                placeholder="نوع رسید را انتخاب کنید"
              />

              <DateInputField
                label="تاریـخ رسیـد"
                value={form.tarikheResid}
                onChange={(v) => update("tarikheResid", v)}
                tdLabel={tdLabel}
                tdInput={tdInput}
                colSpan={1}
                inputStyle={{ fontSize: 11 }}
                calendarMode="jalali"
                allowModeToggle
              />
              {/* time */}
              <td style={{ ...tdInput, width: 50 }}>
                <input
                  type="time"
                  value={form.tarikheResidTime}
                  onChange={(e) => update("tarikheResidTime", e.target.value)}
                  step={60}
                  style={{
                    ...S.input,
                    textAlign: "center",
                    direction: "ltr",
                    padding: "0 2px",
                  }}
                />
              </td>
            </tr>

            {/* ── Row 2 ────────────────────────────────────────────── */}
            <tr style={rowH}>
              <SerialField
                value={form.serial}
                onChange={(v) => update("serial", v)}
                tdLabel={tdLabel}
                tdInput={tdInput}
              />

              <CheckboxField
                label="رسید مستقیم"
                checked={form.residMostaqim}
                onChange={(v) => update("residMostaqim", v)}
                tdInput={tdInput}
                colSpan={2}
              />

              <LabeledTextField
                label="شمـاره ارجـاع"
                value={form.shomarehErejae}
                onChange={(v) => update("shomarehErejae", v)}
                tdLabel={tdLabel}
                tdInput={tdInput}
                colSpan={3}
                tdInputStyle={{
                  fontWeight: "bold",
                  textAlign: "center",
                  fontSize: 13,
                  padding: "0 8px",
                  color: "#1a1a1a",
                }}
                inputStyle={{
                  fontWeight: "bold",
                  textAlign: "center",
                  fontSize: 13,
                }}
              />

              <LabeledTextField
                label="شمـاره فاکتور"
                value={form.shomareFactor}
                onChange={(v) => update("shomareFactor", v)}
                tdLabel={tdLabel}
                tdInput={tdInput}
                colSpan={2}
              />
            </tr>

            {/* ── Row 3 ────────────────────────────────────────────── */}
            <tr style={rowH}>
              <CustomSpecificField
                anbar={form.kodHesab}
                secondLabel={""}
                onAnbarChange={(v) => update("kodHesab", v)}
                tdLabel={tdLabel}
                tdInput={tdInput}
                label="کد حساب"
              />

              <CustomSpecificField
                anbar={form.tahvilGirande}
                secondLabel={""}
                onAnbarChange={(v) => update("tahvilGirande", v)}
                tdLabel={tdLabel}
                tdInput={tdInput}
                label="تحویل گیرنده"
              />

              <td style={tdInput} colSpan={2} />
            </tr>

            {/* ── Row 5 (Miladi date + Samane) ─────────────────────── */}
            <tr style={{ ...rowH }}>
              {/* سامانه مودیان */}
              <ComboBoxField
                label="سامانه مودیان"
                value={form.samanehModian}
                options={[
                  { label: "سامانه مودیان", value: "سامانه مودیان" },
                  { label: "سامانه متصدی", value: "سامانه متصدی" },
                  { label: "سامانه حسابدار", value: "سامانه حسابدار" },
                  { label: "سامانه انبار دار", value: "سامانه انبار دار" },
                  { label: "سیستم داخلی", value: "سیستم داخلی" },
                  { label: "---", value: "---" },
                ]}
                onChange={(v) => update("samanehModian", v)}
                tdLabel={tdLabel}
                tdInput={tdInput}
                colSpan={1}
                inputColSpan={1}
                placeholder="سامانه را انتخاب کنید"
              />
              <td
                style={{
                  ...tdInput,
                  background: "linear-gradient(180deg,#dce8f8,#c8d9ef)",
                }}
              />

              <ArrowInputField
                label="ش کنترل کیفی"
                labelPosition="after"
                includeColon={false}
                value={form.shKontrolKeyfi}
                onChange={(v) => update("shKontrolKeyfi", v)}
                tdLabel={tdLabel}
                tdInput={tdInput}
                inputColSpan={2}
                tdInputStyle={{ padding: "0 4px" }}
              />

              <ArrowInputField
                labelPosition="none"
                value={form.tarikheKhahesh}
                onChange={(v) => update("tarikheKhahesh", v)}
                tdLabel={tdLabel}
                tdInput={tdInput}
                inputColSpan={3}
                inputStyle={{ flex: 1 }}
                containerStyle={{ gap: 2, padding: "0 4px" }}
              />

              <DateInputField
                label="تاریـخ میـلادی"
                value={form.tarikh_miladi}
                onChange={(v) => update("tarikh_miladi", v)}
                tdLabel={tdLabel}
                tdInput={tdInput}
                colSpan={2}
                calendarMode="gregorian"
                allowModeToggle
              />
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ToolbarForm;
