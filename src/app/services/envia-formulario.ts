import { Injectable } from '@angular/core';

// Injectable é um decorador que indica que esta classe pode ser injetada como um serviço
// providedIn: 'root' indica que este serviço estará disponível em toda a aplicação
@Injectable({
  providedIn: 'root',
})
export class EnviaFormulario {
  constructor() {}

  enviaInformacaoBackend(info: string): void {
    console.log('enviando informação para o backend:', info);
  }
}
