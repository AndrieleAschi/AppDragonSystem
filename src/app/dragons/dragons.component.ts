import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Dragon } from '../model/dragon';
import { DragonService } from '../services/dragon.service';
import { Observable } from 'rxjs';
import { Dragons } from '../model/dragons';

@Component({
  selector: 'app-dragons',
  templateUrl: './dragons.component.html',
  styleUrls: ['./dragons.component.scss']
})
export class DragonsComponent implements OnInit {

  dragons: Dragon[];
  dragons$:Observable<Dragons>;
  loadingIndicator: boolean;
  today: number = Date.now();

  constructor(
    private dragonService: DragonService,
    private router: Router,
    ) { }

  ngOnInit() {
    this.getDragons();
    this.dragons$ = this.dragonService.getDragons();
  }

  getDragons(): void {
    this.loadingIndicator = true;
    this.dragonService.getDragons().subscribe(response => {

      let dragonArray: Dragon[] = response as Dragon[]
      this.dragons = dragonArray;

      this.dragons.map( i => { i.createdAt = new Date(i.createdAt);
      });
      this.loadingIndicator = false;
    });
  }

  deleteDragon(dragon: Dragon): void {
    this.dragonService.deleteDragon(dragon).subscribe();
    this.dragons = this.dragons.filter(d => d !== dragon);
  }

  editDragon(dragon: Dragon): void {
    this.router.navigate(['dragons/' + dragon]);
  }
}
