import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MissionsContainerComponent} from "./container/missions-container/missions-container.component";

const routes: Routes = [
  {path: '', component: MissionsContainerComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MissionsRoutingModule {
}
