import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'painel',
    templateUrl: './painel.component.html',
    styleUrls: ['./painel.component.css'],
    encapsulation: ViewEncapsulation.Emulated // Emula o shadow dom para encapsular o CSS de modo que ele não vaze para o escopo global
})
export class PainelComponent implements OnInit {

    @Input() titulo: string;

    ngOnInit() {
        this.titulo = this.titulo.length > 7 ?
            this.titulo.substr(0, 7) + '...' :
            this.titulo;
    }

}