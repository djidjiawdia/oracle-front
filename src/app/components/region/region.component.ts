import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Region } from 'src/app/models/region.type';
import { RegionService } from 'src/app/services/region.service';

@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.scss'],
})
export class RegionComponent implements OnInit {
  regions$: Observable<Region[]>;

  constructor(private _regionService: RegionService) {}

  ngOnInit(): void {
    this.regions$ = this._regionService.getRegions();
  }
}
