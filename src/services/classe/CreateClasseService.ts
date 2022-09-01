import prismaClient from "../../prisma"

interface ClasseRequest {
    material: string;
    description: string;
    myclasse_id: string;
}

class CreateClasseService {
    async execute({ material, description, myclasse_id }: ClasseRequest) {

        // verificar se ele colocou um titulo
        if (description === '') {
            throw new Error("Description invalid");
        }

        const classe = await prismaClient.classe.create({
            data: {
                material: material,
                description: description,
                myclasse_id: myclasse_id,
            },
            select: {
                material: true,
                description: true,
                myclasse_id: true,
            }
        })

        return classe;
    }
}

export { CreateClasseService }