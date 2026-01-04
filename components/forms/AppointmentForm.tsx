"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  AppointmentSchemaConstraints,
  AppointmentFormValues,
} from "@/schemas/appointment.schema";
import { z } from "zod";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectValue,
  SelectTrigger,
} from "@/components/ui/select";
import { toast } from "sonner";

export function AppointmentForm({ clientId }: { clientId: string }) {
  const [timeSlots, setTimeSlots] = useState<any[]>([]);
  const form = useForm<AppointmentFormValues>({
    resolver: zodResolver(AppointmentSchemaConstraints),
  });

  useEffect(() => {
    async function fetchTimeSlots() {
      const response = await fetch("/api/timeslots");
      const data = await response.json();
      setTimeSlots(data);
    }
  }, []);

  async function onSubmit(data: AppointmentFormValues) {
    try {
      const response = await fetch("/api/appointments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...data, clientId }),
      });

        if (!response.ok) {
            throw new Error("Failed to create appointment");
        }

      toast.success("Appointment created successfully");
      form.reset();

    } catch (error) {
      toast.error("Error creating appointment");
    }
    }

    return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <Select onValueChange={v => form.setValue("timeSlotId", v)}>
            <SelectTrigger className="w-full">
                <SelectValue placeholder="Select a time slot" />
            </SelectTrigger>
            <SelectContent>
                {timeSlots.map(slot => (
                    <SelectItem key={slot.id} value={slot.id}>
                        {new Date(slot.startTime).toLocaleString()} - {new Date(slot.endTime).toLocaleString()}
                    </SelectItem>
                ))}
            </SelectContent>
        </Select>
        <Button type="submit" disabled={!form.formState.isValid}>Book Appointment</Button>
    </form>
  );
}
