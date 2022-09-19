import { sapa, convert, checkScore, filterData } from "./libs/soal";

const myArgs = process.argv.slice(2)
const [command, ...params] = myArgs

switch (command) {
    case 'sapa':
        sapa(params)
        break;
    case 'convert':
        convert(params)
        break;
    case 'checkScore':
        checkScore(params)
        break;
    case 'filterData':
        filterData(params)
        break;
    default:
        break;
}