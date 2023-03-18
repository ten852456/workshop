import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { DressviewUserComponent } from './dressview-user/dressview-user.component';
import { DressviewComponent } from './dressview/dressview.component';
import { DressShowComponent } from './dressview/dress-show/dress-show.component';
import { DressAddEditComponent } from './dressview/dress-add-edit/dress-add-edit.component';
import { DressShowUserComponent } from './dressview-user/dress-show-user/dress-show-user.component';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {DialogModule} from 'primeng/dialog';
import { MatSliderModule } from '@angular/material/slider';
import { SharedService } from './shared.service';
import { DatePipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    DressviewUserComponent,
    DressviewComponent,
    DressShowComponent,
    DressAddEditComponent,
    DressShowUserComponent
  ],
  imports: [
    MatSliderModule,
    DialogModule,
    InputTextModule,
    ButtonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    BrowserAnimationsModule
  ],
  providers: [SharedService,DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
