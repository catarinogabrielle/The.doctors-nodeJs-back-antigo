import prismaClient from "../../prisma"

class ListMyClasseService {
    async execute() {
        const myclasse = await prismaClient.myclasse.findMany({
            select: {
                id: true,
                title: true,
                image: true,
                teachername: true,
                teacherphoto: true,
                teacherwork: true,
                teacherinfo: true,
                description: true,
                time: true,
            }
        });

        return myclasse;

    }
}

export { ListMyClasseService }