import { Component, Input, OnInit, ViewEncapsulation, ElementRef } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'painel',
    templateUrl: './painel.component.html',
    styleUrls: ['./painel.component.css'],
    encapsulation: ViewEncapsulation.Emulated // Emula o shadow dom para encapsular o CSS de modo que ele não vaze para o escopo global
})
export class PainelComponent implements OnInit {

    @Input() titulo: string;
    elemento: ElementRef;

    // ElementRef: Objeto que encapsula nosso elemento do dom ao qual este painel está associado
    constructor(elemento: ElementRef) {
        this.elemento = elemento;
    }

    ngOnInit() {
        this.titulo = this.titulo.length > 7 ?
            this.titulo.substr(0, 7) + '...' :
            this.titulo;
    }

    fadeOut(callback) {
        // nativeElement nos devolve o elemento do dom de fato e não o objeto encapsulado
        $(this.elemento.nativeElement).fadeOut(callback);
    }

}