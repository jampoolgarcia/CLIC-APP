import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Router
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';

// bootstrap
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// firestore 
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { provideAuth, getAuth } from '@angular/fire/auth';

// components
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    NgbModule,
    ReactiveFormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
    provideAuth(() => getAuth()),
  ],
  exports: [
    RouterModule,
    NgbModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
