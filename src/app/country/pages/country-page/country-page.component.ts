import { Component, computed, inject } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { CountryService } from '../../services/country.service';
import { NotFoundComponent } from "../../../shared/components/footer/not-found/not-found.component";
import { CountryInformationComponent } from "./country-information/country-information.component";
import { UnsplashService } from '../../services/unsplash.service';
import { of, tap } from 'rxjs';

@Component({
  selector: 'app-country-page-component',
  imports: [NotFoundComponent, CountryInformationComponent],
  templateUrl: './country-page.component.html',
})
export class CountryPageComponent {

  countryService = inject(CountryService);
  unSplashService = inject(UnsplashService);
  countryCode = inject(ActivatedRoute).snapshot.params['code'];

  countryName = computed(() => this.countryResource.value()?.common);

  countryResource = rxResource({
    request: () => ( { code: this.countryCode } ),
    loader: ( { request } ) => {

      return this.countryService.searchCountryByAplhaCode(request.code);

    }
  });

  unSplashResource = rxResource({
    request: () => {
      const name = this.countryName();
      return name ? { query: name } : null;
    },
    loader: ({ request }) => {

      if ( !request ) {
        return of([]);
      }
      return this.unSplashService.searchImageByName(request.query)
      .pipe(
        tap( receivedImages => console.log(receivedImages) )
      );

    }
  });

}
