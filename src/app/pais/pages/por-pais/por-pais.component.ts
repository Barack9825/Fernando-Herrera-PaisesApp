import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
})
export class PorPaisComponent {
  termino: string = '';

  buscar() {
    this.paisSevice.buscarPais(this.termino).subscribe(resp => {
      console.log(resp);
      
    });
  }

  constructor(private paisSevice: PaisService) {}
}
