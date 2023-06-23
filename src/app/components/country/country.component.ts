import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from 'src/app/models/country.type';
import { CountryService } from 'src/app/services/country.service';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss'],
})
export class CountryComponent implements OnInit {
  countries$: Observable<Country[]>;

  constructor(private _countryService: CountryService) {}

  ngOnInit(): void {
    this.countries$ = this._countryService.getCountries();
  }
}
