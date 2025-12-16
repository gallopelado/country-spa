import { Component, input } from '@angular/core';
import { RESTCountry } from '../../interfaces/rest-countries.interface';

@Component({
  selector: 'country-list',
  imports: [],
  templateUrl: './country-list.component.html',
})
export class CountryList {
  countries = input.required<RESTCountry[]>();
}
