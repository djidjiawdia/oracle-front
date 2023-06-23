import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Location } from '../models/location.type';
import { environment } from 'src/environments/environment.local';

@Injectable({
  providedIn: 'root',
})
export class LocationService {
  constructor(private _http: HttpClient) {}

  getLocations(): Observable<Location[]> {
    return this._http.get<Location[]>(
      `${environment.apiUrl}/locations/listLocations`
    );
  }
}
