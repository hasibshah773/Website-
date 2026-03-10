import { NextRequest, NextResponse } from "next/server";
import { randomUUID } from "crypto";
import { z } from "zod";

interface Appointment {
  id: string;
  name: string;
  phone: string;
  service: string;
  date: string;
  message: string | null;
  createdAt: Date;
}

const appointmentSchema = z.object({
  name: z.string().min(1),
  phone: z.string().min(1),
  service: z.string().min(1),
  date: z.string().min(1),
  message: z.string().optional(),
});

const appointments = new Map<string, Appointment>();

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const data = appointmentSchema.parse(body);
    const id = randomUUID();
    const appointment: Appointment = {
      id,
      ...data,
      message: data.message ?? null,
      createdAt: new Date(),
    };
    appointments.set(id, appointment);
    return NextResponse.json(appointment);
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { message: "Invalid data", errors: error.errors },
        { status: 400 }
      );
    }
    return NextResponse.json({ message: "Internal server error" }, { status: 500 });
  }
}

export async function GET() {
  const list = Array.from(appointments.values()).sort(
    (a, b) => b.createdAt.getTime() - a.createdAt.getTime()
  );
  return NextResponse.json(list);
}
