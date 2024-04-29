import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
})
export class PorPaisComponent {
  termino: string = '';

  hayError: boolean = false;

  buscar() {
    this.hayError = false;
    this.paisSevice.buscarPais(this.termino).subscribe(
      (resp) => {
        console.log(resp);
      },
      (err) => {
        this.hayError = true
      }
    );
  }

  constructor(private paisSevice: PaisService) {}
}
