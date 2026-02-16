import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import type { GridColDef, GridRowsProp } from "@mui/x-data-grid";

const columns: GridColDef[] = [
  { field: "id", headerName: "شناسه", width: 90 },
  { field: "firstName", headerName: "نام", flex: 1 },
  { field: "lastName", headerName: "نام خانوادگی", flex: 1 },
];

const rows: GridRowsProp = [
  { id: 1, firstName: "علی", lastName: "رضایی" },
  { id: 2, firstName: "سارا", lastName: "احمدی" },
];

export default function RtlGrid() {
  return (
    <Box sx={{ height: 400 }}>
      <DataGrid rows={rows} columns={columns} disableColumnMenu />
    </Box>
  );
}
