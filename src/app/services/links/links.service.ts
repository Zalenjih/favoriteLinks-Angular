import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LinksService {

  constructor() { }

  createLink() {
    console.log('Creando el link');
  }
}
