import { Request, Response } from "express";
import jwt from "jsonwebtoken";

export const AuthController = {
  login(req: Request, res: Response) {
    const { username, password } = req.body;

    if (
      username === process.env.ADMIN_USERNAME &&
      password === process.env.ADMIN_PASSWORD
    ) {
      res.status(401).json({ message: "Username atau password salah" });
      return;
    }

    const token = jwt.sign({ username }, process.env.JWT_SECRET!, {
      expiresIn: "7d",
    });

    res.json({ token });
  },
};
