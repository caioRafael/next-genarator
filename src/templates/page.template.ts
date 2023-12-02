export default function PageTemplate(name: string){
    const newCase = name[0].toLocaleUpperCase() + name.slice(1)
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