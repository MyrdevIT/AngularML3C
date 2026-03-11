import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Article } from './article/article';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Article],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('App2');
}
