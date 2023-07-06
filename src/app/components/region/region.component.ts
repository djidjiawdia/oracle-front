import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Region } from 'src/app/models/region.type';
import { Country } from 'src/app/models/country.type';
import { RegionService } from 'src/app/services/region.service';
import { CountryService } from 'src/app/services/country.service';

@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.scss'],
})
export class RegionComponent implements OnInit {
  regions$: Observable<Region[]>;

  constructor(
    private _regionService: RegionService,
    private _countryService:CountryService,
    private router: Router) { }

    regions: Region[] | undefined;
    countries: Country[] | undefined;

  ngOnInit(): void {
    this.getRegions();
    this.getCountries
  }

  getRegions() {
    this._regionService.getRegionsList().subscribe((data) => this.regions = data);
  }

  getCountries() {
    this._countryService.getCountriesList().subscribe((data) => this.countries = data);;
  }

  
  
}
