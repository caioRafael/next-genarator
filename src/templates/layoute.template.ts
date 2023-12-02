export default function LayoutTemplate(name: string){
    const newCase = name[0].toLocaleUpperCase() + name.slice(1)
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

