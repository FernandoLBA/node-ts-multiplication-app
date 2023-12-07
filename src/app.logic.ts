import fs from "fs";
import { yarg } from "./config/plugins/yargs.plugin";

interface Yarg {
  base: number;
  limit: number;
}

// * es bueno importar las options y luego cambiarles el nombre por acá, para
// * que importe los tipos y no de error por type unknown
const { b: base, s: showTable, l: limit } = yarg;

let outputMessage = "";
const headerMessage = `
===============================
          TABLA DEL ${base}
===============================\n
`;

for (let i = 1; i <= limit; i++) {
  outputMessage += `${base} x ${i} = ${base * i}\n`;
}

outputMessage = headerMessage + outputMessage;

if (showTable) {
  console.log(outputMessage);
}

const outputPath = "outputs";

// * El recursive permite crear carpetas anidadas de forma recursiva
fs.mkdirSync(outputPath, { recursive: true });
// fs.mkdirSync("src/recursive1/recursive2/recursive3", { recursive: true });

fs.writeFileSync(`${outputPath}/table-${base}.txt`, outputMessage);

// console.log("File created");
