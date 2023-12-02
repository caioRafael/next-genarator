import LayoutTemplate from "../templates/layoute.template";
import PageTemplate from "../templates/page.template";
import { RouteType } from "../types/RouteEnum";

export default class GenerateFile{
    routeType: RouteType
    fileName: string
    constructor(
        fileName: string,
        routeType: RouteType
    ){
        this.fileName = fileName
        this.routeType = routeType
    }

    createFile(){
        switch (this.routeType) {
            case RouteType.Layout:
                return LayoutTemplate(this.fileName)
            case RouteType.Page:
                return PageTemplate(this.fileName)        
            default:
                break;
        }
    }
}