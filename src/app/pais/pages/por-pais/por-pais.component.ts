import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../intefaces/pais.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
})
export class PorPaisComponent {
  termino: string = '';
  hayError: boolean = false;
  paises: Country[] = [];

  buscar(termino: string) {
    this.hayError = false;
    this.termino = termino;

    this.paisSevice.buscarPais(this.termino).subscribe(
      (paises) => {
        this.paises = paises;
      },

      (err) => {
        this.hayError = true;
        this.paises = [];
      }
    );
  }
  sugerencias(termino: string) {
    this.hayError = false;
    
  }
  constructor(private paisSevice: PaisService) {}
}
