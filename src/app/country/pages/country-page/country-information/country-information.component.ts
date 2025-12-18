import { Component, input } from '@angular/core';
import { Country } from '../../../interfaces/country.interface';
import { DecimalPipe } from '@angular/common';
import { Image } from '../../../interfaces/image.interface';

@Component({
  selector: 'country-information-page',
  imports: [DecimalPipe],
  templateUrl: './country-information.component.html'
})
export class CountryInformationComponent {

  countryInformation = input.required<Country>();
  imageCollection = input.required<Image[]>();

}
