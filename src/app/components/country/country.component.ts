import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Country } from 'src/app/models/country.type';
import { CountryService } from 'src/app/services/country.service';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss'],
})
export class CountryComponent implements OnInit {
  countries: Country[] | undefined;

 
  constructor(
  private _countryService:CountryService,
  private router: Router) { }


  ngOnInit(): void {
    this.getCountries
  }


  getCountries() {
    this._countryService.getCountriesList().subscribe((data) => this.countries = data);;
  }
}
