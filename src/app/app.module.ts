import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialComponents} from './material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './shared/app-routing/app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { LoginService } from './services/login.service';
import { DragonsComponent } from './dragons/dragons.component';
import { DetailsComponent } from './details/details.component';
import { ErrorComponent } from './shared/error/error.component';
import { AppNavbarComponent } from './shared/navbar/navbar.component';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    DragonsComponent,
    DetailsComponent,
    ErrorComponent,
    AppNavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialComponents,
    CommonModule
  ],
  providers: [
    LoginService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
