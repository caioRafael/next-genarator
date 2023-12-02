import { existsSync, mkdirSync, writeFileSync } from "fs"
import { RouteType } from "../types/RouteEnum"
import path from "path"
import GenerateFile from "./GenerateFile"
import verifyTypeFile from "../utils/verifyTypeFile"

export default class GenerateRoute{
    appRoute: string
    routeName: string
    routeType: RouteType
    constructor(
        routeName: string,
        routeType: RouteType,
        appRoute?: string
    ){  
        this.routeName = routeName
        this.routeType = routeType
        this.appRoute = appRoute || path.join(__dirname, 'src', 'app')
    }

    listPath(){
        console.log('list application routes')
    }

    async generateRoute(){
        const newPath = path.join(this.appRoute as string, this.routeName)
        const file = new GenerateFile(this.routeName, this.routeType)

        console.log(newPath)

        if(!existsSync(newPath)){
            const route = mkdirSync(newPath, {recursive: true})
            writeFileSync(path.join(route as string,  verifyTypeFile(this.routeType)), file.createFile() as string)
            console.log('rota criada com sucesso', route)
        }
    }
}