import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Article } from './article/article';
import { AppFooter } from './app-footer/app-footer';
import { AppHeader } from './app-header/app-header';
import { Accordion } from './accordion/accordion';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Article, AppFooter, AppHeader, Accordion ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('App2');
}
