import React, { useCallback, useEffect, useMemo, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import type { GridRowModel } from "@mui/x-data-grid";
import { Box, ThemeProvider } from "@mui/material";
import {
  FaraTheme,
  buildColumns,
  initialRows,
  type FaraGridRow,
} from "./FaraGrid";

// ── Theme: RTL + Windows-XP-style ─────────────────────────────────────────────

// Theme, types and columns moved to separate files:
// - faraTheme.ts
// - faraGridTypes.ts
// - faraColumns.ts

// Types and sample data moved to `faraGridTypes.ts`

// Columns moved to `faraColumns.ts`

// ── Component ─────────────────────────────────────────────────────────────────

interface FaraDataGridProps {
  rows?: FaraGridRow[];
  onRowsChange?: (rows: FaraGridRow[]) => void;
  height?: number;
  config?: {
    showFooter?: boolean;
    loading?: boolean;
    loadingDelayMs?: number;
  };
}

const FaraDataGrid: React.FC<FaraDataGridProps> = ({
  rows: externalRows,
  onRowsChange,
  height = 320,
  config,
}) => {
  const [internalRows, setInternalRows] = useState<FaraGridRow[]>(
    externalRows ?? initialRows,
  );
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const rows = externalRows ?? internalRows;
  const showFooter = config?.showFooter ?? true;
  const loading = config?.loading ?? false;
  const loadingDelayMs = config?.loadingDelayMs ?? 1000;

  // Keep internal rows in sync if parent provides rows.
  useEffect(() => {
    if (externalRows) setInternalRows(externalRows);
  }, [externalRows]);

  // Show loading immediately, then stop it after a short delay.
  useEffect(() => {
    if (!loading) {
      setIsLoading(false);
      return;
    }

    setIsLoading(true);
    const timerId = window.setTimeout(() => {
      setIsLoading(false);
    }, loadingDelayMs);

    return () => {
      window.clearTimeout(timerId);
    };
  }, [loading, loadingDelayMs]);

  const processRowUpdate = useCallback(
    (newRow: GridRowModel): GridRowModel => {
      const updated = rows.map((r) =>
        r.id === newRow.id ? (newRow as FaraGridRow) : r,
      );
      if (!externalRows) setInternalRows(updated);
      onRowsChange?.(updated);
      return newRow;
    },
    [rows, externalRows, onRowsChange],
  );

  const columns = useMemo(() => buildColumns(), []);

  return (
    <ThemeProvider theme={FaraTheme}>
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
          loading={isLoading}
          hideFooter={!showFooter}
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

export default React.memo(FaraDataGrid);
