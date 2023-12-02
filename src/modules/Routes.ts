import path from "path"
import { RouteType } from "../types/RouteEnum"
import GenerateFile from "./GenerateFile"
import { existsSync, mkdirSync, writeFileSync } from "fs"
import verifyTypeFile from "../utils/verifyTypeFile"

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

        console.log(newPath)

        if(!existsSync(newPath)){
            const route = mkdirSync(newPath, {recursive: true})
            writeFileSync(path.join(route as string,  verifyTypeFile(routeType)), file.createFile() as string)
            console.log('rota criada com sucesso', route)
        }
    }
}