import prisma from "../lib/prisma.js";
export const RsvpModel = {
    async create(data) {
        const newRsvp = await prisma.rsvp_message.create({
            data: {
                fullname: data.fullname,
                message: data.message,
                attendance: data.attendance,
            },
        });
        return newRsvp.id;
    },
    async findAll() {
        const rows = await prisma.rsvp_message.findMany({
            orderBy: {
                id: "desc",
            },
        });
        return rows;
    },
};
