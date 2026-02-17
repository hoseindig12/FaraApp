import { useState } from "react";
import { FaraActionBar } from "./components/bars";
import { FaraDataGrid, initialRows } from "./components/grid";
import { FaraGridHeaderRow } from "./components/grid";
import { FaraStatusBar } from "./components/bars";
import { FaraSummaryFooter } from "./components/summary";
import { FaraTabBar } from "./components/bars";
import { ToolbarForm } from "./components/toolbar";
import { ToolbarIcons } from "./components/toolbar";

const ReceiptPage = () => {
  const [, setActiveTab] = useState("tools");
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
