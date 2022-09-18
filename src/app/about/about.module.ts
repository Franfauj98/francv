import {NgModule} from '@angular/core';
import {AboutComponent} from './container/about/about.component';
import {AboutRoutingModule} from "./about-routing.module";
import {AboutContainerComponent} from './container/about-container/about-container.component';
import {ButtonModule} from "primeng/button";
import {RippleModule} from "primeng/ripple";

@NgModule({
  declarations: [
    AboutComponent,
    AboutContainerComponent,
  ],
  imports: [
    AboutRoutingModule,
    ButtonModule,
    RippleModule,
  ]
})
export class AboutModule {
}
