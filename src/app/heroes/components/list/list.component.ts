import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-heroes',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  public heroNames: string[] = ['Spiderman', 'Iroman', 'Hulk', 'She Hulk', 'Thor']

  public deletedHero?: string 

  removeLastHero():void {
   this.deletedHero = this.heroNames.pop();

  }


}
