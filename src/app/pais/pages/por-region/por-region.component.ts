import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { Country } from '../../intefaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
    `
      button {
        margin-right: 5px;
      }
    `,
  ],
})
export class PorRegionComponent {
  regiones: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  regionActiva: string = '';
  hayError: boolean = false;
  paises: Country[] = [];

  constructor(private paisService: PaisService) {}

  getClaseCss(region: string): string {
    return region === this.regionActiva
      ? 'btn btn-primary'
      : 'btn btn-outline-primary';
  }

  activarRegion(region: string) {
    if (region===this.regionActiva){return}
    this.regionActiva = region;
    this.paises = [];
    this.paisService.getPaisPorRegion(region).subscribe((paises) => {
      this.paises = paises;
    });
  }
}
