import { Request, Response } from "express";
import { CreateUserUseCase } from "./CreateUserUseCase";

class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) {}

  handle(req: Request, res: Response): Response {
    const { name, email } = req.body;

    try {
      const result = this.createUserUseCase.execute({ name, email });

      return res.status(201).json(result);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }
}

export { CreateUserController };
