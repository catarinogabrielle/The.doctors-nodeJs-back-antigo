import { Request, Response } from 'express'
import { CreateMyClasseService } from '../../services/myclasse/CreateMyClasseService'

class CreateMyClasseController {
    async handle(req: Request, res: Response) {
        const { title, teachername, teacherinfo, teacherwork, description, time } = req.body;

        const createMyClasseService = new CreateMyClasseService();

        if (!req.files) {
            throw new Error("error upload file")
        } else {

            const files = req.files as { [fieldname: string]: Express.Multer.File[] };
            const image = files['image'][0].filename;
            const teacherphoto = files['teacherphoto'][0].filename;

            const myclasse = await createMyClasseService.execute({
                title,
                image,
                teachername,
                teacherphoto,
                teacherwork,
                teacherinfo,
                description,
                time,
            });

            return res.json(myclasse);
        }
    }
}

export { CreateMyClasseController }