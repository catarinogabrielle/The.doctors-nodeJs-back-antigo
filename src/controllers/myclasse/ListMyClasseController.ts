import { Request, Response } from 'express'
import { ListMyClasseService } from '../../services/myclasse/ListMyClasseService'

class ListMyClasseController {
    async handle(req: Request, res: Response) {
        const listMyClasseService = new ListMyClasseService();

        const myclasse = await listMyClasseService.execute();

        return res.json(myclasse);

    }
}

export { ListMyClasseController }