import { Country } from "../interfaces/country.interface";
import { RESTCountry } from "../interfaces/rest-countries.interface";

export class CountryMapper {

  // static RestCountry => Country
  static mapRestCountryToCountry(item: RESTCountry): Country {
    return {
      cca2: item.cca2,
      flag: item.flags.png,
      flagSvg: item.flags.svg,
      name: item.translations?.['spa']?.official || item.name.common,
      capital: item.capital ? item.capital[0] : 'No Capital',
      population: item.population,
    }
  }

  // static RestCountry[] => Country[]
  static mapRestCountriesToCountries(items: RESTCountry[]): Country[] {
    return items.map(this.mapRestCountryToCountry);
  }

}
