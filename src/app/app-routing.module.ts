import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { InfoComponent } from './info/info.component';
import { RequestComponent } from './request/request.component';
import { SliderComponent } from './slider/slider.component';

const routes: Routes = [
  {path:'anasayfa', component : SliderComponent },
  {path:'hakkimizda', component : InfoComponent },
  {path:'iletisim', component : ContactComponent },
  {path:'istekler', component : RequestComponent},
  {path:'',redirectTo : 'anasayfa',pathMatch : 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
