// components/forms/TimeSlotForm.tsx
"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  TimeSlotSchemaConstraints,
  TimeSlotFormValues,
} from "@/schemas/timeslot.schema";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function TimeSlotForm({ managerId }: { managerId: string }) {
  const form = useForm<TimeSlotFormValues>({
    resolver: zodResolver(TimeSlotSchemaConstraints),
    mode: "onChange",
    defaultValues: {
      managerId,
    },
  });

  async function onSubmit(data: TimeSlotFormValues) {
    await fetch("/api/timeslots", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        startTime: new Date(data.startTime), // ✅ conversion ici
        endTime: new Date(data.endTime),     // ✅ conversion ici
        managerId: data.managerId,
      }),
    });
  }

  return (
    <form
      onSubmit={form.handleSubmit(onSubmit)}
      className="space-y-4"
    >
      <Input type="hidden" {...form.register("managerId")} />

      <Input
        type="datetime-local"
        {...form.register("startTime")}
      />

      <Input
        type="datetime-local"
        {...form.register("endTime")}
      />

      <Button disabled={!form.formState.isValid}>
        Create Time Slot
      </Button>
    </form>
  );
}
