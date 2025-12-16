import { Component, inject, signal } from '@angular/core';
import { CountryList } from "../../components/country-list/country-list.component";
import { SearchInputComponent } from "../../components/search-input/search-input.component";
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-by-capital-page',
  imports: [CountryList, SearchInputComponent],
  templateUrl: './by-capital-page.component.html'
})
export class ByCapitalPageComponent {

  countryService = inject(CountryService);

  isLoading = signal(false);
  isError = signal<string|null>(null);
  countries = signal<Country[]>([]);

  onSearch(query: string): void {

    if ( this.isLoading() ) return;

    this.isLoading.set(true);
    this.isError.set(null);

    this.countryService.searchByCapital(query)
      .subscribe( countries => {

        this.isError.set(null);
        this.isLoading.set(false);
        this.countries.set(countries);

      });
  }

}
