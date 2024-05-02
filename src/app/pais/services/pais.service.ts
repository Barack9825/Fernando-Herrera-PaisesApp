import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';
import { Country } from '../intefaces/pais.interface';

@Injectable({
  providedIn: 'root',
})
export class PaisService {
  private apiUrl: string = 'https://restcountries.com/v3.1';
  get httpParams() {
    return new HttpParams().set(
      'fields',
      'name,capital,flags,population,cca2,cca3,ccn3,translations'
    );
  }

  constructor(private http: HttpClient) { }

  buscarPais(termino: string): Observable<Country[]> {

    const url = `${this.apiUrl}/name/${termino}`;

    return this.http.get<Country[]>(url, { params: this.httpParams });
  }

  buscarCapital(termino: string): Observable<Country[]> {
    
    const url = `${this.apiUrl}/capital/${termino}`;

    return this.http.get<Country[]>(url, { params: this.httpParams });
  }

  getPaisPorAplpha(id: string): Observable<Country> {
    
    
    const url = `${this.apiUrl}/alpha/${id}`;
    
    return this.http.get<Country>(url, { params: this.httpParams });
  }

  getPaisPorRegion(region: string): Observable<Country[]>{
    
    
    const url = `${this.apiUrl}/region/${region}`;
    
    return this.http.get<Country[]>(url, { params:this.httpParams});
  }
}
