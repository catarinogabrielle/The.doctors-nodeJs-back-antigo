import { Request, Response } from 'express'
import { ListClasseService } from '../../services/classe/ListClasseService'

class ListClasseController {
    async handle(req: Request, res: Response) {
        const listClasseService = new ListClasseService();

        const classe = await listClasseService.execute();

        return res.json(classe);

    }
}

export { ListClasseController }