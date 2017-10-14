import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MyInput } from './shared/components/my-input/my-input.component';
import { MyButton } from './shared/components/my-button/my-button.component';
import { MyButtonBW } from './shared/components/my-button-bw/my-button.component';

@NgModule({
  declarations: [
    AppComponent,
    MyInput,
    MyButton,
    MyButtonBW
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
