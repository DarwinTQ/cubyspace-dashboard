import { Battery, Gauge, Thermometer, Mountain } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface DataIndicatorProps {
  icon: LucideIcon;
  label: string;
  value: string;
}

const DataIndicator = ({ icon: Icon, label, value }: DataIndicatorProps) => {
  return (
    <div className="flex items-center gap-3 bg-sensor border-2 border-border rounded-md px-4 py-3">
      <Icon className="h-5 w-5 text-sensor-foreground shrink-0" />
      <span className="text-sm font-medium text-sensor-foreground">
        {label} <span className="font-bold">{value}</span>
      </span>
    </div>
  );
};

export default DataIndicator;

export const indicatorConfig = [
  { key: "battery", icon: Battery, label: "%Batería(V)", suffix: "%" },
  { key: "pressure", icon: Gauge, label: "Presión(Pa)", suffix: "Pa" },
  { key: "temperature", icon: Thermometer, label: "Tempera(C°)", suffix: "C°" },
  { key: "altitude", icon: Mountain, label: "Altura(m)", suffix: "" },
] as const;
