import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { ImageListComponent } from './image-list/image-list.component';


import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { ImageService } from './shared/image.service';


@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    ImageListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MatCardModule,
    MatInputModule,
    MatProgressBarModule
  ],

  providers: [ImageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
