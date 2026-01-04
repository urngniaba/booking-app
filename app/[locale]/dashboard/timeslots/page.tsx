import TimeSlotForm from "@/components/forms/TimeSlotForm";

export default function TimeSlotsPage({ params }: { params: { locale: string } }) {
  const managerId = "123e4567-e89b-12d3-a456-426614174000"; // Example UUID
    return (
        <div className="p-8">
            <h1 className="text-2xl font-bold mb-4">Create Time Slot</h1>
            <TimeSlotForm managerId={managerId} />
        </div>
    );
}