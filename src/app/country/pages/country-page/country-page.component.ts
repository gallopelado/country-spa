import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';

@Component({
  selector: 'app-country-page-component',
  imports: [],
  templateUrl: './country-page.component.html',
})
export class CountryPageComponent {

  query = toSignal(
    inject(ActivatedRoute).params.pipe( map( params => params['code'] ) )
  );

}
