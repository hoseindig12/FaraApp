import FaraActionBar from "./Componnts/Faraactionbar";
import FaraDataGrid from "./Componnts/Faradatagrid";
import FaraGridHeaderRow from "./Componnts/FaraGridHeaderRow";
import FaraStatusBar from "./Componnts/Farastatusbar";
import FaraSummaryFooter from "./Componnts/Farasummaryfooter";
import ToolbarForm from "./Componnts/ToolbarForm";
import ToolbarIcons from "./Componnts/ToolbarIcons";

const ReceiptPage = () => {
  return (
    <>
      {/* <h1>ReceiptPage</h1> */}
      <ToolbarIcons />
      <ToolbarForm />
      <FaraGridHeaderRow />
      <FaraDataGrid />
      <FaraSummaryFooter />
      <FaraActionBar />
      <FaraStatusBar />
    </>
  );
};

export default ReceiptPage;
