import prisma from "../lib/prisma";

export interface Rsvp {
  id?: number;
  fullname: string;
  message: string;
  attendance: "Hadir" | "Tidak Hadir" | "Tentative";
}

export const RsvpModel = {
  async create(data: Rsvp): Promise<number> {
    const newRsvp = await prisma.rsvp_message.create({
      data: {
        fullname: data.fullname,
        message: data.message,
        attendance: data.attendance,
      },
    });
    return newRsvp.id;
  },

  async findAll(): Promise<Rsvp[]> {
    const rows = await prisma.rsvp_message.findMany({
      orderBy: {
        id: "desc",
      },
    });
    return rows as Rsvp[];
  },
};
