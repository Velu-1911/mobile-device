import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgxSpinnerModule } from 'ngx-spinner';
import { SearchrouterComponent } from './searchrouter/searchrouter.component';
import { WifisearchComponent } from './wifisearch/wifisearch.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ConnectedComponent } from './connected/connected.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgModel } from '@angular/forms';

import { ToastrModule } from 'ngx-toastr';

import { HttpClientModule } from '@angular/common/http';
import { DisplaymatComponent } from './displaymat/displaymat.component';
@NgModule({
  declarations: [
    AppComponent,
    SearchrouterComponent,
    ConnectedComponent,
    WifisearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxSpinnerModule,
    FormsModule,
    CommonModule,
    BrowserAnimationsModule,
    DisplaymatComponent,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule,
    ToastrModule.forRoot({ positionClass:"toast-bottom-center",
      preventDuplicates:true,
      timeOut:2000,
      progressBar:true,

    }),
    BrowserAnimationsModule
     
  ],
  exports:[NgxSpinnerModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
