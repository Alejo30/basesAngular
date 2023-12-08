import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import { identity } from 'rxjs';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Input()
  public characterList: Character[] = [{
    name: 'Trunks',
    power: 10
  }]

  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter(); 

  onDeleteCharacter(id?: string):void {
    this.onDelete.emit( id );
  }


}
