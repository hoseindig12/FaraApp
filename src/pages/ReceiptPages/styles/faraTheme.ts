import { createTheme } from "@mui/material";

const dataGridComponents = {
  MuiDataGrid: {
    styleOverrides: {
      root: {
        direction: "rtl",
        border: "2px solid #7ba4d4",
        borderRadius: 3,
        fontSize: 11,
        fontFamily: "'Tahoma','Segoe UI',sans-serif",
        backgroundColor: "#fff",
        "& .MuiDataGrid-main": {
          direction: "rtl",
        },
        "& .MuiDataGrid-cell:focus, & .MuiDataGrid-cell:focus-within": {
          outline: "none",
        },
        "& .MuiDataGrid-columnHeader:focus, & .MuiDataGrid-columnHeader:focus-within":
          {
            outline: "none",
          },
      },
      columnHeaders: {
        background: "#6487bb !important",
        borderBottom: "2px solid #7ba4d4",
        minHeight: "24px !important",
        maxHeight: "24px !important",
      },
      columnHeader: {
        background: "transparent",
        borderRight: "1px solid #b8cce4",
        height: "24px !important",
        padding: "0 6px",
        "&:last-child": { borderRight: "none" },
        "&--sorted": {
          background: "#5577a3 !important",
        },
      },
      columnHeaderTitle: {
        fontSize: 11,
        fontFamily: "'Tahoma',sans-serif",
        fontWeight: "bold",
        color: "#ffffff",
        direction: "rtl",
        textAlign: "right",
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
      },
      columnSeparator: {
        display: "none",
      },
      sortIcon: {
        fontSize: 12,
        color: "#1a6fc4",
      },
      row: {
        minHeight: "22px !important",
        maxHeight: "22px !important",
        "&:nth-of-type(odd)": {
          backgroundColor: "#f7faff",
        },
        "&:nth-of-type(even)": {
          backgroundColor: "#ffffff",
        },
        "&:hover": {
          backgroundColor: "#dceeff !important",
        },
        "&.Mui-selected": {
          backgroundColor: "#b8d4f0 !important",
          "&:hover": {
            backgroundColor: "#a0c4e8 !important",
          },
        },
      },
      cell: {
        borderRight: "1px solid #d0e0f0",
        borderBottom: "1px solid #d0e0f0",
        padding: "0 6px",
        fontSize: 11,
        fontFamily: "'Tahoma',sans-serif",
        direction: "rtl",
        textAlign: "right",
        height: "22px !important",
        minHeight: "22px !important",
        maxHeight: "22px !important",
        lineHeight: "22px !important",
        display: "flex",
        alignItems: "center",
        color: "#1a1a1a",
        "&.MuiDataGrid-cell--editable:hover": {
          cursor: "text",
        },
        "&.MuiDataGrid-cell--editing": {
          backgroundColor: "#fffde7 !important",
          boxShadow: "inset 0 0 0 2px #1a6fc4",
          padding: "0 !important",
        },
      },
      editInputCell: {
        fontSize: 11,
        fontFamily: "'Tahoma',sans-serif",
        direction: "rtl",
        textAlign: "right",
        height: "22px",
        padding: "0 6px",
        "& input": {
          fontSize: 11,
          fontFamily: "'Tahoma',sans-serif",
          textAlign: "right",
          direction: "rtl",
          padding: "0 6px",
          height: "22px",
        },
      },
      footerContainer: {
        background: "linear-gradient(180deg,#eef4fc,#dce8f8)",
        borderTop: "1px solid #b8cce4",
        minHeight: 30,
        direction: "rtl",
      },
      virtualScroller: {
        "&::-webkit-scrollbar": {
          width: 14,
          height: 14,
        },
        "&::-webkit-scrollbar-track": {
          background: "#f0f4fa",
          border: "1px solid #b8cce4",
        },
        "&::-webkit-scrollbar-thumb": {
          background: "linear-gradient(180deg,#c8d9ef,#a0bdd8)",
          border: "1px solid #94b8d8",
          borderRadius: 2,
        },
        "&::-webkit-scrollbar-thumb:hover": {
          background: "linear-gradient(180deg,#b0cce8,#88aac8)",
        },
        "&::-webkit-scrollbar-corner": {
          background: "#f0f4fa",
        },
      },
      rowReorderCell: {
        direction: "rtl",
      },
    },
  },
} as any;

export const faraTheme = createTheme({
  direction: "rtl",
  typography: {
    fontFamily: "'Tahoma', 'Segoe UI', sans-serif",
    fontSize: 11,
  },
  components: dataGridComponents,
});
