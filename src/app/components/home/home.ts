import { CommonModule } from '@angular/common';
import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { EnviaFormulario } from '../../services/envia-formulario';

// No Angular quando quisermos representar uma classe como componetne devemos ter um decorador @Component
// O decorador @Component recebe um objeto com as propriedades do componente
// standalone é uma propriedade que indica que o componente é independente e não precisa de um módulo para ser usado
// imports é uma propriedade que indica quais outros componentes ou módulos este componente usa

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  // Aqui vai as logiccas do componente Home

  // Injetando o serviço EnviaFormulario
  private enviaFormulario = inject(EnviaFormulario);

  meuBooleano: boolean = false;
  nome: string = 'Felipe';
  deveMostrar: boolean = true;
  listItens: string[] = ['Item 1', 'Item 2', 'Item 3'];

  // @Input é um decorador que indica que esta propriedade pode receber um valor de fora do componente
  // o valor que for dentro do () será o nome da propriedade que será passada para o componente
  // @Input  significa que estoui receebendo uma informação do componete pai
  @Input('name') minhaProps?: string;

  // @Output é um decorador que indica que esta propriedade pode emitir eventos para fora do componente
  // EventEmitter é uma classe que permite emitir eventos personalizados
  @Output() nomeDoComponenteFilho = new EventEmitter<string>();

  // Métodos
  atualizarBooleano(valor: boolean): void {
    this.meuBooleano = valor;
  }

  submit(event: any): void {
    this.nomeDoComponenteFilho.emit(this.nome);
    // Aqui podemos usar o serviço EnviaFormulario para enviar informações
    this.enviaFormulario.enviaInformacaoBackend(
      'Formulário enviado com sucesso!'
    );
    console.log(event);
    console.log('Formulário enviado!');
  }
}
