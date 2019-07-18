import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialComponents} from './material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-all/app-routing/app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { LoginService } from './services/login.service';
import { DragonsComponent } from './dragons/dragons.component';
import { DetailsComponent } from './details/details.component';
import { MessagesComponent } from './app-all/messages/messages.component';
import { AppLogoffComponent } from './app-all/app-logoff/app-logoff.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    DragonsComponent,
    DetailsComponent,
    MessagesComponent,
    AppLogoffComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialComponents
  ],
  providers: [
    LoginService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
