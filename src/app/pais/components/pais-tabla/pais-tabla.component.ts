import { Component, Input } from '@angular/core';

import { Country } from '../../intefaces/pais.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pais-tabla',
  templateUrl: './pais-tabla.component.html',
  
})
export class PaisTablaComponent {


  constructor(public router:Router){}  
  @Input() paises: Country[] = []
  
}
