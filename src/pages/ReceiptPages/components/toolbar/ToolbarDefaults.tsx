import {
  IconInvoiceFactors,
  IconReadout,
  IconCancel,
  IconReturn,
  IconTruck,
  IconRiali,
  IconSerials,
  IconPricing,
  IconPayment,
  IconWarranty,
  IconDocLink,
} from "./ToolbarIconsSvg";
import type { ToolbarItem } from "./ToolbarIcons";

export const defaultItems: ToolbarItem[] = [
  { id: "warranty", label: "صدور کارت گارانتی", icon: <IconWarranty /> },
  { id: "payment", label: "پرداخت", icon: <IconPayment /> },
  { id: "pricing", label: "قیمت‌گذاری", icon: <IconPricing /> },
  {
    id: "serials",
    label: "سریال‌های حذف شده",
    icon: <IconSerials />,
    disabled: true,
  },
  {
    id: "doclink",
    label: "درج بین اسناد",
    icon: <IconDocLink />,
    active: true,
  },
  { id: "truck", label: "بارنامه و باسکول", icon: <IconTruck /> },
  { id: "riali", label: "ریالی نشده‌ها", icon: <IconRiali /> },
  { id: "return", label: "ارجاع", icon: <IconReturn /> },
  { id: "cancel", label: "ابطال / احیا", icon: <IconCancel /> },
  { id: "readout", label: "فراخوانی", icon: <IconReadout /> },
  { id: "invoice", label: "عوامل فاکتور", icon: <IconInvoiceFactors /> },
];

export default defaultItems;
