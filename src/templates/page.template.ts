export default function PageTemplate(name: string){
    const routeName = name.split('/')
    const newCase = routeName[routeName.length -1][0].toLocaleUpperCase() + routeName[routeName.length -1].slice(1)
    return `
export default function ${newCase}Page(){
    return(
        <div>
            <h1>${newCase} page</h1>
        </div>
    )
}
`
}