import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../models/country.type';
import { environment } from 'src/environments/environment.local';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  constructor(private _http: HttpClient) {}

  getCountries(): Observable<Country[]> {
    return this._http.get<Country[]>(`${environment.apiUrl}/countries`);
  }
}
