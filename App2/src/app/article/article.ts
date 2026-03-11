import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-article',
  imports: [],
  templateUrl: './article.html',
  styleUrl: './article.scss',
})
export class Article {
  @Input() image: string = "";
  @Input() title: string = "";
  @Input() content: string = "";
}
