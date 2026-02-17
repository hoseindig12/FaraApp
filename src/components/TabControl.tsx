import React from "react";

export type TabItem = {
  id: string;
  title: React.ReactNode;
  content: React.ReactNode;
};

export type TabControlProps = {
  tabs: TabItem[];
  activeId?: string;
  defaultActiveId?: string;
  onChange?: (id: string) => void;
  className?: string;
};

export const TabControl: React.FC<TabControlProps> = ({
  tabs,
  activeId,
  defaultActiveId,
  onChange,
  className,
}) => {
  const [internal, setInternal] = React.useState<string | undefined>(
    defaultActiveId ?? (tabs[0] && tabs[0].id),
  );
  const active = activeId ?? internal;

  const handleClick = (id: string) => {
    if (activeId === undefined) setInternal(id);
    onChange && onChange(id);
  };

  return (
    <div className={["ui-tabs", className || ""].join(" ")}>
      <div
        style={{
          display: "flex",
          gap: 8,
          borderBottom: "1px solid #eee",
          paddingBottom: 8,
        }}
      >
        {tabs.map((t) => (
          <button
            key={t.id}
            onClick={() => handleClick(t.id)}
            aria-selected={active === t.id}
            style={{
              background: "none",
              border: "none",
              padding: 8,
              cursor: "pointer",
              borderBottom:
                active === t.id ? "2px solid #1976d2" : "2px solid transparent",
            }}
          >
            {t.title}
          </button>
        ))}
      </div>
      <div style={{ marginTop: 12 }}>
        {tabs.map((t) => (
          <div
            key={t.id}
            style={{ display: active === t.id ? "block" : "none" }}
          >
            {t.content}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TabControl;
