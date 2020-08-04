import { UserModel } from './../../models/user.model';
import { Component, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: '[app-list-element]',
  templateUrl: './list-element.component.html',
  styleUrls: ['./list-element.component.scss']
})
export class ListElementComponent {

  @Input() user: UserModel;
  @Input() index: number;

  @Output() delete = new EventEmitter<UserModel>();
  @Output() edit = new EventEmitter<UserModel>();

  public deleteUser(): void {
    this.delete.emit(this.user);
  }

  public editUser(): void {
    this.edit.emit(this.user);
  }
}
