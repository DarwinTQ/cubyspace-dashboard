const sensors = [
  "Sensor Geomagnético",
  "Radiación UV",
  "Humedad 20g/m³",
  "Contaminación",
  "Acelerómetro",
  "Giroscopio",
];

const SensorFooter = () => {
  return (
    <div className="border-t-2 border-border bg-card px-4 py-3">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
        {sensors.map((sensor) => (
          <button
            key={sensor}
            className="bg-sensor text-sensor-foreground text-xs font-medium border-2 border-border rounded-md px-3 py-2.5 text-center hover:opacity-80 transition-opacity"
          >
            {sensor}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SensorFooter;
