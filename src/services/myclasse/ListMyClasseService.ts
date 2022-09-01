import prismaClient from "../../prisma"

class ListMyClasseService {
    async execute() {
        const myclasse = await prismaClient.myclasse.findMany({
            select: {
                id: true,
                title: true,
                image: true,
                name: true,
                teacher: true,
                work: true,
                info: true,
            }
        });

        return myclasse;

    }
}

export { ListMyClasseService }