import prisma from "../lib/prisma.js";

export interface Rsvp {
  id?: number;
  fullname: string;
  message: string;
  attendance: "Hadir" | "Tidak Hadir" | "Tentative";
  wedding_id?: number;
}

export const RsvpModel = {
  async create(data: Rsvp, id: number): Promise<number> {
    const newRsvp = await prisma.rsvp_message.create({
      data: {
        fullname: data.fullname,
        message: data.message,
        attendance: data.attendance,
        wedding_id: id,
      },
    });
    return newRsvp.id;
  },

  async findAll(weddingId: number): Promise<Rsvp[]> {
    const rows = await prisma.rsvp_message.findMany({
      where: {
        wedding_id: weddingId,
      },
      orderBy: {
        id: "desc",
      },
    });
    return rows as Rsvp[];
  },

  async getSomeData(weddingId: number): Promise<Rsvp[]> {
    const rows = await prisma.rsvp_message.findMany({
      take: 10,
      where: {
        wedding_id: weddingId,
      },
      orderBy: {
        id: "desc",
      },
    });
    return rows as Rsvp[];
  },
};
