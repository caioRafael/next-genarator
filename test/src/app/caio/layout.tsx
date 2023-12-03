
import { ReactNode } from 'React'
export default function TesteLayout({children}: {children: ReactNode}){
    return(
        <div>
            <h1>Teste layout</h1>
            {children}
        </div>
    )
}
