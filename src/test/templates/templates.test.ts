import LayoutTemplate from "../../templates/layoute.template"
import PageTemplate from "../../templates/page.template"

const layoutMock = `
import { ReactNode } from 'React'
export default function GenerateLayout({children}: {children: ReactNode}){
    return(
        <div>
            <h1>Generate layout</h1>
            {children}
        </div>
    )
}
`

const pageMock = `
export default function GeneratePage(){
    return(
        <div>
            <h1>Generate page</h1>
        </div>
    )
}
`

describe('verify generate templates', () => {
    test('verify layout template', () => {
        const name = 'generate'

        const generate = LayoutTemplate(name)

        expect(generate).toEqual(layoutMock)
    })


    test('verify page template', () => {
        const name = 'generate'

        const generate = PageTemplate(name)

        expect(generate).toEqual(pageMock)
    })

})