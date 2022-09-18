import {NgModule} from '@angular/core';
import {MissionsComponent} from './container/missions/missions.component';
import {MissionsRoutingModule} from "./missions-routing.module";
import {MissionsContainerComponent} from './container/missions-container/missions-container.component';
import {ConnectedModule} from "../connected.module";
import {TagModule} from "primeng/tag";

@NgModule({
  declarations: [
    MissionsComponent,
    MissionsContainerComponent,
  ],
  imports: [
    MissionsRoutingModule,
    ConnectedModule,
    TagModule,
  ]
})
export class MissionsModule {
}
