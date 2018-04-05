import { Component } from '@angular/core';
import { FotoService } from '../foto/foto.service';

@Component({
    moduleId: module.id,
    selector: 'listagem',
    templateUrl: './listagem.component.html'
})
export class ListagemComponent {

    fotos: Object[] = [];
    service: FotoService;
    mensagem: string = "";

    constructor(service: FotoService) {
        this.service = service;
        service.lista()
            .subscribe(fotos => {
                this.fotos = fotos;
            }, erro => console.log(erro));
    };

    remover(foto) {
        console.log(foto);
        this.service.remove(foto)
            .subscribe(() => {
                console.log("Foto removida com sucesso.");

                // O angular não atualiza nossa view com o código abaixo pois ele não dispara uma change detection
                // Pois ele manipula uma mesma referência. Para disparar uma change detection temos que atribuir
                // uma nova lista de fotos, portanto, não basta só fazer um splice
                // Isso é feito por questões de performance pois ficar observando qualquer tipo de mudança em um elemento 
                // custava muito.
                // this.fotos.splice(this.fotos.indexOf(foto), 1);

                let novasFotos = [...this.fotos];
                novasFotos.splice(novasFotos.indexOf(foto), 1);
                this.fotos = novasFotos;
                this.mensagem = "Foto removida com sucesso.";

            }, erro => { console.log(erro); this.mensagem = "Erro ao remover foto."; });
    };
}