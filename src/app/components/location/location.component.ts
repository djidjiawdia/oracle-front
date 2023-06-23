import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Location } from 'src/app/models/location.type';
import { LocationService } from 'src/app/services/location.service';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss'],
})
export class LocationComponent implements OnInit {
  locations$: Observable<Location[]>;

  constructor(private _locService: LocationService) {}

  ngOnInit(): void {
    this.locations$ = this._locService.getLocations();
  }
}
