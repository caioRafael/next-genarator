export default function LayoutTemplate(name: string){
    const routeName = name.split('/')
    const newCase = routeName[routeName.length -1][0].toLocaleUpperCase() + routeName[routeName.length -1].slice(1)
    return `
import { ReactNode } from 'React'
export default function ${newCase}Layout({children}: {children: ReactNode}){
    return(
        <div>
            <h1>${newCase} layout</h1>
            {children}
        </div>
    )
}
`
}

