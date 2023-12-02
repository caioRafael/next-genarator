import { CommandLine } from '@caiorafael/simple-cl'
import {version} from '../package.json'
import { RouteType } from './types/RouteEnum'
import Route from './modules/Routes'
import path from 'path'
import NewOptions from './types/NewOptions'

const args = process.argv.slice(2)

const commandLine = new CommandLine()

commandLine.setName('Next Route Generation')
           .setDescription("A CLI for NextJS route generation")
           .setVersion(version)

commandLine.addCommand('new')
           .setDsescription('Add a new route to your NextJS project')
           .addOption({
            flag: 'type',
            alias: 't',
            description: "route's type",
            value: RouteType.Layout
           })
           .setAction((arg, options: NewOptions) => {
                const route = path.join(__dirname, '..', 'test', 'src', 'app')
                console.log(options)

                const type = (options['--type'] || options['-t']) ? (options['--type'] || options['-t']) : undefined

                console.log(type)
                new Route(route.toString()).create(arg as string, type as RouteType)
           })

commandLine.parse(args)