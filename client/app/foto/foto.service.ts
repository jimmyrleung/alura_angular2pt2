import { Http, Headers, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { FotoComponent } from './foto.component';
import { Observable } from 'rxjs';

// Nas versões anteriores classes comuns (que não são Components do angular) não poderia receber a injeção de dependencia do Http
// Portanto, utilizava-se o decorator @Injectable
export class FotoService {
    http: Http;
    headers: Headers;
    url: string = 'v1/fotos';

    constructor(http: Http) {
        this.http = http;

        // cria uma instância de Headers
        this.headers = new Headers();

        // Adiciona o tipo de conteúdo application/json 
        this.headers.append('Content-Type', 'application/json');
    }

    // O TypeScript nos permite tipar o retorno - Retorna um Observable<Response>
    cadastra(foto: FotoComponent): Observable<Response> {
        // Retornamos a request http e delegamos o subscribe para quem está chamando
        return this.http.post(this.url, JSON.stringify(foto), { headers: this.headers });
    }

    lista(): Observable<Object[]> {
        // Retornamos a request http e delegamos o subscribe para quem está chamando
        // Transforma um Observable<Response> em Observable<Object[]>
        return this.http.get(this.url).map(res => res.json());
    }
}