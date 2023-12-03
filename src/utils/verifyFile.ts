import { accessSync, constants } from "fs";
import path from "path";

export default function verifyFile(dir: string, name: string): boolean {
    const caminhoCompleto = path.join(dir, name);
    console.log(caminhoCompleto)

    try {
        // Verifica se o arquivo existe
        accessSync(caminhoCompleto, constants.F_OK);
        return true;
    } catch (err) {
        // Se ocorrer um erro, o arquivo não existe
        return false;
    }
}