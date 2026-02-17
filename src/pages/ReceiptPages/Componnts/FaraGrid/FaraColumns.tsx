import React from "react";
import type { GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
import type { FaraGridRow } from "./FaraGridTypes";

export const buildColumns = (): GridColDef[] => [
  {
    field: "radif",
    headerName: "ردیف",
    width: 46,
    editable: false,
    align: "center",
    headerAlign: "center",
    sortable: false,
    renderCell: (p: GridRenderCellParams<any, FaraGridRow>) => (
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
    renderCell: (p: GridRenderCellParams<any, FaraGridRow>) => (
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
    renderCell: (p: GridRenderCellParams<any, FaraGridRow>) => (
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
    renderCell: (p: GridRenderCellParams<any, FaraGridRow>) => (
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

export default buildColumns;
