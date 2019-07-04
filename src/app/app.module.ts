import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { RxjsModule } from './rxjs/rxjs.module';
import { AppRoutingModule } from './app.routing';
import { NavComponent } from './nav/nav.component';
import { MatMenuModule } from '@angular/material';
import { RxjsRoutingModule } from './rxjs/rxjs-routing';
import { FormsComponent } from './forms/forms.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
   declarations: [
      AppComponent,
      NavComponent,
      FormsComponent
   ],
   imports: [
      BrowserModule,
      RxjsModule,
      AppRoutingModule,
      BrowserAnimationsModule,
      MatMenuModule,
      RxjsRoutingModule,
      ReactiveFormsModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
