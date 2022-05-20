import { Request, Response } from "express";
import { ShowUserProfileUseCase } from "./ShowUserProfileUseCase";

class ShowUserProfileController {
  constructor(private showUserProfileUseCase: ShowUserProfileUseCase) {}

  handle(req: Request, res: Response): Response {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const { user_id }: any = req.params;

    try {
      const result = this.showUserProfileUseCase.execute(user_id);
      return res.status(200).json(result);
    } catch (error) {
      return res.status(404).json({ error: error.message });
    }
  }
}

export { ShowUserProfileController };
