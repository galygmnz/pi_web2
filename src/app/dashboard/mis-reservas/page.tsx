export default function MisReservasPage() {
  const reservas = [
    { id: 1, nombre: "Torneo de fútbol", fecha: "2025-10-28", estado: "Aprobada" },
    { id: 2, nombre: "Entrenamiento libre", fecha: "2025-11-02", estado: "Pendiente" },
  ];

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold text-gray-800">Mis reservas</h1>
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-2 border-b">Evento</th>
            <th className="p-2 border-b">Fecha</th>
            <th className="p-2 border-b">Estado</th>
          </tr>
        </thead>
        <tbody>
          {reservas.map((reserva) => (
            <tr key={reserva.id}>
              <td className="p-2 border-b">{reserva.nombre}</td>
              <td className="p-2 border-b">{reserva.fecha}</td>
              <td className="p-2 border-b">{reserva.estado}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
