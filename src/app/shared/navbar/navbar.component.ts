import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class AppNavbarComponent implements OnInit {

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
