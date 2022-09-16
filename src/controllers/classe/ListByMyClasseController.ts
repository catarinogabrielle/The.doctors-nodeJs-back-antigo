import { Request, Response } from 'express'
import { ListByMyClasseService } from '../../services/classe/ListByMyClasseService'

class ListByMyClasseController {
    async handle(req: Request, res: Response) {
        const myclasse_id = req.query.myclasse_id as string;

        const listByMyClasseService = new ListByMyClasseService();

        const classe = await listByMyClasseService.execute({
            myclasse_id
        });

        return res.json(classe);

    }
}

export { ListByMyClasseController }