import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { LinksService } from '../../services/service.index';


@Component({
  selector: 'app-links-from',
  templateUrl: './links-from.component.html',
  styles: []
})
export class LinksFromComponent implements OnInit {

  linksForm = new FormGroup({
    tittle: new FormControl('Humberto Zapata'),
    link: new FormControl('https://www.humbertozapata.com'),
    description: new FormControl('Sitio web de Humberto Zapata León')
  });

  constructor(  private _linkService: LinksService ) { }

  ngOnInit() {
  }

  agregarLink () {
    /* const linkInfo = {
      tittle: this.linksForm.value.tittle,
      link: this.linksForm.value.link,
      description: this.linksForm.value.description,
    }; */
    this._linkService.createLink(this.linksForm.value).subscribe();
  }
}
