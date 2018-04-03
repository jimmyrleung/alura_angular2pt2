import { Component } from '@angular/core';
import { FotoService } from '../foto/foto.service';

@Component({
    moduleId: module.id,
    selector: 'listagem',
    templateUrl: './listagem.component.html'
})
export class ListagemComponent {

    fotos: Object[] = [];

    constructor(service: FotoService) {
        service.lista()
            .subscribe(fotos => {
                this.fotos = fotos;
            }, erro => console.log(erro));
    }

}