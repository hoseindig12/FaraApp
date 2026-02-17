import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import type { GridColDef, GridRowModel } from "@mui/x-data-grid";
import { Box, createTheme, ThemeProvider } from "@mui/material";

// ── Theme: RTL + Windows-XP-style ─────────────────────────────────────────────

const faraTheme = createTheme({
  direction: "rtl",
  typography: {
    fontFamily: "'Tahoma', 'Segoe UI', sans-serif",
    fontSize: 11,
  },
  components: {
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
          // Remove default focus outline
          "& .MuiDataGrid-cell:focus, & .MuiDataGrid-cell:focus-within": {
            outline: "none",
          },
          "& .MuiDataGrid-columnHeader:focus, & .MuiDataGrid-columnHeader:focus-within":
            {
              outline: "none",
            },
        },

        // ── Column Headers ───────────────────────────────────────────────────
        columnHeaders: {
          background:
            "linear-gradient(180deg,#dce8f8 0%,#c8d9ef 100%) !important",
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
            background: "linear-gradient(180deg,#c8dff5,#b4cfe8) !important",
          },
        },
        columnHeaderTitle: {
          fontSize: 11,
          fontFamily: "'Tahoma',sans-serif",
          fontWeight: "bold",
          color: "#1a1a1a",
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

        // ── Rows ─────────────────────────────────────────────────────────────
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

        // ── Cells ─────────────────────────────────────────────────────────────
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

        // ── Edit Input ────────────────────────────────────────────────────────
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

        // ── Footer / Pagination ───────────────────────────────────────────────
        footerContainer: {
          background: "linear-gradient(180deg,#eef4fc,#dce8f8)",
          borderTop: "1px solid #b8cce4",
          minHeight: 30,
          direction: "rtl",
        },

        // ── Scrollbar ─────────────────────────────────────────────────────────
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

        // ── Row number column ─────────────────────────────────────────────────
        rowReorderCell: {
          direction: "rtl",
        },
      },
    },
  },
});

// ── Row Type ──────────────────────────────────────────────────────────────────

export interface FaraGridRow {
  id: number;
  radif: number;
  kodKala: string;
  shomareFanni: string;
  vizhegi1: string;
  vizhegi2: string;
  vizhegi3: string;
  vizhegi4: string;
  namKala: string;
  namEnglisi: string;
  tahvilDahande: string;
  namTahvilDahande: string;
  meqdar: number | string;
  bahayVahed: string;
  mablaghKol: number | string;
}

// ── Sample Data ───────────────────────────────────────────────────────────────

const initialRows: FaraGridRow[] = [
  {
    id: 1,
    radif: 1,
    kodKala: "۲۰۰۱۰۰۱۱",
    shomareFanni: "۶۲۶۰۱۳۸۴۲۲۲۳۳",
    vizhegi1: "۱۰۲",
    vizhegi2: "۱۰۱",
    vizhegi3: "",
    vizhegi4: "",
    namKala: "آبمیوه آناناس ۲۴۰cc",
    namEnglisi: "pineapple 240 cc",
    tahvilDahande: "محصول - کارخانه",
    namTahvilDahande: "۳۰۰ل",
    meqdar: "۳٬۶۰۰",
    bahayVahed: "",
    mablaghKol: "۳٬۶۰۰",
  },
  {
    id: 2,
    radif: 2,
    kodKala: "۲۰۰۱۰۰۱۱",
    shomareFanni: "۶۲۶۰۱۳۸۴۲۲۲۳۳",
    vizhegi1: "۱۰۳",
    vizhegi2: "۱۰۱",
    vizhegi3: "",
    vizhegi4: "",
    namKala: "آبمیوه آناناس ۲۴۰cc",
    namEnglisi: "pineapple 240 cc",
    tahvilDahande: "محصول - کارخانه",
    namTahvilDahande: "۳۰۰ل",
    meqdar: "۳٬۶۰۰",
    bahayVahed: "",
    mablaghKol: "۳٬۶۰۰",
  },
  {
    id: 3,
    radif: 3,
    kodKala: "۲۰۰۱۰۰۱۴",
    shomareFanni: "۶۲۶۰۱۳۸۴۱۰۴۹",
    vizhegi1: "۱۰۳",
    vizhegi2: "۱۰۲",
    vizhegi3: "",
    vizhegi4: "",
    namKala: "آبمیوه انبه ۲۰۰cc",
    namEnglisi: "Mango 200 cc",
    tahvilDahande: "محصول - کارخانه",
    namTahvilDahande: "۳۰۰ل",
    meqdar: "۳٬۹۶۰",
    bahayVahed: "",
    mablaghKol: "۱٬۸۰۰",
  },
  {
    id: 4,
    radif: 4,
    kodKala: "۲۰۰۱۰۰۹۸",
    shomareFanni: "۶۲۶۰۱۳۸۴۲۰۱۶۱",
    vizhegi1: "۱۰۳",
    vizhegi2: "۱۰۱",
    vizhegi3: "",
    vizhegi4: "",
    namKala: "آبمیوه سیب ۲۰۰cc",
    namEnglisi: "apple 100 cc",
    tahvilDahande: "محصول - کارخانه",
    namTahvilDahande: "۳۰۰ل",
    meqdar: "۳۴۰",
    bahayVahed: "",
    mablaghKol: "۳۴۰",
  },
  {
    id: 5,
    radif: 5,
    kodKala: "۲۰۰۱۰۰۴۴",
    shomareFanni: "۶۲۶۰۱۳۸۴۷۰۳۱۹",
    vizhegi1: "۱۰۳",
    vizhegi2: "۱۰۱",
    vizhegi3: "",
    vizhegi4: "",
    namKala: "آبمیوه انگور ۱lit",
    namEnglisi: "grape 1000 cc",
    tahvilDahande: "محصول - کارخانه",
    namTahvilDahande: "۳۰۰ل",
    meqdar: "۳۶۰",
    bahayVahed: "",
    mablaghKol: "۳۶۰",
  },
  {
    id: 6,
    radif: 6,
    kodKala: "۲۰۰۱۰۰۸۴",
    shomareFanni: "۶۲۶۰۱۳۸۴۹۹۴۵۷",
    vizhegi1: "۱۰۴",
    vizhegi2: "۱۰۱",
    vizhegi3: "",
    vizhegi4: "",
    namKala: "آبمیوه پرتقال توسرخ ۱lit",
    namEnglisi: "Red orange 1000 cc t",
    tahvilDahande: "محصول - کارخانه",
    namTahvilDahande: "۳۰۰ل",
    meqdar: "۶۰۰",
    bahayVahed: "",
    mablaghKol: "۶۰۰",
  },
  {
    id: 7,
    radif: 7,
    kodKala: "۲۰۰۱۰۰۰",
    shomareFanni: "۶۲۶۰۱۳۸۴۷۰۳۸۹",
    vizhegi1: "۱۰۴",
    vizhegi2: "۱۰۱",
    vizhegi3: "",
    vizhegi4: "",
    namKala: "آبمیوه سیب ۱lit",
    namEnglisi: "apple 1000 cc",
    tahvilDahande: "محصول - کارخانه",
    namTahvilDahande: "۳۰۰ل",
    meqdar: "۳۴۰",
    bahayVahed: "",
    mablaghKol: "۳۴۰",
  },
  {
    id: 8,
    radif: 8,
    kodKala: "۲۰۰۱۰۰۴۱",
    shomareFanni: "۶۲۶۰۱۳۸۴۷۰۳۴۱",
    vizhegi1: "۱۰۴",
    vizhegi2: "۱۰۱",
    vizhegi3: "",
    vizhegi4: "",
    namKala: "آبمیوه سیب کیوی ۱lit",
    namEnglisi: "Mixed apple & kiwi 1 lit",
    tahvilDahande: "محصول - کارخانه",
    namTahvilDahande: "۳۰۰ل",
    meqdar: "۳۴۰",
    bahayVahed: "",
    mablaghKol: "۳۴۰",
  },
  {
    id: 9,
    radif: 9,
    kodKala: "۲۰۰۱۰۱۱۶",
    shomareFanni: "۶۲۶۰۱۳۸۴۱۰۹۲",
    vizhegi1: "۱۰۴",
    vizhegi2: "۱۰۱",
    vizhegi3: "",
    vizhegi4: "",
    namKala: "آبمیوه لیموناد نعناع ۱lit",
    namEnglisi: "lemonade 1000 cc lit",
    tahvilDahande: "محصول - کارخانه",
    namTahvilDahande: "۳۰۰ل",
    meqdar: "۳۴۰",
    bahayVahed: "",
    mablaghKol: "۳۴۰",
  },
];

// ── Column Definitions ────────────────────────────────────────────────────────

const buildColumns = (): GridColDef[] => [
  {
    field: "radif",
    headerName: "ردیف",
    width: 46,
    editable: false,
    align: "center",
    headerAlign: "center",
    sortable: false,
    renderCell: (p) => (
      <span style={{ fontSize: 11, color: "#555" }}>{p.value}</span>
    ),
  },
  {
    field: "kodKala",
    headerName: "کد کالا",
    width: 88,
    editable: true,
    align: "right",
    headerAlign: "right",
  },
  {
    field: "shomareFanni",
    headerName: "شماره فنی",
    width: 130,
    editable: true,
    align: "right",
    headerAlign: "right",
  },
  {
    field: "vizhegi1",
    headerName: "ویژگی ۱",
    width: 62,
    editable: true,
    align: "center",
    headerAlign: "center",
  },
  {
    field: "vizhegi2",
    headerName: "ویژگی ۲",
    width: 62,
    editable: true,
    align: "center",
    headerAlign: "center",
  },
  {
    field: "vizhegi3",
    headerName: "ویژگی ۳",
    width: 52,
    editable: true,
    align: "center",
    headerAlign: "center",
  },
  {
    field: "vizhegi4",
    headerName: "ویژگی ۴",
    width: 52,
    editable: true,
    align: "center",
    headerAlign: "center",
  },
  {
    field: "namKala",
    headerName: "نام کالا",
    width: 165,
    editable: true,
    align: "right",
    headerAlign: "right",
  },
  {
    field: "namEnglisi",
    headerName: "نام انگلیسی کالا",
    width: 165,
    editable: true,
    align: "left",
    headerAlign: "left",
    renderCell: (p) => (
      <span style={{ direction: "ltr", fontFamily: "'Tahoma',sans-serif" }}>
        {p.value}
      </span>
    ),
  },
  {
    field: "tahvilDahande",
    headerName: "نام تحویل دهنده",
    width: 130,
    editable: true,
    align: "right",
    headerAlign: "right",
  },
  {
    field: "namTahvilDahande",
    headerName: "تحویل دهنده",
    width: 68,
    editable: true,
    align: "center",
    headerAlign: "center",
  },
  {
    field: "meqdar",
    headerName: "مقدار",
    width: 72,
    editable: true,
    align: "left",
    headerAlign: "left",
    renderCell: (p) => (
      <span style={{ direction: "ltr", width: "100%", textAlign: "left" }}>
        {p.value}
      </span>
    ),
  },
  {
    field: "bahayVahed",
    headerName: "بهای واحد",
    width: 80,
    editable: true,
    align: "left",
    headerAlign: "left",
  },
  {
    field: "mablaghKol",
    headerName: "مبلغ کل",
    width: 80,
    editable: true,
    align: "left",
    headerAlign: "left",
    renderCell: (p) => (
      <span
        style={{
          direction: "ltr",
          width: "100%",
          textAlign: "left",
          fontWeight: "bold",
        }}
      >
        {p.value}
      </span>
    ),
  },
];

// ── Component ─────────────────────────────────────────────────────────────────

interface FaraDataGridProps {
  rows?: FaraGridRow[];
  onRowsChange?: (rows: FaraGridRow[]) => void;
  height?: number;
}

const FaraDataGrid: React.FC<FaraDataGridProps> = ({
  rows: externalRows,
  onRowsChange,
  height = 320,
}) => {
  const [internalRows, setInternalRows] = useState<FaraGridRow[]>(initialRows);
  const rows = externalRows ?? internalRows;

  const processRowUpdate = (newRow: GridRowModel): GridRowModel => {
    const updated = rows.map((r) =>
      r.id === newRow.id ? (newRow as FaraGridRow) : r,
    );
    if (!externalRows) setInternalRows(updated);
    onRowsChange?.(updated);
    return newRow;
  };

  const columns = buildColumns();

  return (
    <ThemeProvider theme={faraTheme}>
      <Box
        dir="rtl"
        sx={{
          width: "100%",
          height,
          "& .MuiDataGrid-root": {
            fontSize: 11,
          },
          // Alternating row colors
          "& .fara-row-odd": {
            backgroundColor: "#f4f8ff",
          },
          "& .fara-row-even": {
            backgroundColor: "#ffffff",
          },
        }}
      >
        <DataGrid
          rows={rows}
          columns={columns}
          editMode="cell"
          processRowUpdate={processRowUpdate}
          onProcessRowUpdateError={(err) => console.error(err)}
          rowHeight={22}
          columnHeaderHeight={24}
          disableColumnMenu
          showCellVerticalBorder
          showColumnVerticalBorder
          getRowClassName={(params) =>
            params.indexRelativeToCurrentPage % 2 === 0
              ? "fara-row-even"
              : "fara-row-odd"
          }
          sx={{
            // Header pinned first column (ردیف) slight bg
            "& .MuiDataGrid-columnHeader[data-field='radif']": {
              backgroundColor: "rgba(200,217,239,0.5)",
            },
            // Tight padding on all cells
            "& .MuiDataGrid-cell": {
              py: 0,
              lineHeight: "22px",
            },
            // No border on last row
            "& .MuiDataGrid-row:last-child .MuiDataGrid-cell": {
              borderBottom: "1px solid #d0e0f0",
            },
          }}
          localeText={{
            // Persian pagination text
            MuiTablePagination: {
              labelRowsPerPage: "ردیف در صفحه:",
              labelDisplayedRows: ({ from, to, count }) =>
                `${from}–${to} از ${count !== -1 ? count : `بیشتر از ${to}`}`,
            },
            footerRowSelected: (count) => `${count} ردیف انتخاب شده`,
            noRowsLabel: "داده‌ای موجود نیست",
            columnMenuSortAsc: "مرتب‌سازی صعودی",
            columnMenuSortDesc: "مرتب‌سازی نزولی",
            columnMenuFilter: "فیلتر",
            columnMenuHideColumn: "پنهان کردن",
            columnMenuManageColumns: "مدیریت ستون‌ها",
          }}
        />
      </Box>
    </ThemeProvider>
  );
};

export default FaraDataGrid;
