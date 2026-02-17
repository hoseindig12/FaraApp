import React from "react";

export type IconButtonProps = {
  src?: string;
  icon?: React.ReactNode;
  label?: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  imgPosition?: "left" | "top";
  className?: string;
};

export const IconButton: React.FC<IconButtonProps> = ({
  src,
  icon,
  label,
  onClick,
  disabled,
  imgPosition = "left",
  className,
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={["ui-icon-button", className || ""].join(" ")}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
        padding: 8,
      }}
    >
      {imgPosition === "left" &&
        (src ? (
          <img src={src} alt="" style={{ width: 24, height: 24 }} />
        ) : (
          icon
        ))}
      {imgPosition === "top" ? (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {src ? (
            <img src={src} alt="" style={{ width: 32, height: 32 }} />
          ) : (
            icon
          )}
          {label && <div>{label}</div>}
        </div>
      ) : (
        label && <div>{label}</div>
      )}
    </button>
  );
};

export default IconButton;
