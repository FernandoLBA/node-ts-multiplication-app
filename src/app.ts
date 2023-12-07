// * Imprimir argumentos enviados desde consola
// const [a, b, ...args] = process.argv;
// console.log(args);

// * si enviamos muchos argumentos como podemos controlarlos?
// * usando la librería yargs, asi que la usamos en un adapter
import { yarg } from "./config/plugins/yargs.plugin";
import { ServerApp } from "./presentation/server-app";

/**
 * Si enviamos parámetros así:
 * a=12
 * -b=11
 * --c=21
 *
 * Yargs los recibirá como clave valor:
 * {_: ["a=12"], b: [10, 11], c: 21, ...} -- UNA VAINA LOCA
 */
// console.log(yarg.b);

// * Función anónima autoinvocada, para procesos asíncronos con yargs
(async () => {
  await main();
})();

async function main() {
  const {
    b: base,
    l: limit,
    s: showTable,
    d: fileDestination,
    n: fileName,
  } = yarg;

  ServerApp.run({ base, limit, showTable, fileDestination, fileName });
}
