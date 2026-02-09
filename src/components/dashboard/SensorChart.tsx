import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

interface DataPoint {
  time: number;
  value: number;
}

interface SensorChartProps {
  data: DataPoint[];
  title: string;
}

const SensorChart = ({ data, title }: SensorChartProps) => {
  return (
    <div className="border-2 border-border rounded-md bg-card p-4 h-full flex flex-col">
      <h3 className="text-sm font-semibold text-foreground mb-3">{title}</h3>
      <div className="flex-1 min-h-[280px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(210 20% 88%)" />
            <XAxis
              dataKey="time"
              label={{ value: "t(s)", position: "insideBottomRight", offset: -5, fontSize: 12 }}
              tick={{ fontSize: 11 }}
              stroke="hsl(220 10% 45%)"
            />
            <YAxis
              domain={[0, 100]}
              label={{ value: "Valor", angle: -90, position: "insideLeft", fontSize: 12 }}
              tick={{ fontSize: 11 }}
              stroke="hsl(220 10% 45%)"
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "hsl(0 0% 100%)",
                border: "1px solid hsl(210 20% 82%)",
                borderRadius: "4px",
                fontSize: 12,
              }}
            />
            <Line
              type="monotone"
              dataKey="value"
              stroke="hsl(210 60% 45%)"
              strokeWidth={2}
              dot={{ r: 3, fill: "hsl(210 60% 45%)" }}
              activeDot={{ r: 5 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default SensorChart;
