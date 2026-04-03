import { RsvpService } from "../services/rsvpService.js";
export class RsvpController {
    static async create(req, res) {
        try {
            const newRsvp = await RsvpService.createRsvp(req.body);
            res.status(201).json({ success: true, data: newRsvp });
        }
        catch (error) {
            // Return a 400 Bad Request if validation from the service fails
            res.status(400).json({ success: false, error: error.message });
        }
    }
    static async getAll(req, res) {
        try {
            const rsvps = await RsvpService.getAllRsvps();
            res.status(200).json({ success: true, data: rsvps });
        }
        catch (error) {
            console.error(error);
            res.status(500).json({ success: false, error: "Internal Server Error" });
        }
    }
}
