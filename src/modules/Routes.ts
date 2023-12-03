import path from "path"
import { RouteType } from "../types/RouteEnum"
import GenerateFile from "./GenerateFile"
import { existsSync, mkdirSync, writeFileSync } from "fs"
import verifyTypeFile from "../utils/verifyTypeFile"
import verifyFile from "../utils/verifyFile"

export default class Route{
    route: string
    constructor(
        route?: string
    ){
        this.route = route || path.join(__dirname, 'src', 'app')
    }

    async create(routeName: string, routeType: RouteType){
        const newPath = path.join(this.route as string, routeName)
        const file = new GenerateFile(routeName, routeType)

        const typeFile = verifyTypeFile(routeType)
        console.log('arquivo',verifyFile(newPath, typeFile))
        if(!verifyFile(newPath, typeFile) && !existsSync(newPath)){
            const route = mkdirSync(newPath, {recursive: true})
            writeFileSync(path.join(route as string, typeFile), file.createFile() as string)
            console.log('rota criada com sucesso', path.join(route as string, typeFile))
        }else {
            console.error('diretorio ou arquivo ja existe')
        }
    }
}