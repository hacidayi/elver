import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavigationComponent } from './navigation/navigation.component';
import { SliderComponent } from './slider/slider.component';
import { OurComponent } from './our/our.component';
import { VakifComponent } from './vakif/vakif.component';
import { FooterComponent } from './footer/footer.component';
import { RequestComponent } from './request/request.component';
import { ContactComponent } from './contact/contact.component';
import { InfoComponent } from './info/info.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavigationComponent,
    SliderComponent,
    OurComponent,
    VakifComponent,
    FooterComponent,
    RequestComponent,
    ContactComponent,
    InfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
