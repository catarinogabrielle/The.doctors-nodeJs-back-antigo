import prismaClient from "../../prisma"

interface ClasseRequest {
    myclasse_id: string;
}

class ListByMyClasseService {
    async execute({ myclasse_id }: ClasseRequest) {

        const findByMyClasse = await prismaClient.classe.findMany({
            where: {
                myclasse_id: myclasse_id,
            }
        })

        return findByMyClasse;
    }
}

export { ListByMyClasseService }