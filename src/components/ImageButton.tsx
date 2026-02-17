import React from "react";

export type ImageButtonProps = {
  src: string;
  alt?: string;
  label?: React.ReactNode;
  active?: boolean;
  onClick?: () => void;
  size?: "small" | "medium" | "large" | number;
  className?: string;
  disabled?: boolean;
};

export const ImageButton: React.FC<ImageButtonProps> = ({
  src,
  alt,
  label,
  active,
  onClick,
  size = "medium",
  className,
  disabled,
}) => {
  const pxSize =
    typeof size === "number"
      ? size
      : size === "small"
        ? 40
        : size === "large"
          ? 96
          : 64;

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-pressed={!!active}
      className={["ui-image-button", className || ""].join(" ")}
      style={{
        border: active ? "2px solid #1976d2" : "1px solid #ddd",
        padding: 8,
        background: "#fff",
        cursor: "pointer",
      }}
    >
      <img
        src={src}
        alt={alt || ""}
        style={{
          width: pxSize,
          height: pxSize,
          objectFit: "contain",
          display: "block",
          margin: "0 auto",
        }}
      />
      {label && (
        <div style={{ textAlign: "center", marginTop: 6 }}>{label}</div>
      )}
    </button>
  );
};

export default ImageButton;
