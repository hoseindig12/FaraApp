import React, { useCallback, useEffect, useMemo, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import type { GridRowModel } from "@mui/x-data-grid";
import { Box } from "@mui/material";
import { buildColumns } from "./faraColumns";
import { initialRows, type FaraGridRow } from "./faraGridTypes";

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
  const [isLoading, setIsLoading] = useState(false);
  const rows = externalRows ?? internalRows;
  const showFooter = config?.showFooter ?? true;
  const loading = config?.loading ?? false;
  const loadingDelayMs = config?.loadingDelayMs ?? 1000;

  useEffect(() => {
    if (externalRows) setInternalRows(externalRows);
  }, [externalRows]);

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
    <Box
      dir="rtl"
      sx={{
        width: "100%",
        height,
        "& .MuiDataGrid-root": {
          fontSize: 11,
        },
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
          "& .MuiDataGrid-columnHeader[data-field='radif']": {
            backgroundColor: "rgba(200,217,239,0.5)",
          },
          "& .MuiDataGrid-cell": {
            py: 0,
            lineHeight: "22px",
          },
          "& .MuiDataGrid-row:last-child .MuiDataGrid-cell": {
            borderBottom: "1px solid #d0e0f0",
          },
        }}
      />
    </Box>
  );
};

export default React.memo(FaraDataGrid);
