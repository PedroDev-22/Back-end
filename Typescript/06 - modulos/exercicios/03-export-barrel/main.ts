import { dobrar, saudar, VERSAO } from "./index.js";
import { Logger } from "./index.js";

console.log(dobrar(8))
console.log(saudar())
console.log(VERSAO)
const logger = new Logger()
logger.log("oi");
