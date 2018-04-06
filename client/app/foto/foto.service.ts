import { Http, Headers, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { FotoComponent } from './foto.component';
import { Observable } from 'rxjs';

// Classes comuns (que não são Components do angular) não podem receber a injeção de dependencia do Http
// Portanto, utiliza-se o decorator @Injectable
@Injectable()
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
    cadastra(foto: FotoComponent): Observable<MensagemCadastro> {
        if (foto._id) {
            return this.http
                .put(`${this.url}/${foto._id}`, JSON.stringify(foto), { headers: this.headers })
                .map(() => new MensagemCadastro('Foto alterada com sucesso.', false)); // entre parenteses pois o => nao sabe se é um bloco ou um obj
        } else {
            // Retornamos a request http e delegamos o subscribe para quem está chamando
            return this.http
                .post(this.url, JSON.stringify(foto), { headers: this.headers })
                .map(() => new MensagemCadastro('Foto incluída com sucesso.', true)); // entre parenteses pois o => nao sabe se é um bloco ou um obj
        }
    }

    lista(): Observable<Object[]> {
        // Retornamos a request http e delegamos o subscribe para quem está chamando
        // Transforma um Observable<Response> em Observable<Object[]>
        return this.http.get(this.url).map(res => res.json());
    }

    buscaPorId(id: string): Observable<FotoComponent> {
        // Retornamos a request http e delegamos o subscribe para quem está chamando
        // Transforma um Observable<Response> em Observable<Object[]>
        return this.http.get(`${this.url}/${id}`).map(res => res.json());
    }

    remove(foto: FotoComponent) {
        return this.http.delete(`${this.url}/${foto._id}`);
    }
}

export class MensagemCadastro {
    // ao indicar um modificador de acesso o TypeScript entende que precisa gerar esses atributos
    // para essa classe
    constructor(private _mensagem: string, private _inclusao: boolean) {
        this._mensagem = _mensagem;
        this._inclusao = _inclusao;
    };

    get mensagem(): string {
        return this._mensagem;
    }

    get inclusao(): boolean {
        return this._inclusao;
    }
};

// Declaração explícita de classes
// export class MensagemCadastro {
//     // Typescript nos da os modificadores de acesso
//     private _mensagem: string;
//     private _inclusao: boolean;

//     constructor(mensagem: string, inclusao: boolean) {
//         this._mensagem = mensagem;
//         this._inclusao = inclusao;
//     };

//     public getMensagem() {
//         return this._mensagem;
//     }

//     public isInclusao() {
//         return this._inclusao;
//     }
// }