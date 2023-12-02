import { RouteType } from "../types/RouteEnum";

export default function verifyTypeFile(type: RouteType): string{
    switch (type) {
        case RouteType.Layout:
            return 'layout.tsx'

        case RouteType.Page: 
            return 'page.tsx'
    
        default:
            return ''
    }
}