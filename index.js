import os from 'os'
import {version} from './array.js'

const home = os.homedir()
const host = os.hostname ()
const vers = os.version()
const type = os.type()

console.log(home)
console.log(host)
console.log(vers)
console.log(type)

console.log(version)
