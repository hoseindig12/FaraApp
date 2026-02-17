import React from "react";

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
          <td style={tdLabel}>: ویژگی ۱</td>
          <td style={tdInput}>
            {inp(data.vizhegi1, (v) => update("vizhegi1", v))}
          </td>
          <td style={tdLabel}>محصول - کارخانه</td>
          <td style={tdInput}>
            {inp(data.mahsool, (v) => update("mahsool", v))}
          </td>
          <td style={tdLabel}>: واحد کالا</td>
          <td style={tdInput}>
            {inp(data.vahedKala, (v) => update("vahedKala", v), "center")}
          </td>
          <td style={tdLabel}>: جمع مبلغ</td>
          <td style={{ ...tdInput, textAlign: "left" }}>
            {inp(data.jamMablagh, (v) => update("jamMablagh", v), "left")}
          </td>
          <td style={tdUnit}>ریال</td>
          <td style={tdLabel}>: جمع مبلغ</td>
          <td style={{ ...tdInput, textAlign: "left" }}>
            {inp(data.jamMablagh, (v) => update("jamMablagh", v), "left")}
          </td>
          <td style={tdUnit}>ریال</td>
        </tr>

        {/* ── Row 2 ── */}
        <tr>
          <td style={tdLabel}>: ویژگی ۲</td>
          <td style={tdInput}>
            {inp(data.vizhegi2, (v) => update("vizhegi2", v))}
          </td>
          <td style={tdLabel}>: تفصیلی ۱</td>
          <td style={tdInput}>
            {inp(data.tafsili1, (v) => update("tafsili1", v))}
          </td>
          <td style={tdLabel}>: تعداد</td>
          <td style={tdInput}>
            {inp(data.tedad, (v) => update("tedad", v), "center")}
          </td>
          <td style={tdLabel}>: جمع اضافات</td>
          <td style={{ ...tdInput, textAlign: "left" }}>
            {inp(data.jamEzafe, (v) => update("jamEzafe", v), "left")}
          </td>
          <td style={tdUnit}>ریال</td>
          <td style={tdLabel}>: جمع اضافات</td>
          <td style={{ ...tdInput, textAlign: "left" }}>
            {inp(data.jamEzafe, (v) => update("jamEzafe", v), "left")}
          </td>
          <td style={tdUnit}>ریال</td>
        </tr>

        {/* ── Row 3 ── */}
        <tr>
          <td style={tdLabel}>: ویژگی ۳</td>
          <td style={tdInput}>
            {inp(data.vizhegi3, (v) => update("vizhegi3", v))}
          </td>
          <td style={tdLabel}>: تفصیلی ۲</td>
          <td style={tdInput}>
            {inp(data.tafsili2, (v) => update("tafsili2", v))}
          </td>
          <td style={tdLabel}>: جمع مقدار</td>
          <td style={{ ...tdInput, fontWeight: "bold" }}>
            {inp(data.jamMeqdar, (v) => update("jamMeqdar", v), "center")}
          </td>
          <td style={tdLabel}>جمع قیمت‌رسانی</td>
          <td style={{ ...tdInput, textAlign: "left" }}>
            {inp(
              data.jamQeymatReshandeh,
              (v) => update("jamQeymatReshandeh", v),
              "left",
            )}
          </td>
          <td style={tdUnit}>ریال</td>
          <td style={tdLabel}>جمع قیمت‌رسانی</td>
          <td style={{ ...tdInput, textAlign: "left" }}>
            {inp(
              data.jamQeymatReshandeh,
              (v) => update("jamQeymatReshandeh", v),
              "left",
            )}
          </td>
          <td style={tdUnit}>ریال</td>
        </tr>

        {/* ── Row 4 ── */}
        <tr>
          <td style={tdLabel}>: ویژگی ۴</td>
          <td style={tdInput}>
            {inp(data.vizhegi4, (v) => update("vizhegi4", v))}
          </td>
          <td style={tdLabel}>: تفصیلی ۳</td>
          <td style={tdInput}>
            {inp(data.tafsili3, (v) => update("tafsili3", v))}
          </td>
          <td style={tdLabel}>: جمع ارز</td>
          <td style={tdInput}>
            {inp(data.jamArz, (v) => update("jamArz", v), "center")}
          </td>
          <td style={tdLabel}>: جمع کسورات</td>
          <td style={{ ...tdInput, textAlign: "left" }}>
            {inp(data.jamKosorat, (v) => update("jamKosorat", v), "left")}
          </td>
          <td style={tdUnit}>ریال</td>
          <td style={tdLabel}>: جمع کسورات</td>
          <td style={{ ...tdInput, textAlign: "left" }}>
            {inp(data.jamKosorat, (v) => update("jamKosorat", v), "left")}
          </td>
          <td style={tdUnit}>ریال</td>
        </tr>

        {/* ── Row 5 ── */}
        <tr>
          <td style={{ ...tdLabel, borderBottom: "none" }} />
          <td style={{ ...tdInput, borderBottom: "none" }} />
          <td style={tdLabel}>: تفصیلی ۴</td>
          <td style={tdInput}>
            {inp(data.tafsili4, (v) => update("tafsili4", v))}
          </td>
          <td style={tdLabel}>جمع وزن (KG)</td>
          <td style={{ ...tdInput, fontWeight: "bold" }}>
            {inp(data.jamVazn, (v) => update("jamVazn", v), "center")}
          </td>
          <td style={tdLabel}>: قابل پرداخت</td>
          <td style={{ ...tdInput, textAlign: "left" }}>
            {inp(data.qabelPardakht, (v) => update("qabelPardakht", v), "left")}
          </td>
          <td style={tdUnit}>ریال</td>
          <td style={tdLabel}>: قابل پرداخت</td>
          <td style={{ ...tdInput, textAlign: "left" }}>
            {inp(data.qabelPardakht, (v) => update("qabelPardakht", v), "left")}
          </td>
          <td style={tdUnit}>ریال</td>
        </tr>

        {/* ── Row 6 ── */}
        <tr>
          <td style={{ ...tdLabel, borderBottom: "none" }} />
          <td style={{ ...tdInput, borderBottom: "none" }} />
          <td style={{ ...tdLabel, borderBottom: "none" }}>: حساب مرتبط</td>
          <td style={{ ...tdInput, borderBottom: "none" }}>
            {inp(data.hesabMarboot, (v) => update("hesabMarboot", v))}
          </td>
          <td style={tdLabel}>مالیات و عوارض VAT</td>
          <td style={{ ...tdInput, textAlign: "left" }}>
            {inp(
              data.maliyatVaAvaarez,
              (v) => update("maliyatVaAvaarez", v),
              "left",
            )}
          </td>
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

