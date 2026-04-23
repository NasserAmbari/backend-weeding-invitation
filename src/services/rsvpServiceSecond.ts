import { RsvpModel, Rsvp } from "../models/rsvpModelSecond.js";
import { sendTelegramMessage } from "../lib/telegramSecond.js";

export class RsvpServiceSecond {
  static async createRsvp(data: Rsvp, weddingId: number) {
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
          timeZone: "Asia/Makassar",
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
        })}\n`,
    );

    const id = await RsvpModel.create(data, weddingId);

    return { id, ...data };
  }

  static async getAllRsvps(weddingId: number): Promise<Rsvp[]> {
    return await RsvpModel.findAll(weddingId);
  }

  static async getSomeData(weddingId: number) {
    return await RsvpModel.getSomeData(weddingId);
  }
}
