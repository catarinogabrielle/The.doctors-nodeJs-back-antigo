import { Request, Response } from 'express'
import { CreateMyClasseService } from '../../services/myclasse/CreateMyClasseService'

class CreateMyClasseController {
    async handle(req: Request, res: Response) {
        const { title, name, info, work } = req.body;

        const createMyClasseService = new CreateMyClasseService();

        if (!req.files) {
            throw new Error("error upload file")
        } else {

            console.log(req.files);

            const myclasse = await createMyClasseService.execute({
                title,
                image: '',
                name,
                info,
                teacher: '',
                work
            });

            return res.json(myclasse);
        }
    }
}

export { CreateMyClasseController }