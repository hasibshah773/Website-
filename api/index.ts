import express, { type Request, type Response } from "express";
import { randomUUID } from "crypto";
import { z } from "zod";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

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

app.post("/api/appointments", async (req: Request, res: Response) => {
  try {
    const data = appointmentSchema.parse(req.body);
    const id = randomUUID();
    const appointment: Appointment = {
      id,
      ...data,
      message: data.message ?? null,
      createdAt: new Date(),
    };
    appointments.set(id, appointment);
    res.json(appointment);
  } catch (error) {
    if (error instanceof z.ZodError) {
      res.status(400).json({ message: "Invalid data", errors: error.errors });
    } else {
      res.status(500).json({ message: "Internal server error" });
    }
  }
});

app.get("/api/appointments", async (_req: Request, res: Response) => {
  try {
    const list = Array.from(appointments.values()).sort(
      (a, b) => b.createdAt.getTime() - a.createdAt.getTime()
    );
    res.json(list);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
});

export default app;
