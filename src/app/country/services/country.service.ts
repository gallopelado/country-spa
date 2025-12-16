import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { RESTCountry } from '../interfaces/rest-countries.interface';

const API_URL = 'https://restcountries.com/v3.1';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  private http = inject(HttpClient);

  searchByCapital( q: string ) {
    const query = q.trim().toLowerCase();

    return this.http.get<RESTCountry[]>(`${API_URL}/capital/${ query }`);

    // this.http.get(`${API_URL}/capital/${ query }`)
    //     .subscribe( resp => {
    //       console.log(resp);
    //     } );

  }
}
