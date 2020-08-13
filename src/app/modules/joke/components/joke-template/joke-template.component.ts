import { Component, Input } from '@angular/core';
import { Joke } from '../../services';

@Component({
  selector: 'app-joke-template',
  templateUrl: './joke-template.component.html',
  styleUrls: ['./joke-template.component.scss']
})
export class JokeTemplateComponent {
  @Input() joke: Joke;
}
