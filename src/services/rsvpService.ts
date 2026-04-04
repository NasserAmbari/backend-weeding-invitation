import { RsvpModel, Rsvp } from "../models/rsvpModel.js";
import { sendTelegramMessage } from "../lib/telegram.js";

export class RsvpService {
  static async createRsvp(data: Rsvp) {
    if (!data.fullname || !data.message || !data.attendance) {
      throw new Error(
        "All fields (fullname, message, attendance) are required.",
      );
    }

    const validAttendances = ["Hadir", "Tidak Hadir", "Tentative"];
    if (!validAttendances.includes(data.attendance)) {
      throw new Error(
        "Invalid attendance value. Must be 'Hadir', 'Tidak Hadir', or 'Tentative'.",
      );
    }

    const emoji =
      data.attendance === "Hadir"
        ? "✅"
        : data.attendance === "Tidak Hadir"
          ? "❌"
          : "🤔";

    await sendTelegramMessage(
      `RSVP Baru!\n\n` +
        `👤 Nama: ${data.fullname}\n` +
        `📋 Kehadiran: ${emoji} ${data.attendance}\n` +
        `💬 Pesan: ${data.message}\n` +
        `📅 Tanggal: ${new Date().toLocaleString("id-ID", {
          dateStyle: "full",
          timeStyle: "medium",
        })}\n`,
    );

    const id = await RsvpModel.create(data);

    return { id, ...data };
  }

  static async getAllRsvps() {
    return await RsvpModel.findAll();
  }
}
