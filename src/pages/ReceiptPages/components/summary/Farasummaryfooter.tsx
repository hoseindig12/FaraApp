import React from "react";
import SummaryField from "../ui/SummaryField";

// ── Types ────────────────────────────────────────────────────────────────────

export interface FaraSummaryData {
  vizhegi1: string; // ویژگی ۱: ۲۴cc
  vizhegi2: string; // ویژگی ۲: فوطی
  vizhegi3: string; // ویژگی ۳: تکدانه
  vizhegi4: string; // ویژگی ۴: ...
  mahsool: string; // محصول - کارخانه
  tafsili1: string;
  tafsili2: string;
  tafsili3: string;
  tafsili4: string;
  hesabMarboot: string; // حساب مرتبط
  vahedKala: string; // واحد کالا
  tedad: string; // تعداد
  jamMablagh: string; // جمع مبلغ
  jamEzafe: string; // جمع اضافات
  jamQeymatReshandeh: string; // جمع قیمت‌رسانی
  jamKosorat: string; // جمع کسورات
  qabelPardakht: string; // قابل پرداخت
  jamMeqdar: string; // جمع مقدار
  jamArz: string; // جمع ارز
  jamVazn: string; // جمع وزن (KG)
  maliyatVaAvaarez: string; // مالیات و عوارض VAT
}

interface FaraSummaryFooterProps {
  data?: Partial<FaraSummaryData>;
  onChange?: (data: FaraSummaryData) => void;
}

// ── Styles ────────────────────────────────────────────────────────────────────

const tdLabel: React.CSSProperties = {
  background: "linear-gradient(180deg,#dce8f8 0%,#c8d9ef 100%)",
  border: "1px solid #b8cce4",
  borderRight: "none",
  fontSize: 11,
  fontFamily: "'Tahoma','Segoe UI',sans-serif",
  color: "#1a1a1a",
  textAlign: "right" as const,
  padding: "1px 6px",
  whiteSpace: "nowrap",
  direction: "rtl",
  height: 22,
};

const tdInput: React.CSSProperties = {
  background: "white",
  border: "1px solid #b8cce4",
  borderRight: "none",
  height: 22,
  padding: 0,
  verticalAlign: "middle",
};

const tdUnit: React.CSSProperties = {
  ...tdInput,
  background: "linear-gradient(180deg,#dce8f8 0%,#c8d9ef 100%)",
  fontSize: 10,
  fontFamily: "'Tahoma',sans-serif",
  color: "#555",
  textAlign: "center" as const,
  padding: "0 3px",
  width: 30,
};

const inp = (
  val: string,
  onChange: (v: string) => void,
  align: "right" | "center" | "left" = "right",
  readOnly = false,
): React.ReactNode => (
  <input
    value={val}
    onChange={(e) => onChange(e.target.value)}
    readOnly={readOnly}
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
    }}
  />
);

// ── Component ─────────────────────────────────────────────────────────────────

const defaultData: FaraSummaryData = {
  vizhegi1: "۲۴cc",
  vizhegi2: "فوطی",
  vizhegi3: "تکدانه",
  vizhegi4: "",
  mahsool: "",
  tafsili1: "",
  tafsili2: "",
  tafsili3: "",
  tafsili4: "",
  hesabMarboot: "",
  vahedKala: "",
  tedad: "",
  jamMablagh: "۰",
  jamEzafe: "۰",
  jamQeymatReshandeh: "۰",
  jamKosorat: "۰",
  qabelPardakht: "۰",
  jamMeqdar: "۱۴٬۶۴۰",
  jamArz: "۰",
  jamVazn: "۵٬۰۹۴٬۲۳",
  maliyatVaAvaarez: "۰",
};

const FaraSummaryFooter: React.FC<FaraSummaryFooterProps> = ({
  data: externalData,
  onChange,
}) => {
  const [internal, setInternal] = React.useState<FaraSummaryData>({
    ...defaultData,
    ...externalData,
  });

  const data = externalData ? { ...defaultData, ...externalData } : internal;

  const update = (key: keyof FaraSummaryData, val: string) => {
    const next = { ...data, [key]: val };
    if (!externalData) setInternal(next);
    onChange?.(next);
  };

  const colWidths = [55, 60, 60, 130, 65, 50, 65, 80, 28, 75, 80, 28];

  const wrapStyle: React.CSSProperties = {
    direction: "rtl",
    fontFamily: "'Tahoma','Segoe UI',sans-serif",
    background: "linear-gradient(180deg,#eef4fc,#dce8f8)",
    border: "2px solid #7ba4d4",
    borderRadius: 3,
    overflow: "hidden",
    display: "block",
    width: "100%",
    maxWidth: "100%",
    minWidth: 900,
    boxShadow: "2px 2px 6px rgba(0,0,0,0.15)",
    boxSizing: "border-box",
  };

  return (
    <div style={wrapStyle}>
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          tableLayout: "fixed",
        }}
      >
        <colgroup>
          {colWidths.map((width, index) => (
            <col key={index} style={{ width }} />
          ))}
        </colgroup>
        <tbody>
          {/* ── Row 1 ── */}
          <tr>
            <SummaryField
              label="ویژگی ۱"
              value={data.vizhegi1}
              onChange={(v) => update("vizhegi1", v)}
              tdLabelStyle={tdLabel}
              tdInputStyle={tdInput}
            />
            <SummaryField
              label="محصول - کارخانه"
              value={data.mahsool}
              onChange={(v) => update("mahsool", v)}
              tdLabelStyle={tdLabel}
              tdInputStyle={tdInput}
            />
            <SummaryField
              label="واحد کالا"
              value={data.vahedKala}
              onChange={(v) => update("vahedKala", v)}
              tdLabelStyle={tdLabel}
              tdInputStyle={tdInput}
              align="center"
            />
            <SummaryField
              label="جمع مبلغ"
              value={data.jamMablagh}
              onChange={(v) => update("jamMablagh", v)}
              tdLabelStyle={tdLabel}
              tdInputStyle={{ ...tdInput, textAlign: "left" }}
              align="left"
            />
            <td style={tdUnit}>ریال</td>
          </tr>

          {/* ── Row 2 ── */}
          <tr>
            <SummaryField
              label="ویژگی ۲"
              value={data.vizhegi2}
              onChange={(v) => update("vizhegi2", v)}
              tdLabelStyle={tdLabel}
              tdInputStyle={tdInput}
            />
            <SummaryField
              label="تفصیلی ۱"
              value={data.tafsili1}
              onChange={(v) => update("tafsili1", v)}
              tdLabelStyle={tdLabel}
              tdInputStyle={tdInput}
            />
            <SummaryField
              label="تعداد"
              value={data.tedad}
              onChange={(v) => update("tedad", v)}
              tdLabelStyle={tdLabel}
              tdInputStyle={tdInput}
              align="center"
            />
            <SummaryField
              label="جمع اضافات"
              value={data.jamEzafe}
              onChange={(v) => update("jamEzafe", v)}
              tdLabelStyle={tdLabel}
              tdInputStyle={{ ...tdInput, textAlign: "left" }}
              align="left"
            />
            <td style={tdUnit}>ریال</td>
          </tr>

          {/* ── Row 3 ── */}
          <tr>
            <SummaryField
              label="ویژگی ۳"
              value={data.vizhegi3}
              onChange={(v) => update("vizhegi3", v)}
              tdLabelStyle={tdLabel}
              tdInputStyle={tdInput}
            />
            <SummaryField
              label="تفصیلی ۲"
              value={data.tafsili2}
              onChange={(v) => update("tafsili2", v)}
              tdLabelStyle={tdLabel}
              tdInputStyle={tdInput}
            />
            <SummaryField
              label="جمع مقدار"
              value={data.jamMeqdar}
              onChange={(v) => update("jamMeqdar", v)}
              tdLabelStyle={tdLabel}
              tdInputStyle={{ ...tdInput, fontWeight: "bold" }}
              align="center"
            />
            <SummaryField
              label="جمع قیمت‌رسانی"
              value={data.jamQeymatReshandeh}
              onChange={(v) => update("jamQeymatReshandeh", v)}
              tdLabelStyle={tdLabel}
              tdInputStyle={{ ...tdInput, textAlign: "left" }}
              align="left"
            />
            <td style={tdUnit}>ریال</td>
          </tr>

          {/* ── Row 4 ── */}
          <tr>
            <SummaryField
              label="ویژگی ۴"
              value={data.vizhegi4}
              onChange={(v) => update("vizhegi4", v)}
              tdLabelStyle={tdLabel}
              tdInputStyle={tdInput}
            />
            <SummaryField
              label="تفصیلی ۳"
              value={data.tafsili3}
              onChange={(v) => update("tafsili3", v)}
              tdLabelStyle={tdLabel}
              tdInputStyle={tdInput}
            />
            <SummaryField
              label="جمع ارز"
              value={data.jamArz}
              onChange={(v) => update("jamArz", v)}
              tdLabelStyle={tdLabel}
              tdInputStyle={tdInput}
              align="center"
            />
            <SummaryField
              label="جمع کسورات"
              value={data.jamKosorat}
              onChange={(v) => update("jamKosorat", v)}
              tdLabelStyle={tdLabel}
              tdInputStyle={{ ...tdInput, textAlign: "left" }}
              align="left"
            />
            <td style={tdUnit}>ریال</td>
          </tr>

          {/* ── Row 5 ── */}
          <tr>
            <td style={{ ...tdLabel, borderBottom: "none" }} />
            <td style={{ ...tdInput, borderBottom: "none" }} />
            <SummaryField
              label="تفصیلی ۴"
              value={data.tafsili4}
              onChange={(v) => update("tafsili4", v)}
              tdLabelStyle={tdLabel}
              tdInputStyle={tdInput}
            />
            <SummaryField
              label="جمع وزن (KG)"
              value={data.jamVazn}
              onChange={(v) => update("jamVazn", v)}
              tdLabelStyle={tdLabel}
              tdInputStyle={{ ...tdInput, fontWeight: "bold" }}
              align="center"
            />
            <SummaryField
              label="قابل پرداخت"
              value={data.qabelPardakht}
              onChange={(v) => update("qabelPardakht", v)}
              tdLabelStyle={tdLabel}
              tdInputStyle={{ ...tdInput, textAlign: "left" }}
              align="left"
            />
            <td style={tdUnit}>ریال</td>
          </tr>

          {/* ── Row 6 ── */}
          <tr>
            <td style={{ ...tdLabel, borderBottom: "none" }} />
            <td style={{ ...tdInput, borderBottom: "none" }} />
            <SummaryField
              label="حساب مرتبط"
              value={data.hesabMarboot}
              onChange={(v) => update("hesabMarboot", v)}
              tdLabelStyle={{ ...tdLabel, borderBottom: "none" }}
              tdInputStyle={{ ...tdInput, borderBottom: "none" }}
            />
            <SummaryField
              label="مالیات و عوارض VAT"
              value={data.maliyatVaAvaarez}
              onChange={(v) => update("maliyatVaAvaarez", v)}
              tdLabelStyle={tdLabel}
              tdInputStyle={{ ...tdInput, textAlign: "left" }}
              align="left"
            />
            <td
              colSpan={6}
              style={{
                borderBottom: "1px solid #b8cce4",
                background: "transparent",
              }}
            />
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default FaraSummaryFooter;
