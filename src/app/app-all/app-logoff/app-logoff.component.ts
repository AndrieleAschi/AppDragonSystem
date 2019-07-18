import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logoff',
  templateUrl: './app-logoff.component.html',
  styleUrls: ['./app-logoff.component.scss']
})
export class AppLogoffComponent implements OnInit {

  constructor(
    private loginService: LoginService,
    private router: Router
    ) {}
  
  ngOnInit() {
  }

  onLogoff() {
    this.loginService.logoff();
    this.router.navigate(['/login']);
  }

}
