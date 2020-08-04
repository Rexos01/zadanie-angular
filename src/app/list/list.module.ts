import { UserModalComponent } from './user-modal/user-modal.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { ListElementComponent } from './list-element/list-element.component';
import { ListRoutingModule } from './list-routing.module';
import { FormsModule } from '@angular/forms';
import { ConfirmModalComponent } from './confirm-modal/confirm-modal.component';


@NgModule({
  declarations: [
    ListComponent,
    ListElementComponent,
    UserModalComponent,
    ConfirmModalComponent
  ],
  imports: [
    CommonModule,
    ListRoutingModule,
    FormsModule
  ]
})
export class ListModule { }
