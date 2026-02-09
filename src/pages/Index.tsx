import { useState } from "react";
import { Menu, Wifi, Home, Settings } from "lucide-react";
import SensorChart from "@/components/dashboard/SensorChart";
import DataIndicator, { indicatorConfig } from "@/components/dashboard/DataIndicator";
import SensorFooter from "@/components/dashboard/SensorFooter";

// Datos iniciales de ejemplo — tendencia descendente
const generateInitialData = () =>
  Array.from({ length: 20 }, (_, i) => ({
    time: i,
    value: Math.max(5, 90 - i * 4 + Math.random() * 8 - 4),
  }));

const Index = () => {
  // === Estados para datos en tiempo real ===
  // TODO: Conectar via WebSocket a FastAPI para actualizar estos estados
  // Ejemplo: useEffect(() => { const ws = new WebSocket('ws://...'); ws.onmessage = ... }, [])
  const [chartData, setChartData] = useState(generateInitialData);
  const [sensorValues, setSensorValues] = useState({
    battery: 20,
    pressure: 20,
    temperature: 20,
    altitude: 25,
  });
  const [isOnline, setIsOnline] = useState(true);

  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* Header */}
      <header className="bg-header-bg border-b-2 border-border py-3 text-center">
        <h1 className="text-lg font-bold tracking-wide text-foreground">Dashboard</h1>
      </header>

      {/* Nav Bar */}
      <nav className="flex items-center justify-between border-b-2 border-border bg-card px-4 py-2">
        <div className="flex items-center gap-2">
          <Menu className="h-5 w-5 text-foreground" />
          <span className="text-sm font-semibold text-foreground">CubySpace - AQP</span>
        </div>
        <div className="flex items-center gap-2">
          <button className="bg-nav-accent text-nav-accent-foreground text-xs font-medium rounded-md px-3 py-1.5 flex items-center gap-1 hover:opacity-80 transition-opacity">
            <Home className="h-3.5 w-3.5" /> Home
          </button>
          <button className="bg-nav-accent text-nav-accent-foreground text-xs font-medium rounded-md px-3 py-1.5 flex items-center gap-1 hover:opacity-80 transition-opacity">
            <Settings className="h-3.5 w-3.5" /> Settings
          </button>
          <button
            className="bg-nav-accent text-nav-accent-foreground text-xs font-medium rounded-md px-3 py-1.5 flex items-center gap-1.5 hover:opacity-80 transition-opacity"
            onClick={() => setIsOnline((v) => !v)}
          >
            <Wifi className="h-3.5 w-3.5" />
            Status: {isOnline ? "On" : "Off"}
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1 grid grid-cols-1 lg:grid-cols-3 gap-4 p-4">
        {/* Chart — ocupa 2/3 */}
        <div className="lg:col-span-2">
          <SensorChart data={chartData} title="Datos del Sensor en Tiempo Real (Ejemplo)" />
        </div>

        {/* Data Indicators — ocupa 1/3 */}
        <div className="flex flex-col gap-3">
          {indicatorConfig.map((cfg) => (
            <DataIndicator
              key={cfg.key}
              icon={cfg.icon}
              label={cfg.label}
              value={`${sensorValues[cfg.key]}${cfg.suffix}`}
            />
          ))}
        </div>
      </main>

      {/* Footer */}
      <SensorFooter />
    </div>
  );
};

export default Index;
