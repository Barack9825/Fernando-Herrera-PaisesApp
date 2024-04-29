import { Component } from '@angular/core';
import { Country } from '../../intefaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
})
export class PorCapitalComponent {
  termino: string = '';
  hayError: boolean = false;
  paises: Country[] = [];

  buscar(termino: string) {
    this.hayError = false;
    this.termino = termino;

    this.paisSevice.buscarCapital(this.termino).subscribe(
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
