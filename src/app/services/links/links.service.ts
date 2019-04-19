import { Injectable } from '@angular/core';
import { URL_SERVICIOS } from '../../config/config';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LinksService {

  constructor(private _http: HttpClient) { }

  headers = new HttpHeaders().set('Content-Type', 'application/json');


  createLink(datos) {
    const url = URL_SERVICIOS + '/links';
    return this._http.post(url, datos, {headers: this.headers}).pipe(
      map((resp: any) => {
        console.log(resp);
        return true;
      }),
      catchError( err => {
        return throwError(err);
      })
    )
  }
}
