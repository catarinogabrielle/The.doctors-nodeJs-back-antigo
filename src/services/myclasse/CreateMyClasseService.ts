import prismaClient from "../../prisma"

interface MyclasseRequest {
    title: string;
    image: string;
    teacher: string;
    work: string,
    name: string;
    info: string;
}

class CreateMyClasseService {
    async execute({ title, image, teacher, name, info, work }: MyclasseRequest) {

        // verificar se ele colocou um titulo
        if (title === '') {
            throw new Error("Title invalid");
        }

        const myclasse = await prismaClient.myclasse.create({
            data: {
                title: title,
                image: image,
                name: name,
                teacher: teacher,
                work: work,
                info: info,
            },
            select: {
                id: true,
                title: true,
                image: true,
                name: true,
                teacher: true,
                work: true,
                info: true,
            }
        })

        return myclasse;
    }
}

export { CreateMyClasseService }