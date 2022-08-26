import { ComponentModule } from './../components/component.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterControlRoutingModule } from './router-control-routing.module';
import { RouterControlComponent } from './router-control.component';

@NgModule({
  declarations: [RouterControlComponent],
  imports: [CommonModule, RouterControlRoutingModule, ComponentModule]
})
export class RouterControlModule {}
