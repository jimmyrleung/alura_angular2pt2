import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'foto',
    templateUrl: './foto.component.html',
    styleUrls: ['./foto.component.css'],
    encapsulation: ViewEncapsulation.Emulated // Emula o shadow dom para encapsular o CSS de modo que ele não vaze para o escopo global
})
export class FotoComponent {

    @Input() titulo: string = '';
    @Input() url: string = '';
    descricao: string = '';
    _id: string = '';
}