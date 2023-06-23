import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Region } from '../models/region.type';
import { environment } from 'src/environments/environment.local';

@Injectable({
  providedIn: 'root',
})
export class RegionService {
  constructor(private _http: HttpClient) {}

  getRegions(): Observable<Region[]> {
    return this._http.get<Region[]>(
      `${environment.apiUrl}/regions/listRegions`
    );
  }
}
