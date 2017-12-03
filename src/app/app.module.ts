import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { ImageListComponent } from './image-list/image-list.component';


import { ImageService } from './shared/image.service';


@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    ImageListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ImageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
