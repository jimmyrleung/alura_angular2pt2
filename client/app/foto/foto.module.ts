import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FotoComponent } from './foto.component';
import { FiltroPorTitulo } from './foto.pipes';
import { FotoService } from './foto.service';

@NgModule({
  imports: [CommonModule],
  declarations: [FotoComponent, FiltroPorTitulo],
  exports: [FotoComponent, FiltroPorTitulo],
  providers: [FotoService] // Como o foto.service não tem nenhum tipo de decorator ele deve ser registrado como um provider
})
export class FotoModule { }