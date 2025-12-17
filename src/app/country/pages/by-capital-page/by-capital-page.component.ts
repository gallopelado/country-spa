import { Component, inject, resource, signal } from '@angular/core';
import { CountryList } from "../../components/country-list/country-list.component";
import { SearchInputComponent } from "../../components/search-input/search-input.component";
import { CountryService } from '../../services/country.service';
import { firstValueFrom, of } from 'rxjs';
import { rxResource } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-by-capital-page',
  imports: [CountryList, SearchInputComponent],
  templateUrl: './by-capital-page.component.html'
})
export class ByCapitalPageComponent {

  countryService = inject(CountryService);
  query = signal('');

  countryResource = rxResource({
    request: () => ({ query: this.query() }),
    loader: ({ request }) => {

      if ( !request.query ) return of([]);

      return this.countryService.searchByCapital( request.query )

    },
  });

}
