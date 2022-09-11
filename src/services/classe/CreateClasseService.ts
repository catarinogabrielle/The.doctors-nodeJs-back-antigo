import prismaClient from "../../prisma"

interface ClasseRequest {
    material: string;
    title: string;
    description: string;
    myclasse_id: string;
}

class CreateClasseService {
    async execute({ material, description, myclasse_id, title }: ClasseRequest) {

        // verificar se ele colocou um titulo
        if (description === '') {
            throw new Error("Description invalid");
        }

        const classe = await prismaClient.classe.create({
            data: {
                material: material,
                description: description,
                myclasse_id: myclasse_id,
                title: title,
            },
            select: {
                material: true,
                description: true,
                myclasse_id: true,
                title: true,
            }
        })

        return classe;
    }
}

export { CreateClasseService }