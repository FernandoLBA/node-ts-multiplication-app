import yargs from "yargs";
import { hideBin } from "yargs/helpers";

// * El hideBin esconde toda la información adicional y solo muestra los args
// * Usamos parseSync porque es una operación síncrona
export const yarg = yargs(hideBin(process.argv))
  // * agrega una copia de la opción "b" de los args recibidos por completo
  .option("b", {
    alias: "base",
    type: "number",
    demandOption: true,
    describe: "Multiplication base",
  })
  .option("l", {
    alias: "limit",
    type: "number",
    default: 10,
    describe: "Multiplication table limit",
  })
  .option("s", {
    alias: "show",
    type: "boolean",
    default: false,
    describe: "Show the multiplication table",
  })
  .option("n", {
    alias: "name",
    type: "string",
    default: "multiplication-table",
    describe: "File name",
  })
  .option("d", {
    alias: "destination",
    type: "string",
    default: "outputs",
    describe: "File destination",
  })
  .check((argv, options) => {
    if (argv.b < 1) throw "Error: The base must be greater than 0";

    return true;
  })
  .parseSync();

/**
 * Si escribimos 'npx ts-node src/app.ts --help' en la consola
 * nos mostrará los comandos disponibles, incluyendo los de arriba:
 * Options:
      --help     Show help                                    [boolean]
      --version  Show version number                          [boolean]
  -b, --base     Multiplication base                [number] [required]
  -l, --limit    Multiplication table limit      [number] [default: 10]
 * 
 *
 * 
 * Si mandamos este comando: 'npx ts-node src/app.ts --base 320'
 * recibimos:
 * { _: [], base: 320, b: 320, l: 10, limit: 10, '$0': 'src/app.ts' }
 * 
 * le asignó a l y a limit el valor por defecto 10, además 
 * b y --base se concatenan con el parámetro siguiente 320
 * 
 */
