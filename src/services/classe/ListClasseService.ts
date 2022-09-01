import prismaClient from "../../prisma"

class ListClasseService {
    async execute() {
        const classe = await prismaClient.classe.findMany({
            select: {
                id: true,
                status: true,
                draft: true,
                material: true,
                description: true,
                myclasse_id: true,
            }
        });

        return classe;

    }
}

export { ListClasseService }