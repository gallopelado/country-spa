import { Component } from '@angular/core';
import { CountryList } from "../../components/country-list/country-list.component";

@Component({
  selector: 'app-by-capital-page',
  imports: [CountryList],
  templateUrl: './by-region-page.component.html'
})
export class ByRegionPageComponent {

  onSearch(value: string): void {
    console.log('Searching for capital:', value);
  }

}
