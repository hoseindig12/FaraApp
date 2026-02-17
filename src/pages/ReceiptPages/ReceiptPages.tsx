import { useState } from "react";
import FaraActionBar from "./Componnts/Faraactionbar";
import FaraDataGrid from "./Componnts/Faradatagrid";
import FaraGridHeaderRow from "./Componnts/FaraGridHeaderRow";
import FaraStatusBar from "./Componnts/Farastatusbar";
import FaraSummaryFooter from "./Componnts/Farasummaryfooter";
import FaraTabBar from "./Componnts/FaraTabBar";
import ToolbarForm from "./Componnts/ToolbarForm";
import ToolbarIcons from "./Componnts/ToolbarIcons";
import { initialRows } from "./Componnts/faraGridTypes";

const ReceiptPage = () => {
  const [activeTab, setActiveTab] = useState("tools");
  return (
    <>
      {/* <h1>ReceiptPage</h1> */}
      <FaraTabBar
        variant="top"
        tabs={[
          { id: "tools", label: "ابزارهای عمومی" },
          { id: "ops", label: "ابزارهای عملیاتی" },
          { id: "forms", label: "فرم‌های مرتبط" },
        ]}
        onChange={(id) => setActiveTab(id)}
      />
      <ToolbarIcons />

      <ToolbarForm />
      <FaraGridHeaderRow />
      <FaraDataGrid
        rows={initialRows}
        config={{
          showFooter: false,
          loading: true,
          loadingDelayMs: 1000,
        }}
      />
      <FaraSummaryFooter />
      <FaraTabBar
        variant="bottom"
        tabs={[
          { id: "record", label: "رکورد جاری" },
          { id: "list", label: "نمایش لیست" },
        ]}
        onChange={(id) => setActiveTab(id)}
      />
      <FaraActionBar />
      <FaraStatusBar />
    </>
  );
};

export default ReceiptPage;
