// angular core
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Router
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';

// variables de entorno
import { environment } from '../environments/environment';

// components
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// shared
import { ToastComponent } from '@shared/components/toast/toast.component';

// external librery
import { NgxSpinnerModule } from 'ngx-spinner';




@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NgbModule,
    ToastComponent,
    NgxSpinnerModule,
  ],
  exports: [
    RouterModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
