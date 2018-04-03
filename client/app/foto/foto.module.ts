import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FotoComponent } from './foto.component';
import { FiltroPorTitulo } from './foto.pipes';
import { FotoService } from './foto.service';

@NgModule({
  imports: [CommonModule],
  declarations: [FotoComponent, FiltroPorTitulo, FotoService],
  exports: [FotoComponent, FiltroPorTitulo, FotoService]
  //, providers: [FotoService] Nas versões anteriores, como o foto.service não tem nenhum tipo de decorator ele deveria ser registrado como um provider
})
export class FotoModule { }