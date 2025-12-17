import { Component, inject } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { CountryService } from '../../services/country.service';
import { NotFoundComponent } from "../../../shared/components/footer/not-found/not-found.component";
import { CountryInformationComponent } from "./country-information/country-information.component";

@Component({
  selector: 'app-country-page-component',
  imports: [NotFoundComponent, CountryInformationComponent],
  templateUrl: './country-page.component.html',
})
export class CountryPageComponent {

  // query = toSignal(
  //   inject(ActivatedRoute).params.pipe( map( params => params['code'] ) )
  // );
  // esto es estático, no reactivo
  countryService = inject(CountryService);
  countryCode = inject(ActivatedRoute).snapshot.params['code'];

  countryResource = rxResource({
    request: () => ( { code: this.countryCode } ),
    loader: ( { request } ) => {

      return this.countryService.searchCountryByAplhaCode(request.code);

    }
  });

}
