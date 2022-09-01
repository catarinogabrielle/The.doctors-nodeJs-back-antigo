import { Request, Response } from 'express'
import { CreateClasseService } from '../../services/classe/CreateClasseService'

class CreateClasseController {
    async handle(req: Request, res: Response) {
        const { material, description, myclasse_id } = req.body;

        const createMyClasseService = new CreateClasseService();

        const classe = await createMyClasseService.execute({
            material,
            description,
            myclasse_id,
        });

        return res.json(classe);
    }
}

export { CreateClasseController }