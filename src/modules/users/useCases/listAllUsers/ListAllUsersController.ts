import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(req: Request, res: Response): Response {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const { user_id }: any = req.headers;
    

    try {
      const result = this.listAllUsersUseCase.execute(user_id);
      return res.status(200).json(result);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }
}

export { ListAllUsersController };
