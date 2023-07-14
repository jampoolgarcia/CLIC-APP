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
import { GravatarModule } from 'ngx-gravatar';

// shared
import { SharedModule } from '@shared/shared.module';
import { SpinnerInterceptor } from '@shared/interceptor/spinner-interceptor.interceptor';

// interceptor
import { HTTP_INTERCEPTORS } from '@angular/common/http';




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
    GravatarModule,
  ],
  exports: [
    RouterModule,
    ReactiveFormsModule,
    SharedModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: SpinnerInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
