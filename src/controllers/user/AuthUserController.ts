import { Request, Response } from 'express'
import { AuthUserService } from '../../services/user/AuthUserService'

class AuthUserController {
    async handle(req: Request, res: Response) {
        const { email, password } = req.body;

        const createUserService = new AuthUserService();

        const auth = await createUserService.execute({
            email,
            password
        });

        return res.json(auth);
    }
}

export { AuthUserController }