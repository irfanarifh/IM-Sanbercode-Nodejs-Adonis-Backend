import Bootcamp from "./libs/bootcamp";


const myArgs = process.argv.slice(2)
const [command, ...params] = myArgs

switch (command) {
    case 'register':
        Bootcamp.register(params)
        break;
    case 'login':
        Bootcamp.login(params)
        break;
    case 'addSiswa':
        Bootcamp.addSiswa(params)
        break;
    default:
        break;
}