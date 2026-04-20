import { Request, Response } from "express";
import { RsvpServiceSecond } from "../services/rsvpServiceSecond.js";

export class RsvpControllerSecond {
  static async create(req: Request, res: Response) {
    const weddingId = Number(req.params.id);
    console.log(req.body);
    try {
      const newRsvp = await RsvpServiceSecond.createRsvp(req.body, weddingId);
      res.status(201).json({ success: true, data: newRsvp });
    } catch (error: any) {
      // Return a 400 Bad Request if validation from the service fails
      res.status(400).json({ success: false, error: error.message });
    }
  }

  static async getAll(req: Request, res: Response) {
    const weddingId = Number(req.params.id);
    try {
      const rsvps = await RsvpServiceSecond.getAllRsvps(weddingId);
      res.status(200).json({ success: true, data: rsvps });
    } catch (error: any) {
      console.error(error);
      res.status(500).json({ success: false, error: "Internal Server Error" });
    }
  }

  static async getSomeData(req: Request, res: Response) {
    const weddingId = Number(req.params.id);
    try {
      const rsvps = await RsvpServiceSecond.getSomeData(weddingId);
      res.status(200).json({ success: true, data: rsvps });
    } catch (error: any) {
      console.error(error);
      res.status(500).json({ success: false, error: "Internal Server Error" });
    }
  }
}
