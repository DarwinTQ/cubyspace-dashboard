import { useState } from "react";
import { Wifi } from "lucide-react";
import SensorChart from "@/components/dashboard/SensorChart";
import DataIndicator, { indicatorConfig } from "@/components/dashboard/DataIndicator";
import SensorFooter from "@/components/dashboard/SensorFooter";

const generateInitialData = () =>
  Array.from({ length: 20 }, (_, i) => ({
    time: i,
    value: Math.max(5, 90 - i * 4 + Math.random() * 8 - 4),
  }));

const Index = () => {
  const [chartData] = useState(generateInitialData);
  const [chartData2] = useState(generateInitialData);

  const [sensorValues] = useState({
    battery: 20,
    pressure: 20,
    temperature: 20,
    altitude: 25,
  });

  const [isOnline, setIsOnline] = useState(true);

  return (
    <div className="flex flex-col bg-background p-4 gap-4">

      {/* HEADER */}
      <nav className="flex flex-col gap-4">
        <div className="flex items-center justify-between gap-4">
          
          <div className="bg-[#f8d7da] border border-[#dc3545] rounded px-8 py-3 min-w-[200px] text-center">
            <span className="text-black font-medium">CubySpace - AQP</span>
          </div>

          <button
            onClick={() => setIsOnline(!isOnline)}
            className="flex-1 bg-[#f8d7da] border border-[#dc3545] rounded py-3 flex items-center justify-center gap-2 hover:bg-[#f1b9bc]"
          >
            <span className="text-black font-medium">
              Status: {isOnline ? "On" : "Off"}
            </span>
            <Wifi className="h-5 w-5 text-gray-700" />
          </button>

          <button className="bg-[#ff6600] border border-[#cc5200] rounded px-10 py-3 text-black font-medium hover:bg-[#e65c00]">
            Settings
          </button>
        </div>

        <div className="grid grid-cols-5 gap-2">
          {["Fase 1", "Fase 2 / liberado", "Fase 3 / Desacoplado", "Fase 4", "Fase 5"].map((fase) => (
            <div
              key={fase}
              className="bg-[#f8d7da] border border-[#dc3545] rounded py-2 text-center text-sm text-black"
            >
              {fase}
            </div>
          ))}
        </div>
      </nav>

      {/* MAIN (🔥 CORREGIDO AQUÍ) */}
      <main className="grid grid-cols-1 lg:grid-cols-5 gap-4 items-start">

        {/* Gráfico 1 */}
        <div className="lg:col-span-2 w-full h-[65vh]">
          <SensorChart
            data={chartData}
            title="Datos del Sensor en Tiempo Real (Ejemplo 1)"
          />
        </div>

        {/* Indicadores */}
        <div className="lg:col-span-1 flex flex-col gap-3 h-[230px] justify-center">
          {indicatorConfig.map((cfg) => (
            <DataIndicator
              key={cfg.key}
              icon={cfg.icon}
              label={cfg.label}
              value={`${sensorValues[cfg.key]}${cfg.suffix}`}
            />
          ))}
        </div>

        {/* Gráfico 2 */}    
        <div className="lg:col-span-2 w-full h-[65vh]">  {/*Comentario, use 'h-[65vh]' para la escabilidad del porcentaje de la pantalla, con el fin de que se vea proporcional a cualquier tipo de pantalla*/} 
          <SensorChart
            data={chartData2}
            title="Datos del Sensor en Tiempo Real (Ejemplo 2)"
          />
        </div>

      </main>

      {/* FOOTER */}
      <SensorFooter />

      {/* PREDICCIONES */}
      <section className="w-full">
        <div className="border-2 border-black rounded-sm overflow-hidden bg-white shadow-sm">

          <div className="border-b-2 border-black py-1 text-center">
            <span className="text-xs font-bold uppercase tracking-wider">
              Predicciones - Machine Learning or Deep Learning - In real time
            </span>
          </div>

          <div className="p-1">
            <button className="w-full bg-[#726189] hover:bg-[#5f5172] text-white py-3 px-4 rounded-sm">
              Registrar los datos del paracaídas, en un margen 60 a 80 metros
            </button>
          </div>

        </div>
      </section>

    </div>
  );
};

export default Index;

// este código es el componente principal de la página de inicio del dashboard de CubySpace. Contiene un header con el título y botones de estado y configuración, dos gráficos de sensores en tiempo real, indicadores de datos clave, un footer con información adicional y una sección para predicciones basadas en machine learning o deep learning. El diseño es responsivo y utiliza Tailwind CSS para estilos rápidos y consistentes.
