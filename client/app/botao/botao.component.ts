import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'botao',
    templateUrl: './botao.component.html'
})
export class BotaoComponent {
    @Input() nome: string = 'Ok';
    @Input() estilo: string = 'btn-default';
    @Input() tipo: string = 'button';
    @Input() desabilitado: boolean = false;
    @Output() acao = new EventEmitter(); // o Output é um decorator q nos permite criar eventos customizados, por exemplo, o ação!
    @Input() confirmacao: boolean;

    executaAcao() {
        if (this.confirmacao) {
            if (confirm('Deseja excluir?')) {
                // dispara um evento - poderíamos passar dados para o evento, mas como não é preciso 
                // enviamos null. Para acessar bastaria chamar (acao)="funcaoDoComponent($event)"
                this.acao.emit(null);
            }
            return;
        }
        this.acao.emit(null);
    }
}