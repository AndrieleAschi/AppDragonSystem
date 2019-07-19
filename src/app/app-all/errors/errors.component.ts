import { Component, OnInit } from '@angular/core';

import { ErrorService } from '../../services/error.service';

@Component({
  selector: 'app-errors',
  templateUrl: './errors.component.html',
  styleUrls: ['./errors.component.scss']
})
export class ErrorsComponent implements OnInit {

  constructor(public errorService: ErrorService) { }

  ngOnInit() {
  }

}
