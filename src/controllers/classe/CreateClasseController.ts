import { Request, Response } from 'express'
import { CreateClasseService } from '../../services/classe/CreateClasseService'

class CreateClasseController {
    async handle(req: Request, res: Response) {
        const { title, description, myclasse_id } = req.body;

        const createMyClasseService = new CreateClasseService();

        if (!req.files) {
            throw new Error("error upload file")
        } else {

            const filenames = req.files! as Array<Express.Multer.File>
            const material = filenames.map(file => file.filename)

            const classe = await createMyClasseService.execute({
                material,
                description,
                myclasse_id,
                title,
            });

            return res.json(classe);

        }
    }
}

export { CreateClasseController }