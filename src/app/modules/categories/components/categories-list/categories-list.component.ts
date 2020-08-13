import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.scss']
})
export class CategoriesListComponent {
  @Input() categories: string[];
  @Output() categoryClicked: EventEmitter<string> = new EventEmitter();
}
