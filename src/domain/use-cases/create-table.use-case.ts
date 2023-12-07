// * Interfaz que controla la clase
export interface CreateTableUseCase {
  execute: (options: CreateTableOptions) => string;
}

// * Interfaz de los parámetros del método execute
export interface CreateTableOptions {
  base?: number;
  limit?: number;
}

export class CreateTable implements CreateTableUseCase {
  /**
   * DI - Dependency Injection
   */
  constructor() {}

  execute({ base, limit = 10 }: CreateTableOptions) {
    let outputMessage = "";

    for (let i = 1; i <= limit; i++) {
      outputMessage += `${base} x ${i} = ${base! * i}\n`;
    }

    return outputMessage;
  }
}
