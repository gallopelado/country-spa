import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Image } from '../interfaces/image.interface';
import { catchError, map, Observable, throwError } from 'rxjs';
import { RESTUnsplash } from '../interfaces/rest-unsplash.interface';
import { environment } from '../../../enviroments/enviroment.development';
import { UnsplashImageMapper } from '../mappers/image.mapper';

@Injectable({providedIn: 'root'})
export class UnsplashService {

  private http = inject(HttpClient);

  searchImageByName( name: string ): Observable<Image[]> {

    const query = name.trim().toLocaleLowerCase();

    return this.http.get<RESTUnsplash>(`${ environment.unsplashUrl }/search/photos?query=${ query }&client_id=${ environment.unsplashApiKey }`)
      .pipe(
        map( unsplashObj => UnsplashImageMapper.mapRestUnsplashToImages(unsplashObj.results) ),
        catchError( err => {
          return throwError(
            () => new Error(`No se pudo encontrar la imagen según el término ${ query }`)
          );
        }),
      );
  }

}
