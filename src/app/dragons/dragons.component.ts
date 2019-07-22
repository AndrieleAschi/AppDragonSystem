import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Dragon } from './dragon';
import { DragonService } from '../services/dragon.service';

@Component({
  selector: 'app-dragons',
  templateUrl: './dragons.component.html',
  styleUrls: ['./dragons.component.scss']
})
export class DragonsComponent implements OnInit {

  dragons: Dragon[];
  loadingIndicator: boolean;
  today: number = Date.now();

  getDragons(): void {
    this.loadingIndicator = true;
    this.dragonService.getDragons().subscribe(response => {
      response.items.map( i => { i.created_at = new Date(i.created_at);
    });
      this.dragons = response.items;
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

  constructor(
    private dragonService: DragonService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.getDragons();
  }

}