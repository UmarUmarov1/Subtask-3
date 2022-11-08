import {type} from "./index.js"

function versionOS() {
    return `Привет, Юзер. Вижу ты зашёл с ${type}`
}
console.log(versionOS())

export {versionOS}