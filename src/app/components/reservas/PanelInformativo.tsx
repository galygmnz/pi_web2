"use client";

interface CanchaSimple {
  id: number;
  nombre: string;
  ubicacion?: string;
  horario?: string;
}

interface PanelInformativoProps {
  canchaSeleccionada?: CanchaSimple | null;
  fecha?: string;
  horaInicio?: string;
  horaFin?: string;
}

export default function PanelInformativo({ canchaSeleccionada, fecha, horaInicio, horaFin }: PanelInformativoProps) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 space-y-6">
      <div>
        <h3 className="text-xl font-semibold mb-3 text-gray-800">Resumen de Reserva</h3>
        <div className="bg-blue-50 rounded-xl p-4 space-y-2">
          <p className="text-gray-700"><span className="font-medium">Cancha:</span> {canchaSeleccionada?.nombre || "No seleccionada"}</p>
          {canchaSeleccionada?.ubicacion && (
            <p className="text-gray-700"><span className="font-medium">Ubicación:</span> {canchaSeleccionada.ubicacion}</p>
          )}
          <p className="text-gray-700"><span className="font-medium">Fecha:</span> {fecha || "No seleccionada"}</p>
          <p className="text-gray-700"><span className="font-medium">Horario:</span> {horaInicio && horaFin ? `${horaInicio} - ${horaFin}` : "No seleccionado"}</p>
        </div>
      </div>


      <div>
        <h3 className="text-xl font-semibold mb-3 text-gray-800">Reglas</h3>
        <ul className="list-disc list-inside text-gray-600 space-y-2">
          <li>Llegar 10-15 minutos antes.</li>
          <li>Uso de calzado deportivo obligatorio.</li>
          <li>Cancelaciones con 24 horas de anticipación.</li>
        </ul>
      </div>
    </div>
  );
}
