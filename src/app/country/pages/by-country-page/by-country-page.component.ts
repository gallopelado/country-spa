import { Component } from '@angular/core';
import { SearchInputComponent } from "../../components/search-input/search-input.component";
import { CountryList } from "../../components/country-list/country-list.component";

@Component({
  selector: 'app-by-country-page',
  imports: [SearchInputComponent, CountryList],
  templateUrl: './by-country-page.component.html'
})
export class ByCountryPageComponent {

  onSearch(value: string): void {
    console.log('Searching for capital:', value);
  }

}
