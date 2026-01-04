import { AppointmentForm } from "@/components/forms/AppointmentForm";

export default function AppointmentsPage({}) {
  const clientId = "some-client-uuid"; // Replace with actual client ID logic

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Book an Appointment</h1>
      <AppointmentForm clientId={clientId} />
    </div>
  );
}