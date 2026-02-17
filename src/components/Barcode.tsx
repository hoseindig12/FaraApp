import React, { useEffect, useRef } from "react";
import JsBarcode from "jsbarcode";

export type BarcodeProps = {
  value: string;
  format?: string;
  width?: number;
  height?: number;
  displayValue?: boolean;
  className?: string;
};

export const Barcode: React.FC<BarcodeProps> = ({
  value,
  format = "CODE128",
  width = 2,
  height = 60,
  displayValue = true,
  className,
}) => {
  const svgRef = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    if (!svgRef.current) return;
    try {
      JsBarcode(svgRef.current, value || "", {
        format,
        width,
        height,
        displayValue,
      });
    } catch {
      // swallow; if library not present or invalid value
    }
  }, [value, format, width, height, displayValue]);

  return <svg ref={svgRef} className={className} />;
};

export default Barcode;
